"use client";

import { useEffect, useState } from "react";

export default function MobileBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear once scrolled past the top hero headline
      setVisible(window.scrollY > 380);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick mobile action"
      className="fixed bottom-3 inset-x-3 z-40 md:hidden animate-fade-in-up pb-safe pointer-events-auto"
    >
      <div className="max-w-md mx-auto bg-primary/95 backdrop-blur-xl border border-border p-2 sm:p-2.5 rounded-2xl shadow-xl flex items-center justify-between gap-2.5">
        <div className="pl-2 min-w-0 flex-1">
          <div className="text-ink text-xs font-bold tracking-tight truncate">
            JETOUR T2 Traveller
          </div>
          <div className="text-[10px] font-semibold truncate flex items-center gap-1.5 mt-0.5 select-none">
            <span className="w-1.5 h-1.5 rounded-full neon-dot-emerald animate-pulse flex-shrink-0" />
            <span className="neon-glow-emerald font-bold">AVAILABLE NOW</span>
            <span className="text-ink/25">·</span>
            <span className="text-muted">From $32,990</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <a
            href="#models"
            className="bg-secondary hover:bg-border text-ink text-xs font-semibold px-2.5 py-2 rounded-sm transition-all border border-ink/10 active:translate-y-px"
          >
            Models
          </a>
          <a
            href="#pricing"
            className="bg-accent hover:bg-gold-light text-ink text-xs font-bold px-3 py-2 rounded-sm transition-all shadow-[2px_2px_0_rgba(37,37,37,0.18)] border border-accent active:translate-y-px active:shadow-none whitespace-nowrap"
          >
            Book Drive
          </a>
        </div>
      </div>
    </aside>
  );
}
