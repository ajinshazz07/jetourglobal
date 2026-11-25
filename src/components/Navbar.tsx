"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { brandLogos } from "@/assets/images";

const navLinks = [
  { label: "Models", href: "#models" },
  { label: "Features", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          scrolled
            ? "bg-primary/90 backdrop-blur-xl border-b border-border shadow-sm py-2.5 sm:py-3"
            : "bg-gradient-to-b from-primary/95 via-primary/65 to-transparent py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group py-1" aria-label="JETOUR Home">
            <div className="relative h-6 sm:h-7 w-32 sm:w-36 flex items-center transition-transform group-hover:scale-105">
              <Image
                src={brandLogos.jetourLogo}
                alt="JETOUR"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 128px, 144px"
              />
            </div>
            <span className="hidden sm:inline-block h-3.5 w-[1px] bg-ink/20" />
            <span className="hidden sm:inline-block text-[10px] font-bold text-accent-deep tracking-widest uppercase">
              Global
            </span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink/75 hover:text-ink transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="bg-accent hover:bg-gold-light text-ink px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-accent/25 active:scale-95"
            >
              Book a Test Drive
            </a>
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-secondary/80 text-ink border border-ink/15 hover:bg-secondary transition-colors cursor-pointer active:scale-90"
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
      </header>

      {/* Mobile Slide-Over Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-ink/45 backdrop-blur-sm transition-opacity"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer content */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-xs bg-primary/98 backdrop-blur-2xl border-l border-border p-5 sm:p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out pt-safe pb-safe ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            {/* Header in drawer */}
            <div className="flex items-center justify-between pb-5 border-b border-border">
              <div className="relative h-6 w-28 flex items-center">
                <Image
                  src={brandLogos.jetourLogo}
                  alt="JETOUR"
                  fill
                  className="object-contain object-left"
                  sizes="112px"
                />
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-xl bg-secondary text-ink flex items-center justify-center hover:bg-border transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <div className="py-5 space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold text-ink/80 hover:text-ink hover:bg-secondary transition-colors cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Drawer CTA footer */}
          <div className="pt-5 border-t border-border space-y-3">
            <a
              href="#pricing"
              className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-gold-light text-ink text-sm font-bold py-3.5 px-4 rounded-xl transition-all shadow-md active:scale-95"
              onClick={() => setMenuOpen(false)}
            >
              Book a Test Drive
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <p className="text-center text-xs text-muted pt-1">
              Global Support: concierge@jetourglobal.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
