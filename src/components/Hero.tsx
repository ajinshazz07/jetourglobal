"use client";

import Image from "next/image";
import { vehicleImages } from "@/assets/images";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[100svh] overflow-hidden flex flex-col justify-between items-center bg-slate-950">
      {/* 100% Full-Screen Edge-to-Edge Car Image */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center pointer-events-none">
        <Image
          src={vehicleImages.t2Silver}
          alt="JETOUR T2 Luxury 4WD Off-Road SUV"
          fill
          priority
          className="object-contain p-4 sm:p-10 md:p-16 select-none"
          sizes="100vw"
        />
        {/* Subtle Luxury Vignette & Lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/20 to-black/60 pointer-events-none" />
      </div>

      {/* Minimal ONE Title Text */}
      <div className="relative z-10 pt-28 sm:pt-36 md:pt-40 px-4 text-center w-full animate-fade-in-up">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-widest uppercase drop-shadow-2xl">
          JETOUR <span className="gold-shimmer">T2</span>
        </h1>
      </div>

      {/* Minimal Scroll Prompt */}
      <div className="relative z-10 pb-8 sm:pb-12 text-center animate-fade-in-up-delay-2">
        <a
          href="#models"
          className="inline-flex flex-col items-center gap-1.5 text-white/50 hover:text-gold transition-colors group cursor-pointer"
          aria-label="Explore JETOUR models"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-white/50 group-hover:text-gold transition-colors">
            Explore Lineup
          </span>
          <svg
            className="w-5 h-5 text-gold animate-bounce transition-transform group-hover:translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
