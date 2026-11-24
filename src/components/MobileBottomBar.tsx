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
      <div className="max-w-md mx-auto bg-slate-950/95 backdrop-blur-xl border border-white/20 p-2 sm:p-2.5 rounded-2xl shadow-2xl flex items-center justify-between gap-2.5">
        <div className="pl-2 min-w-0 flex-1">
          <div className="text-white text-xs font-bold tracking-tight truncate">
            JETOUR T2 Traveller
          </div>
          <div className="text-[10px] font-semibold truncate flex items-center gap-1.5 mt-0.5 select-none">
            <span className="w-1.5 h-1.5 rounded-full neon-dot-emerald animate-pulse flex-shrink-0" />
            <span className="neon-glow-emerald font-bold">AVAILABLE NOW</span>
            <span className="text-white/30">·</span>
            <span className="text-white/70">From $32,990</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <a
            href="#models"
            className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-2.5 py-2 rounded-xl transition-all border border-white/10 active:scale-95"
          >
            Models
          </a>
          <a
            href="#pricing"
            className="bg-gold hover:bg-gold-light text-accent text-xs font-bold px-3 py-2 rounded-xl transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            Book Drive
          </a>
        </div>
      </div>
    </aside>
  );
}
