import { NextResponse, type NextRequest } from "next/server";
import { activeVehicles, contact } from "@/config/site";

/**
 * Enquiry endpoint.
 *
 * Forwards validated enquiries to the client's approved destination, set via
 * environment variables (never committed to the repository):
 *
 *   ENQUIRY_WEBHOOK_URL    HTTPS endpoint of the CRM / email service / secure DB API
 *   ENQUIRY_WEBHOOK_TOKEN  optional bearer token sent as Authorization header
 *   ALLOWED_ORIGIN         optional, e.g. https://www.yourdomain.com
 *
 * If ENQUIRY_WEBHOOK_URL is not set, the endpoint returns 503 and the form
 * shows an error — a successful submission is never simulated.
 */

export const runtime = "nodejs";

const MIN_FILL_MS = 2500;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>(); // best-effort per-instance rate limit

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, max) : "");

export async function POST(req: NextRequest) {
  // Same-origin check.
  const origin = req.headers.get("origin");
  const allowed = process.env.ALLOWED_ORIGIN || req.nextUrl.origin;
  if (origin && origin !== allowed) return NextResponse.json({ message: "Request not allowed." }, { status: 403 });

  // Rate limit.
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return NextResponse.json({ message: "Too many enquiries. Please try again later." }, { status: 429 });
  recent.push(now);
  hits.set(ip, recent);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  // Spam traps: honeypot filled or form submitted implausibly fast.
  if (clean(body.website, 200) || Number(body.elapsedMs) < MIN_FILL_MS) {
    return NextResponse.json({ message: "We couldn't verify this submission. Please try again." }, { status: 400 });
  }

  const data = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 20),
    email: clean(body.email, 160),
    location: clean(body.location, 120),
    vehicle: clean(body.vehicle, 40),
    type: clean(body.type, 60),
    message: clean(body.message, 2000),
    consent: body.consent === true,
  };

  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = "Please enter your full name.";
  if (!/^\+?[0-9\s\-()]{7,20}$/.test(data.phone)) errors.phone = "Please enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.location.length < 2) errors.location = "Please enter your city or region.";
  const vehicle = activeVehicles.find((v) => v.id === data.vehicle);
  if (!vehicle) errors.vehicle = "Please choose a vehicle.";
  if (!contact.enquiryTypes.includes(data.type)) errors.type = "Please choose an enquiry type.";
  if (!data.consent) errors.consent = "Please accept the privacy notice to continue.";
  if (Object.keys(errors).length) return NextResponse.json({ message: "Please check the highlighted fields.", errors }, { status: 422 });

  const target = process.env.ENQUIRY_WEBHOOK_URL;
  if (!target) {
    console.error("[enquiry] ENQUIRY_WEBHOOK_URL is not configured — enquiry not delivered.");
    return NextResponse.json(
      { message: "Online enquiries are temporarily unavailable. Please contact us by phone or email." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(target, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.ENQUIRY_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.ENQUIRY_WEBHOOK_TOKEN}` } : {}),
      },
      body: JSON.stringify({ ...data, vehicleName: vehicle!.name, submittedAt: new Date().toISOString(), source: "website" }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Upstream ${res.status}`);
  } catch (err) {
    console.error("[enquiry] delivery failed", err);
    return NextResponse.json({ message: "We couldn't send your enquiry right now. Please try again shortly." }, { status: 502 });
  }

  return NextResponse.json({ message: "Thank you. Your enquiry has been received and a JETOUR specialist will be in touch." });
}
