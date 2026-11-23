"use client";

import { useState } from "react";

const navLinks = [
  { label: "Models", href: "#models" },
  { label: "Gallery", href: "#gallery" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-white font-extrabold text-xl tracking-wider">J</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-widest text-accent leading-none">
              JETOUR
            </span>
            <span className="text-[10px] tracking-widest uppercase text-gold font-bold">
              Travel+ Global
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-accent-light transition-all shadow-sm hover:shadow-md"
          >
            Book a Test Drive
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-accent hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-lg px-6 py-5 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-base font-semibold text-accent/80 hover:text-accent transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="block bg-accent text-white px-5 py-3 rounded-xl text-sm font-bold text-center hover:bg-accent-light transition-colors mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Book a Test Drive
          </a>
        </div>
      )}
    </nav>
  );
}
