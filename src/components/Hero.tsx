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
    specs: ["2.0T Turbo (254 HP)", "Smart X-WD System", "220mm Ground Clearance"],
    terrain: "Coastal Dunes & Overland Trails",
    tagline: "Conquering extreme desert dunes with intelligent torque and rugged capability",
  },
  {
    id: "freedom-1",
    name: "Jetour Freedom 2.0T",
    badge: "Launch Edition",
    image: vehicleImages.freedom1,
    alt: "Jetour Freedom SUV 2.0T launched with rugged design and affordable pricing",
    accent: "text-emerald-400",
    specs: ["2.0T Turbocharged", "Intelligent AWD", "Spacious 5-Seat Cabin"],
    terrain: "Urban Highways & Trail Blazing",
    tagline: "Rugged geometric architecture paired with modern comfort and power",
  },
  {
    id: "freedom-2",
    name: "Jetour Freedom Expedition",
    badge: "Overland Series",
    image: vehicleImages.freedom2,
    alt: "Jetour Freedom SUV adventure edition ready for rugged terrains",
    accent: "text-sky-400",
    specs: ["Multi-Terrain Select", "High Approach Angle", "Reinforced Chassis"],
    terrain: "Wilderness & Rocky Trails",
    tagline: "Built for intrepid explorers seeking reliability in extreme climates",
  },
];

export default function Hero() {
  const [selectedVehicle, setSelectedVehicle] = useState(heroVehicles[0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center hero-gradient overflow-hidden pt-28 pb-16">
      {/* Decorative ambient lighting elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Top Tagline */}
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-gold text-xs sm:text-sm font-medium tracking-wide mb-6 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Travel+ Philosophy — Engineered for Adventure
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.08] tracking-tight animate-fade-in-up-delay">
          Explore Beyond
          <br />
          <span className="gold-shimmer">Boundaries</span>
        </h1>

        <p className="mt-5 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
          SUVs engineered for wild horizons, intelligent comfort, and modern lifestyles.
          Experience the award-winning <span className="text-white font-semibold">T2 Freedom</span> lineup.
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2">
          <a
            href="#models"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-accent font-semibold px-8 py-3.5 rounded-xl text-base transition-all shadow-lg hover:shadow-gold/20"
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-colors border border-white/10 backdrop-blur-md"
          >
            Book a Test Drive
          </a>
        </div>

        {/* Hero Vehicle Showcase Card */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-slate-900/80 shadow-2xl backdrop-blur-md">
            <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] lg:h-[580px]">
              <Image
                src={selectedVehicle.image}
                alt={selectedVehicle.alt}
                fill
                priority
                className="object-cover object-center transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/30" />

              {/* Top floating badges */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-xs sm:text-sm font-semibold text-white border border-white/20 shadow-md">
                  {selectedVehicle.badge}
                </span>
                <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/30 text-xs font-medium backdrop-blur-md">
                  {selectedVehicle.terrain}
                </span>
              </div>

              {/* Bottom information bar */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8 text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    {selectedVehicle.name}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-lg">
                    {selectedVehicle.tagline}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedVehicle.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-3 py-1 rounded-lg bg-white/15 backdrop-blur-md text-xs sm:text-sm font-medium text-white/90 border border-white/10"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#pricing"
                  className="self-start md:self-end inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-accent text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap shadow-md"
                >
                  Configure Model
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Vehicle Switcher */}
          <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 px-2 scrollbar-none">
            {heroVehicles.map((vehicle) => {
              const isSelected = selectedVehicle.id === vehicle.id;
              return (
                <button
                  key={vehicle.id}
                  onClick={() => setSelectedVehicle(vehicle)}
                  className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap border ${
                    isSelected
                      ? "bg-white/20 text-white border-gold shadow-md shadow-gold/10 scale-105"
                      : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border-white/10"
                  }`}
                >
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/20 flex-shrink-0">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <span>{vehicle.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Global Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 border-t border-white/10">
          {[
            { value: "45+", label: "Countries & Regions" },
            { value: "1.2M+", label: "Vehicles Delivered" },
            { value: "No. 1", label: "Fastest Growing SUV Brand" },
            { value: "7 Years", label: "Global Warranty Coverage" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
