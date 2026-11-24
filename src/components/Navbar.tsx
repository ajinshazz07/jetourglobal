"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Models", href: "#models" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm py-3"
            : "bg-white/70 backdrop-blur-md border-b border-white/20 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-base sm:text-lg">J</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-widest text-accent leading-none">
                JETOUR
              </span>
              <span className="text-[9px] font-semibold text-gold tracking-wider uppercase mt-0.5">
                Travel+ Global
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors hover:text-accent relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-accent-light transition-all shadow-md hover:shadow-accent/20 active:scale-95"
            >
              Book a Test Drive
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer active:scale-90"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-5 h-5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Over Drawer with Glassmorphism */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer content */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-slate-950/95 backdrop-blur-2xl border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out pt-safe pb-safe ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            {/* Header in drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center text-accent font-black text-sm">
                  J
                </div>
                <span className="text-white font-bold tracking-widest text-base">
                  JETOUR
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <div className="py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Drawer CTA footer */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href="#pricing"
              className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-accent text-sm font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg active:scale-95"
              onClick={() => setMenuOpen(false)}
            >
              Book a Test Drive
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <p className="text-center text-xs text-white/40 pt-2">
              Global Helpline: +1 (800) JETOUR-01
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
