"use client";

import Image from "next/image";
import { vehicleImages } from "@/assets/images";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[100svh] overflow-hidden flex flex-col justify-between items-center bg-primary">
      {/* Subtle Warm Architectural Studio Glow */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[1000px] h-[420px] sm:h-[540px] bg-secondary/80 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] sm:w-[700px] h-[240px] bg-accent/15 blur-[90px] rounded-full" />
      </div>

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
        {/* Soft Warm Edge Blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/65 via-transparent to-primary/85 pointer-events-none" />
      </div>

      {/* Minimal ONE Title Text */}
      <div className="relative z-10 pt-28 sm:pt-36 md:pt-40 px-4 text-center w-full animate-fade-in-up">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-ink tracking-widest uppercase drop-shadow-sm">
          JETOUR <span className="gold-shimmer">T2</span>
        </h1>
      </div>

      {/* Minimal Scroll Prompt */}
      <div className="relative z-10 pb-8 sm:pb-12 text-center animate-fade-in-up-delay-2">
        <a
          href="#models"
          className="inline-flex flex-col items-center gap-1.5 text-muted hover:text-ink transition-colors group cursor-pointer"
          aria-label="Explore JETOUR models"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-muted group-hover:text-ink transition-colors">
            Explore Lineup
          </span>
          <svg
            className="w-5 h-5 text-accent-deep animate-bounce transition-transform group-hover:translate-y-1"
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
