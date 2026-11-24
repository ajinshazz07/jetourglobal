"use client";

import { useState } from "react";
import Image from "next/image";
import { vehicleImages } from "@/assets/images";

const heroVehicles = [
  {
    id: "desert-action",
    name: "Jetour T2 Freedom",
    badge: "Desert Overlanding",
    image: vehicleImages.desertAction,
    alt: "Jetour T2 Freedom SUV drifting aggressively on desert sand dunes",
    accent: "text-amber-400",
    specs: ["2.0T Turbo (254 HP)", "Smart X-WD System", "220mm Clearance"],
    terrain: "Dunes & Overland Trails",
    tagline: "Conquering extreme desert dunes with intelligent torque distribution",
  },
  {
    id: "freedom-1",
    name: "Jetour Freedom 2.0T",
    badge: "Launch Edition",
    image: vehicleImages.freedom1,
    alt: "Jetour Freedom SUV 2.0T launched with rugged design and affordable pricing",
    accent: "text-emerald-400",
    specs: ["2.0T Direct Injection", "Intelligent AWD", "5-Seat Luxury Cabin"],
    terrain: "Urban Highways & Trails",
    tagline: "Rugged geometric architecture paired with modern comfort and power",
  },
  {
    id: "freedom-2",
    name: "Jetour Freedom Expedition",
    badge: "Overland Series",
    image: vehicleImages.freedom2,
    alt: "Jetour Freedom SUV adventure edition ready for rugged terrains",
    accent: "text-sky-400",
    specs: ["Multi-Terrain Select", "Heavy-Duty Suspension", "360° Trail Camera"],
    terrain: "Rock, Sand & Wilderness",
    tagline: "Built for intrepid explorers seeking reliability in extreme climates",
  },
];

export default function Hero() {
  const [selectedVehicle, setSelectedVehicle] = useState(heroVehicles[0]);

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center hero-gradient overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16 w-full">
      {/* Decorative ambient lighting elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 right-5 w-72 sm:w-96 h-72 sm:h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-16 left-5 w-60 sm:w-72 h-60 sm:h-72 bg-blue-500/10 rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center w-full">
        {/* Top Tagline Pill */}
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-gold text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6 border border-white/15 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Travel+ Philosophy — Engineered for Adventure
          </span>
        </div>

        {/* Dynamic Fluid Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] sm:leading-[1.08] animate-fade-in-up-delay">
          Explore Beyond
          <br />
          <span className="gold-shimmer">Boundaries</span>
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed px-2 animate-fade-in-up-delay-2">
          SUVs engineered for wild horizons, intelligent comfort, and modern lifestyles.
          Experience the high-performance <span className="text-white font-semibold">Jetour Freedom</span> lineup.
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto animate-fade-in-up-delay-2">
          <a
            href="#models"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-accent font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base transition-all shadow-lg hover:shadow-gold/20 active:scale-95"
          >
            Explore Lineup
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm sm:text-base transition-all border border-white/15 backdrop-blur-md active:scale-95"
          >
            Book a Test Drive
          </a>
        </div>

        {/* Hero Vehicle Showcase Card */}
        <div className="mt-10 sm:mt-12 max-w-5xl mx-auto w-full">
          <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-slate-900/90 shadow-2xl backdrop-blur-md w-full">
            {/* Aspect Ratio Driven Height */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] min-h-[320px] max-h-[580px]">
              <Image
                src={selectedVehicle.image}
                alt={selectedVehicle.alt}
                fill
                priority
                className="object-cover object-center transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
              />
              {/* Responsive Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30 pointer-events-none" />

              {/* Top floating badges */}
              <div className="absolute top-3 sm:top-5 left-3 sm:left-6 right-3 sm:right-6 flex items-center justify-between gap-2 pointer-events-none">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] sm:text-xs font-bold text-white border border-white/20 shadow-md">
                    {selectedVehicle.badge}
                  </span>
                  <span className="hidden xs:inline-block px-2.5 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 text-[10px] sm:text-xs font-semibold backdrop-blur-md">
                    {selectedVehicle.terrain}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-white/50 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-sm">
                  Freedom 4WD
                </span>
              </div>

              {/* Bottom information bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 md:p-8 text-left flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
                <div className="max-w-xl">
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
                    {selectedVehicle.name}
                  </h3>
                  <p className="hidden sm:block text-white/80 text-xs sm:text-sm mt-1 max-w-md line-clamp-2">
                    {selectedVehicle.tagline}
                  </p>
                  <div className="mt-2.5 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedVehicle.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-md text-[11px] sm:text-xs font-medium text-white border border-white/10"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#pricing"
                  className="self-start md:self-end inline-flex items-center gap-1.5 sm:gap-2 bg-gold hover:bg-gold-light text-accent text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95 whitespace-nowrap"
                >
                  Configure Model
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Vehicle Switcher: Responsive Centered Wrap */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2 w-full">
            {heroVehicles.map((vehicle) => {
              const isSelected = selectedVehicle.id === vehicle.id;
              return (
                <button
                  key={vehicle.id}
                  onClick={() => setSelectedVehicle(vehicle)}
                  className={`flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap border ${
                    isSelected
                      ? "bg-white/20 text-white border-gold shadow-lg shadow-gold/10 scale-[1.02]"
                      : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border-white/10"
                  }`}
                >
                  <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-md overflow-hidden border border-white/20 flex-shrink-0">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                      sizes="28px"
                    />
                  </div>
                  <span>{vehicle.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Global Statistics Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto pt-6 sm:pt-8 border-t border-white/10 w-full">
          {[
            { value: "45+", label: "Countries & Regions" },
            { value: "1.2M+", label: "Vehicles Delivered" },
            { value: "No. 1", label: "Fastest Growing SUV" },
            { value: "7 Years", label: "Global Warranty" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-2 rounded-xl bg-white/[0.02]">
              <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-white/50 mt-0.5 break-words">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
