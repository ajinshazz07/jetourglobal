"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { activeVehicles, contact, footer } from "@/config/site";
import { useVehicle } from "./VehicleContext";

type Fields = { name: string; phone: string; email: string; location: string; vehicle: string; type: string; message: string; consent: boolean };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = { kind: "idle" | "loading" | "success" | "error"; message?: string };

const empty: Fields = { name: "", phone: "", email: "", location: "", vehicle: "", type: "", message: "", consent: false };

export function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^\+?[0-9\s\-()]{7,20}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.location.trim().length < 2) e.location = "Please enter your city or region.";
  if (!f.vehicle) e.vehicle = "Please choose a vehicle.";
  if (!f.type) e.type = "Please choose an enquiry type.";
  if (f.message.length > 2000) e.message = "Please keep your message under 2000 characters.";
  if (!f.consent) e.consent = "Please accept the privacy notice to continue.";
  return e;
}

export default function ContactSection() {
  const { enquiryVehicleId } = useVehicle();
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [hp, setHp] = useState("");
  const startedAt = useRef<number>(0);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => { startedAt.current = Date.now(); }, []);

  // Preselect the vehicle chosen via "Enquire Now".
  useEffect(() => {
    if (enquiryVehicleId) setF((p) => ({ ...p, vehicle: enquiryVehicleId, type: p.type || "Vehicle Information" }));
  }, [enquiryVehicleId]);

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    setF((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(f);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus({ kind: "loading" });
    try {
      const res = await fetch(contact.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, website: hp, elapsedMs: Date.now() - startedAt.current }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string; errors?: Errors };
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.message || "We couldn't send your enquiry. Please try again.");
      }
      setStatus({ kind: "success", message: data.message || "Thank you. Your enquiry has been received and a JETOUR specialist will be in touch." });
      setF(empty);
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong. Please try again." });
    } finally {
      requestAnimationFrame(() => statusRef.current?.focus());
    }
  };

  const field = (k: keyof Fields) => ({
    id: `f-${k}`,
    name: k,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `e-${k}` : undefined,
  });
  const Err = ({ k }: { k: keyof Fields }) => (errors[k] ? <span id={`e-${k}`} className="err">{errors[k]}</span> : null);

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact">
        <div>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 id="contact-title" className="h-section">{contact.heading}</h2>
          <p className="lead" style={{ marginTop: 24 }}>{contact.intro}</p>
          <address className="contact__details" style={{ fontStyle: "normal" }}>
            <span>{footer.company.address}</span>
            <a href={`tel:${footer.company.phone.replace(/\s/g, "")}`}>{footer.company.phone}</a>
            <a href={`mailto:${footer.company.email}`}>{footer.company.email}</a>
          </address>
        </div>

        <form ref={formRef} className="form" noValidate onSubmit={onSubmit} aria-describedby="form-note">
          <p id="form-note" className="sr-only">All fields except message are required.</p>
          <div className="form__row">
            <div className="field" data-invalid={!!errors.name}>
              <label htmlFor="f-name">Full name</label>
              <input {...field("name")} autoComplete="name" required value={f.name} onChange={(e) => set("name", e.target.value)} maxLength={120} />
              <Err k="name" />
            </div>
            <div className="field" data-invalid={!!errors.phone}>
              <label htmlFor="f-phone">Phone number</label>
              <input {...field("phone")} type="tel" inputMode="tel" autoComplete="tel" required value={f.phone} onChange={(e) => set("phone", e.target.value)} maxLength={20} />
              <Err k="phone" />
            </div>
          </div>
          <div className="form__row">
            <div className="field" data-invalid={!!errors.email}>
              <label htmlFor="f-email">Email</label>
              <input {...field("email")} type="email" autoComplete="email" required value={f.email} onChange={(e) => set("email", e.target.value)} maxLength={160} />
              <Err k="email" />
            </div>
            <div className="field" data-invalid={!!errors.location}>
              <label htmlFor="f-location">Location</label>
              <input {...field("location")} autoComplete="address-level2" required value={f.location} onChange={(e) => set("location", e.target.value)} maxLength={120} />
              <Err k="location" />
            </div>
          </div>
          <div className="form__row">
            <div className="field" data-invalid={!!errors.vehicle}>
              <label htmlFor="f-vehicle">Interested vehicle</label>
              <select {...field("vehicle")} required value={f.vehicle} onChange={(e) => set("vehicle", e.target.value)}>
                <option value="">Select a vehicle</option>
                {activeVehicles.map((v) => <option key={v.id} value={v.id}>{v.name}</option>)}
              </select>
              <Err k="vehicle" />
            </div>
            <div className="field" data-invalid={!!errors.type}>
              <label htmlFor="f-type">Enquiry type</label>
              <select {...field("type")} required value={f.type} onChange={(e) => set("type", e.target.value)}>
                <option value="">Select an enquiry type</option>
                {contact.enquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <Err k="type" />
            </div>
          </div>
          <div className="field" data-invalid={!!errors.message}>
            <label htmlFor="f-message">Message <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, color: "var(--muted)" }}>(optional)</span></label>
            <textarea {...field("message")} value={f.message} onChange={(e) => set("message", e.target.value)} maxLength={2000} />
            <Err k="message" />
          </div>

          {/* Honeypot — hidden from people and assistive tech; bots fill it. */}
          <div className="hp" aria-hidden="true">
            <label htmlFor="f-website">Website</label>
            <input id="f-website" name="website" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
          </div>

          <div className="field" data-invalid={!!errors.consent}>
            <label className="check" style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: 14 }}>
              <input {...field("consent")} type="checkbox" checked={f.consent} onChange={(e) => set("consent", e.target.checked)} required />
              <span>
                {contact.privacyText}{" "}
                <a href={footer.legal.find((l) => l.label === "Privacy Policy")?.href} target="_blank" rel="noopener noreferrer">Read the Privacy Policy</a>.
              </span>
            </label>
            <Err k="consent" />
          </div>

          <div>
            <button type="submit" className="btn" disabled={status.kind === "loading"} aria-busy={status.kind === "loading"}>
              {status.kind === "loading" ? <><span className="spinner" aria-hidden="true" /> Sending…</> : <>Submit Enquiry <span className="arrow" aria-hidden="true">→</span></>}
            </button>
          </div>

          <div ref={statusRef} tabIndex={-1} role="status" aria-live="polite" style={{ outline: "none" }}>
            {status.kind === "success" && <p className="status status--ok">{status.message}</p>}
            {status.kind === "error" && <p className="status status--err" role="alert">{status.message}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
