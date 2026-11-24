"use client";

import { useState } from "react";
import Image from "next/image";
import { vehicleImages } from "@/assets/images";

const heroVehicles = [
  {
    id: "desert-action",
    name: "Jetour T2 Freedom",
    subtitle: "Conquer Every Horizon · Engineered for Adventure",
    badge: "Desert Overlanding Series",
    image: vehicleImages.desertAction,
    alt: "Jetour T2 Freedom SUV drifting aggressively on desert sand dunes",
    specs: [
      { label: "Power", value: "254 HP" },
      { label: "Torque", value: "390 N·m" },
      { label: "Drive", value: "Smart X-WD" },
      { label: "Clearance", value: "220 mm" },
    ],
    price: "From $24,990",
  },
  {
    id: "freedom-1",
    name: "Jetour Freedom 2.0T",
    subtitle: "Bold Geometric Architecture · Intelligent Cockpit",
    badge: "Launch Edition",
    image: vehicleImages.freedom1,
    alt: "Jetour Freedom SUV 2.0T launched with rugged design and affordable pricing",
    specs: [
      { label: "Engine", value: "2.0T GDI" },
      { label: "Gearbox", value: "7-Speed DCT" },
      { label: "Display", value: 'Dual 12.3"' },
      { label: "Capacity", value: "5 Seats" },
    ],
    price: "From $24,990",
  },
  {
    id: "freedom-2",
    name: "Jetour Freedom Expedition",
    subtitle: "Uncharted Wilderness Ready · Reinforced Chassis",
    badge: "Overland Expedition",
    image: vehicleImages.freedom2,
    alt: "Jetour Freedom SUV adventure edition ready for rugged terrains",
    specs: [
      { label: "Modes", value: "7 Terrain" },
      { label: "Vision", value: "360° Trail" },
      { label: "Protection", value: "Steel Armor" },
      { label: "Coverage", value: "7 Years" },
    ],
    price: "From $32,990",
  },
];

export default function Hero() {
  const [selectedVehicle, setSelectedVehicle] = useState(heroVehicles[0]);

  return (
    <>
      {/* 100% Full-Screen Hero Car Showcase */}
      <section className="relative w-full h-screen min-h-[100svh] overflow-hidden flex flex-col justify-between">
        {/* Full-Screen Edge-to-Edge Car Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={selectedVehicle.image}
            alt={selectedVehicle.alt}
            fill
            priority
            className="object-cover object-[center_35%] sm:object-center transition-all duration-1000 scale-100"
            sizes="100vw"
          />
          {/* Cinematic Lighting & Contrast Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/25 to-black/95 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/40 pointer-events-none" />
        </div>

        {/* Top Headline Section (Under Transparent Navbar) */}
        <div className="relative z-10 pt-24 sm:pt-32 px-4 sm:px-6 text-center max-w-4xl mx-auto w-full">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 text-gold text-xs sm:text-sm font-semibold tracking-wider uppercase border border-gold/40 backdrop-blur-md shadow-xl">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              {selectedVehicle.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] drop-shadow-2xl mt-4 sm:mt-5 animate-fade-in-up-delay">
            {selectedVehicle.name.split(" ")[0]}{" "}
            <span className="gold-shimmer">
              {selectedVehicle.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="text-white/85 text-xs sm:text-base md:text-xl font-medium tracking-wide mt-2.5 sm:mt-3 drop-shadow-md animate-fade-in-up-delay-2 max-w-2xl mx-auto">
            {selectedVehicle.subtitle} ·{" "}
            <span className="text-gold font-bold">{selectedVehicle.price}</span>
          </p>
        </div>

        {/* Bottom Cockpit Section: Specs + CTAs + Model Switcher */}
        <div className="relative z-10 pb-6 sm:pb-10 px-4 sm:px-6 max-w-7xl mx-auto w-full flex flex-col items-center gap-4 sm:gap-5">
          {/* High-Impact Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 max-w-xl sm:max-w-3xl w-full text-center">
            {selectedVehicle.specs.map((spec) => (
              <div
                key={spec.label}
                className="p-2 sm:p-3 rounded-2xl bg-black/50 backdrop-blur-md border border-white/15 shadow-xl transition-transform hover:scale-[1.02]"
              >
                <div className="text-base sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                  {spec.value}
                </div>
                <div className="text-[10px] sm:text-xs text-white/60 font-semibold uppercase tracking-wider mt-0.5">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 w-full max-w-sm sm:max-w-md justify-center items-center">
            <a
              href="#models"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-accent font-extrabold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all shadow-xl hover:shadow-gold/30 active:scale-95 whitespace-nowrap"
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
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all border border-white/20 backdrop-blur-md active:scale-95 whitespace-nowrap shadow-xl"
            >
              Book a Test Drive
            </a>
          </div>

          {/* Model Switcher Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl">
            {heroVehicles.map((vehicle) => {
              const isSelected = selectedVehicle.id === vehicle.id;
              return (
                <button
                  key={vehicle.id}
                  onClick={() => setSelectedVehicle(vehicle)}
                  className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-gold text-accent font-black shadow-lg scale-[1.03]"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-md overflow-hidden border border-white/20 flex-shrink-0">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                      sizes="24px"
                    />
                  </div>
                  <span>{vehicle.name}</span>
                </button>
              );
            })}
          </div>

          {/* Scroll Prompt Arrow */}
          <a
            href="#stats"
            className="inline-flex items-center justify-center text-white/50 hover:text-white transition-colors animate-bounce pt-1"
            aria-label="Scroll to details"
          >
            <svg
              className="w-5 h-5 text-gold/80"
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

      {/* Global Brand Stats Strip (Directly Follows Full-Screen Hero) */}
      <section id="stats" className="bg-slate-950 border-y border-white/10 py-10 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            { value: "45+", label: "Countries & Regions" },
            { value: "1.2M+", label: "Vehicles Delivered" },
            { value: "No. 1", label: "Fastest Growing SUV Brand" },
            { value: "7 Years", label: "Global Warranty Coverage" },
          ].map((stat) => (
            <div key={stat.label} className="p-2 sm:p-3">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/50 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
