"use client";

import Image from "next/image";
import { vehicleImages } from "@/assets/images";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-primary flex flex-col">
      {/* Warm Studio Glow */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[1000px] h-[420px] sm:h-[540px] bg-secondary/80 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] sm:w-[700px] h-[240px] bg-accent/15 blur-[90px] rounded-full" />
      </div>

      {/* ── MOBILE layout: flex-col stacked ── */}
      <div className="flex flex-col md:hidden relative z-10 flex-1">
        {/* Title — sits above the car */}
        <div className="pt-24 pb-4 px-5 text-center animate-fade-in-up">
          <h1 className="text-5xl font-black text-ink tracking-tight uppercase leading-none">
            JETOUR <span className="gold-shimmer">T2</span>
          </h1>
          <p className="mt-2 text-xs font-semibold text-muted tracking-widest uppercase">
            Engineered for Adventure
          </p>
        </div>

        {/* Car image — centered, takes up most of screen */}
        <div className="relative flex-1 min-h-[55vw] w-full">
          <Image
            src={vehicleImages.t2Silver}
            alt="JETOUR T2 Luxury 4WD Off-Road SUV"
            fill
            priority
            className="object-contain select-none"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/70 pointer-events-none" />
        </div>

        {/* Scroll prompt */}
        <div className="pb-8 text-center animate-fade-in-up-delay-2">
          <a
            href="#models"
            className="inline-flex flex-col items-center gap-1.5 text-muted hover:text-ink transition-colors group cursor-pointer"
            aria-label="Explore JETOUR models"
          >
            <span className="text-[10px] font-semibold tracking-widest uppercase text-muted group-hover:text-ink transition-colors">
              Explore Lineup
            </span>
            <svg
              className="w-5 h-5 text-accent animate-bounce"
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
      </div>

      {/* ── DESKTOP layout: full-screen immersive ── */}
      <div className="hidden md:flex flex-col h-screen relative z-10">
        {/* Full-bleed car image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src={vehicleImages.t2Silver}
            alt="JETOUR T2 Luxury 4WD Off-Road SUV"
            fill
            priority
            className="object-contain p-10 lg:p-16 select-none"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/80 pointer-events-none" />
        </div>

        {/* Title — top-left, tight */}
        <div className="relative z-10 pt-32 lg:pt-36 px-10 lg:px-16 animate-fade-in-up">
          <h1 className="text-7xl lg:text-9xl font-black text-ink tracking-tight uppercase leading-none drop-shadow-sm">
            JETOUR <span className="gold-shimmer">T2</span>
          </h1>
          <p className="mt-3 text-sm font-semibold text-muted tracking-widest uppercase">
            Engineered for Adventure
          </p>
        </div>

        {/* Scroll prompt — bottom center */}
        <div className="relative z-10 mt-auto pb-10 text-center animate-fade-in-up-delay-2">
          <a
            href="#models"
            className="inline-flex flex-col items-center gap-1.5 text-muted hover:text-ink transition-colors group cursor-pointer"
            aria-label="Explore JETOUR models"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-muted group-hover:text-ink transition-colors">
              Explore Lineup
            </span>
            <svg
              className="w-5 h-5 text-accent animate-bounce"
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
      </div>
    </section>
  );
}
