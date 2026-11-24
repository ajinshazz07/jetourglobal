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
      className="fixed bottom-3 inset-x-3 z-40 md:hidden animate-fade-in-up pb-safe"
    >
      <div className="bg-slate-950/90 backdrop-blur-xl border border-white/20 p-2.5 sm:p-3 rounded-2xl shadow-2xl flex items-center justify-between gap-3">
        <div className="pl-2">
          <div className="text-white text-xs font-bold tracking-tight">
            Jetour T2 Freedom
          </div>
          <div className="text-gold text-[10px] font-semibold mt-0.5">
            Smart 4WD · From $24,990
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#models"
            className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-all border border-white/10 active:scale-95"
          >
            Models
          </a>
          <a
            href="#pricing"
            className="bg-gold hover:bg-gold-light text-accent text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md active:scale-95"
          >
            Book Drive
          </a>
        </div>
      </div>
    </aside>
  );
}
