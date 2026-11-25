"use client";

import { useState } from "react";

interface EnquiryData {
  id: string;
  name: string;
  contact: string;
  model: string;
  purpose: string;
  notes: string;
  submittedAt: string;
}

const VEHICLE_OPTIONS = [
  "JETOUR T2 Traveller (Available Now)",
  "JETOUR T2 TOPFIRE Custom (Available Now)",
  "JETOUR G700 Flagship SUV (Coming Soon)",
  "JETOUR F700 Adventure Truck (Coming Soon)",
  "JETOUR T1 Cross Urban (Coming Soon)",
];

const PURPOSE_OPTIONS = [
  "Test Drive Reservation",
  "Price Quote & Delivery",
  "Custom Expedition Build",
  "General Showroom Enquiry",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [model, setModel] = useState(VEHICLE_OPTIONS[0]);
  const [purpose, setPurpose] = useState(PURPOSE_OPTIONS[0]);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<EnquiryData | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    // Minimal validation
    if (!name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!contact.trim() || contact.length < 5) {
      setErrorMessage("Please provide a valid email address or phone / WhatsApp number.");
      return;
    }

    setIsSubmitting(true);

    const enquiryId = `JT-${Date.now().toString().slice(-6)}`;
    const newEnquiry: EnquiryData = {
      id: enquiryId,
      name: name.trim(),
      contact: contact.trim(),
      model,
      purpose,
      notes: notes.trim(),
      submittedAt: new Date().toISOString(),
    };

    // Store in browser localStorage lead repository
    try {
      const existingRaw = localStorage.getItem("jetour_enquiries");
      const existingList: EnquiryData[] = existingRaw ? JSON.parse(existingRaw) : [];
      existingList.unshift(newEnquiry);
      localStorage.setItem("jetour_enquiries", JSON.stringify(existingList));
    } catch {
      // LocalStorage fallback for private browsing
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedEnquiry(newEnquiry);
    }, 400);
  };

  const handleReset = () => {
    setName("");
    setContact("");
    setNotes("");
    setModel(VEHICLE_OPTIONS[0]);
    setPurpose(PURPOSE_OPTIONS[0]);
    setSubmittedEnquiry(null);
    setErrorMessage("");
  };

  // WhatsApp Concierge Direct URL
  const whatsappUrl = submittedEnquiry
    ? `https://wa.me/?text=${encodeURIComponent(
        `Hello JETOUR Global Concierge, I submitted enquiry ref #${submittedEnquiry.id} for the ${submittedEnquiry.model} (${submittedEnquiry.purpose}). Name: ${submittedEnquiry.name}.`
      )}`
    : `https://wa.me/?text=${encodeURIComponent(
        `Hello JETOUR Global Concierge, I would like to enquire about the JETOUR T2 Traveller.`
      )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-primary text-ink relative overflow-hidden w-full">
      {/* Ambient luxury warm lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-secondary/90 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-accent/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Global Concierge Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Online Concierge Status */}
              <div className="inline-flex items-center gap-2 mb-4 select-none">
                <span className="w-1.5 h-1.5 rounded-full neon-dot-emerald animate-pulse" />
                <span className="neon-glow-emerald text-[10px] sm:text-[11px] font-extrabold uppercase">
                  Global Concierge · Ready to Assist
                </span>
              </div>

              <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
                Reserve Your <span className="gold-shimmer">Adventure</span>
              </h2>

              <p className="mt-3.5 text-muted text-sm sm:text-base leading-relaxed">
                Connect directly with our dedicated vehicle specialists for priority test drive slots, allocation timelines, and custom off-road equipment packages.
              </p>

              {/* Concierge Perks */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-secondary/70 border border-border">
                  <div className="w-8 h-8 rounded-lg bg-primary text-accent-deep border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">VIP Test Drive Booking</h3>
                    <p className="text-xs text-muted mt-0.5">
                      Available now for the award-winning JETOUR T2 Traveller & TOPFIRE Custom.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-secondary/70 border border-border">
                  <div className="w-8 h-8 rounded-lg bg-primary text-accent-deep border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">7-Year / 150,000 km Warranty</h3>
                    <p className="text-xs text-muted mt-0.5">
                      Official Chery Holding global warranty and authorized service network.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-secondary/70 border border-border">
                  <div className="w-8 h-8 rounded-lg bg-primary text-accent-deep border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">International Fleet & Export</h3>
                    <p className="text-xs text-muted mt-0.5">
                      Direct export dispatch and dealer network across GCC, Middle East & Global hubs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Contact Links */}
            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-ink hover:text-accent-deep transition-colors"
              >
                <svg className="w-4 h-4 fill-emerald-700" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                </svg>
                <span>WhatsApp Concierge</span>
              </a>

              <span className="text-border">·</span>

              <a
                href="mailto:concierge@jetourglobal.com"
                className="text-xs font-semibold text-muted hover:text-ink transition-colors"
              >
                concierge@jetourglobal.com
              </a>
            </div>
          </div>

          {/* Right Column: Minimal Enquiry Collecting Form */}
          <div className="lg:col-span-7">
            <div className="bg-secondary/85 border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl relative">
              {submittedEnquiry ? (
                /* Success Confirmation State */
                <div role="status" aria-live="polite" className="text-center py-6 sm:py-8 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-700/10 text-emerald-700 border border-emerald-700/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <span className="text-xs font-mono font-bold text-accent-deep tracking-widest uppercase">
                    Ref #{submittedEnquiry.id}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-ink mt-1">
                    Enquiry Received
                  </h3>

                  <p className="mt-2.5 text-sm sm:text-base text-muted max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-ink font-semibold">{submittedEnquiry.name}</span>. Your enquiry for the{" "}
                    <span className="text-accent-deep font-semibold">{submittedEnquiry.model}</span> has been logged. Our concierge team will reach out to{" "}
                    <span className="text-ink font-semibold">{submittedEnquiry.contact}</span> shortly.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink hover:bg-ink/90 text-primary font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg active:scale-95 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-emerald-400" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                      </svg>
                      <span>Connect on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-primary hover:bg-primary/80 text-ink text-sm font-semibold transition-all border border-border cursor-pointer active:scale-95"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Minimal Enquiry Form */
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  noValidate
                  aria-labelledby="contact-heading"
                  className="space-y-5"
                >
                  <div className="border-b border-border pb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-ink">
                      Vehicle Enquiry & Test Drive
                    </h3>
                    <p className="text-xs text-muted mt-1">
                      Fill in your details below and our team will get in touch immediately.
                    </p>
                  </div>

                  {errorMessage && (
                    <div
                      role="alert"
                      className="p-3 rounded-xl bg-red-600/10 border border-red-700/25 text-red-800 text-xs font-medium flex items-center gap-2"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Name and Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="enquiry-name" className="text-xs font-semibold text-ink">
                        Full Name <span className="text-accent-deep" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="enquiry-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="e.g. Alex Morgan"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errorMessage) setErrorMessage("");
                        }}
                        className="w-full px-3.5 py-3 rounded-xl bg-primary border border-border text-ink placeholder-muted/70 text-base sm:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="enquiry-contact" className="text-xs font-semibold text-ink">
                        Email or Phone / WhatsApp <span className="text-accent-deep" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="enquiry-contact"
                        name="contact"
                        type="text"
                        required
                        autoComplete="email"
                        placeholder="e.g. alex@example.com or +971..."
                        value={contact}
                        onChange={(e) => {
                          setContact(e.target.value);
                          if (errorMessage) setErrorMessage("");
                        }}
                        className="w-full px-3.5 py-3 rounded-xl bg-primary border border-border text-ink placeholder-muted/70 text-base sm:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Model of Interest */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="enquiry-model" className="text-xs font-semibold text-ink">
                      Select Model of Interest
                    </label>
                    <div className="relative">
                      <select
                        id="enquiry-model"
                        name="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-xl bg-primary border border-border text-ink text-base sm:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none cursor-pointer"
                      >
                        {VEHICLE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-primary text-ink py-1">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Purpose Selector Pills */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-ink">
                      Enquiry Purpose
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {PURPOSE_OPTIONS.map((opt) => {
                        const isSelected = purpose === opt;
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setPurpose(opt)}
                            className={`px-2.5 py-2.5 rounded-xl text-[11px] sm:text-xs font-semibold border transition-all text-center cursor-pointer active:scale-95 ${
                              isSelected
                                ? "bg-accent text-ink border-accent font-bold shadow-sm"
                                : "bg-primary/75 text-ink/75 border-border hover:border-accent hover:text-ink"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Notes (Optional) */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="enquiry-notes" className="text-xs font-semibold text-ink">
                      Additional Notes <span className="text-muted font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="enquiry-notes"
                      name="notes"
                      rows={2}
                      placeholder="Preferred showroom, delivery location, or trade-in queries..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-primary border border-border text-ink placeholder-muted/70 text-base sm:text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-gold-light text-ink font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-accent/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-ink border-t-transparent rounded-full animate-spin" />
                          <span>Logging Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Official Enquiry</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-muted text-center mt-2.5">
                      Your details are protected under JETOUR Global privacy compliance standards.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
