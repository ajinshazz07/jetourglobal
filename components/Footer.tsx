import type { ReactNode } from "react";
import { footer } from "@/config/site";
import Logo from "./Logo";

const icons: Record<string, ReactNode> = {
  Instagram: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></svg>,
  Facebook: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v6h4v-6h3l1-4h-4V8z" /></svg>,
  TikTok: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.4 2.3 1.8 3.8 4 4v3.2c-1.5 0-2.9-.4-4-1.2V15a6 6 0 1 1-6-6v3.3a2.7 2.7 0 1 0 2.7 2.7V3H16z" /></svg>,
  X: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" /></svg>,
  YouTube: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9l5.7 3.1-5.7 3.1z" /></svg>,
};

export default function Footer() {
  const { company, social, legal, copyright } = footer;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a href="#top" className="logo" aria-label="JETOUR — back to top"><Logo /></a>
          <address className="footer__company" style={{ fontStyle: "normal" }}>
            <span>{company.name}</span>
            <span>{company.address}</span>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </address>
          <ul className="footer__social" aria-label="Social media">
            {social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in a new tab)`}>
                  {icons[s.label] ?? s.label.slice(0, 2)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__bottom">
          <p>{copyright}</p>
          <ul className="footer__legal">
            {legal.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
