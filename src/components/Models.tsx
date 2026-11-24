import Image from "next/image";
import { vehicleImages, brandLogos } from "@/assets/images";

const models = [
  {
    name: "JETOUR T2 Traveller",
    tagline: "Born for the Wild · Available Now",
    description:
      "Box-styled rugged 4WD SUV with rear spare wheel carrier, intelligent BorgWarner torque distribution, dual 12.3\" cockpit, and 220mm ground clearance. In stock now.",
    specs: ["2.0T Turbo (254 HP)", "Smart X-WD", "Rear Spare Carrier", "220mm Clearance"],
    image: vehicleImages.t2Silver,
    logo: brandLogos.logoT2,
    badge: "Available Now",
    isComingSoon: false,
    gradient: "from-emerald-950/70 via-slate-900 to-slate-950",
  },
  {
    name: "JETOUR T2 TOPFIRE Custom",
    tagline: "The Glamping Overlander · Available Now",
    description:
      "Custom-tuned expedition specialist featuring iconic retro sunset mountain livery, heavy-duty all-terrain tires, roof expedition rack, and 7 terrain modes.",
    specs: ["TOPFIRE Tune", "AT Rugged Tires", "Roof Rack & Tent", "7 Modes"],
    image: vehicleImages.t2Topfire,
    logo: brandLogos.logoT2,
    badge: "Special Edition · Available",
    isComingSoon: false,
    gradient: "from-sky-950/70 via-slate-900 to-slate-950",
  },
  {
    name: "JETOUR G700 Flagship",
    tagline: "Luxury All-Terrain Command · Coming Soon",
    description:
      "Commanding full-size luxury SUV with intelligent PHEV powertrain, triple digital displays, adaptive air suspension, and executive 7-seat versatility.",
    specs: ["380 HP Hybrid", "Smart AWD", "7 Seats", "Expected 2027"],
    image: vehicleImages.g700Studio,
    logo: brandLogos.logoG700,
    badge: "Coming Soon",
    isComingSoon: true,
    gradient: "from-amber-950/50 via-slate-900 to-slate-950",
  },
  {
    name: "JETOUR F700 Adventure Truck",
    tagline: "Heavy-Duty Dual-Cab Dominance · Coming Soon",
    description:
      "Engineered for high-tonnage hauling, desert overlanding, and commercial toughness with reinforced steel bed and dual-diff lock AWD.",
    specs: ["2.0T / PHEV", "3,500 kg Towing", "1,150 kg Payload", "Expected 2027"],
    image: vehicleImages.f700Pickup,
    badge: "Coming Soon",
    isComingSoon: true,
    gradient: "from-slate-900 via-slate-900 to-slate-950",
  },
  {
    name: "JETOUR T1 Cross",
    tagline: "Next-Gen Urban Adventure · Coming Soon",
    description:
      "Compact, boxy urban adventure crossover with flush door handles, class-leading fuel efficiency, and intelligent digital driver assistance.",
    specs: ["1.5T / 2.0T", "5.8 L/100km", "Dual 12.3\" Cockpit", "Late 2026"],
    image: vehicleImages.t1Green,
    logo: brandLogos.logoT1,
    badge: "Coming Soon",
    isComingSoon: true,
    gradient: "from-slate-900 via-slate-900 to-slate-950",
  },
  {
    name: "JETOUR G700 Ocean Edition",
    tagline: "Deep Ocean All-Terrain · Coming Soon",
    description:
      "Deep metallic blue executive edition with intelligent multi-terrain drive selector, acoustic soundproofing, and panoramic glass roof.",
    specs: ["PHEV AWD", "Acoustic Glass", "Panoramic Roof", "Expected 2027"],
    image: vehicleImages.g700Blue,
    logo: brandLogos.logoG700,
    badge: "Coming Soon",
    isComingSoon: true,
    gradient: "from-slate-900 via-slate-900 to-slate-950",
  },
];

export default function Models() {
  return (
    <section id="models" className="py-16 sm:py-24 bg-white overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-gold tracking-widest uppercase">
            Official Lineup
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-accent tracking-tight">
            Explore JETOUR Models
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            The award-winning <span className="font-bold text-accent">JETOUR T2</span> is available now for order and delivery. Preview our upcoming flagship SUVs and adventure truck lineup.
          </p>
        </div>

        {/* Responsive Grid: 1 Col Mobile, 2 Col Tablet/Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {models.map((model) => (
            <div
              key={model.name}
              className={`w-full relative group rounded-2xl sm:rounded-3xl bg-gradient-to-br ${model.gradient} p-5 sm:p-7 md:p-8 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] border ${
                model.isComingSoon ? "border-slate-800 opacity-90" : "border-gold/40 shadow-xl ring-1 ring-gold/20"
              }`}
            >
              <div>
                {/* Vehicle Studio Image Frame */}
                <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] rounded-xl sm:rounded-2xl overflow-hidden mb-5 bg-slate-950/60 border border-white/10 shadow-inner flex items-center justify-center p-3 sm:p-4">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Neon Availability Indicator - No Curved Container */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2 select-none">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        model.isComingSoon
                          ? "neon-dot-amber"
                          : "neon-dot-emerald animate-pulse"
                      }`}
                    />
                    <span
                      className={`text-[10px] sm:text-[11px] font-extrabold uppercase ${
                        model.isComingSoon ? "neon-glow-amber" : "neon-glow-emerald"
                      }`}
                    >
                      {model.badge}
                    </span>
                  </div>

                  {/* Model Emblem */}
                  {model.logo && (
                    <div className="absolute top-3 right-3 h-5 sm:h-6 w-14 sm:w-16 flex items-center justify-end">
                      <Image
                        src={model.logo}
                        alt={model.name}
                        fill
                        className="object-contain object-right opacity-80 group-hover:opacity-100 transition-opacity"
                        sizes="64px"
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {model.name}
                  </h3>
                </div>
                <p className="text-gold font-medium text-xs sm:text-sm mt-1">{model.tagline}</p>
                <p className="mt-2.5 text-white/70 leading-relaxed text-xs sm:text-sm">
                  {model.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {model.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-2.5 py-1 bg-white/10 rounded-lg text-[11px] sm:text-xs text-white/80 font-medium border border-white/5"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {model.isComingSoon ? (
                  <a
                    href="#footer"
                    className="text-amber-400 hover:text-amber-300 transition-colors font-semibold text-xs sm:text-sm flex items-center gap-1 active:scale-95 whitespace-nowrap"
                  >
                    Join Waitlist
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </a>
                ) : (
                  <a
                    href="#pricing"
                    className="text-gold hover:text-gold-light transition-colors font-bold text-xs sm:text-sm flex items-center gap-1 group/btn active:scale-95 whitespace-nowrap"
                  >
                    Order T2
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
