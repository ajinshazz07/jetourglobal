"use client";

import Image from "next/image";

const models = [
  {
    name: "T2 Traveller",
    tagline: "Born for the Wild",
    description:
      "Box-styled rugged SUV engineered with BorgWarner smart 4WD, 220mm ground clearance, and an aircraft-inspired digital cockpit.",
    specs: ["2.0T Engine (254 HP)", "Smart 4WD", "7 Drive Modes", "5-Star Safety"],
    badge: "Most Popular",
    image: "/images/jetour-t2-side.png",
    alt: "Jetour T2 Traveller side profile in desert orange",
    imageFit: "contain",
    highlight: "Signature Silhouette",
    gradient: "from-slate-900 via-slate-800 to-slate-900",
  },
  {
    name: "T8 Flagship",
    tagline: "Luxury Without Limits",
    description:
      "Full-size executive SUV featuring advanced hybrid power, intelligent air suspension, Level 2+ pilot assistance, and multi-row VIP comfort.",
    specs: ["Dual-Motor PHEV", "Intelligent AWD", "Acoustic Glass", "Level 2+ ADAS"],
    badge: "Flagship Concept",
    image: "/images/jetour-t8.jpg",
    alt: "Jetour T8 luxury flagship SUV premiere",
    imageFit: "cover",
    highlight: "World Premiere",
    gradient: "from-zinc-900 via-neutral-900 to-stone-950",
  },
  {
    name: "T2 Expedition",
    tagline: "Conquer Any Horizon",
    description:
      "Overland-spec edition fitted with factory expedition roof rack, high-durability gear compartments, and coastal terrain calibration.",
    specs: ["Expedition Rack", "Heavy-Duty Shocks", "All-Terrain Tires", "Water Fording 700mm"],
    badge: "Overland Special",
    image: "/images/jetour-t2-hero.jpg",
    alt: "Jetour T2 Expedition on beach coastline",
    imageFit: "cover",
    highlight: "Adventure Ready",
    gradient: "from-slate-950 via-slate-900 to-neutral-900",
  },
  {
    name: "T2 Stealth Obsidian",
    tagline: "City Dominance",
    description:
      "Monochromatic black exterior package with illuminated matrix JETOUR front grille, 20-inch gloss black alloys, and privacy glass.",
    specs: ["Obsidian Styling", "360° Night Vision", "Active Noise Cancellation", "Sony Sound"],
    badge: "Urban Edition",
    image: "/images/jetour-t2-black.jpg",
    alt: "Jetour T2 in obsidian black finish",
    imageFit: "cover",
    highlight: "Black Edition",
    gradient: "from-neutral-950 via-gray-900 to-slate-950",
  },
];

export default function Models() {
  return (
    <section id="models" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            Model Lineup
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-accent tracking-tight">
            Choose Your Horizon
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            From uncompromising off-road explorers to flagship luxury tourers —
            experience the engineering precision of JETOUR.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model) => (
            <div
              key={model.name}
              className={`relative group rounded-3xl bg-gradient-to-br ${model.gradient} border border-slate-700/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-gold/40 hover:-translate-y-1`}
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-black/40">
                <Image
                  src={model.image}
                  alt={model.alt}
                  fill
                  className={`transition-transform duration-700 group-hover:scale-105 ${
                    model.imageFit === "contain"
                      ? "object-contain p-4"
                      : "object-cover object-center"
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20" />

                {/* Badge tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white tracking-wider uppercase border border-white/10">
                    {model.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gold/20 backdrop-blur-md text-xs font-medium text-gold border border-gold/30">
                    {model.highlight}
                  </span>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-8 sm:p-10 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-gold transition-colors">
                    {model.name}
                  </h3>
                  <p className="text-gold font-medium mt-1 text-sm sm:text-base">
                    {model.tagline}
                  </p>
                  <p className="mt-4 text-white/70 leading-relaxed text-sm sm:text-base">
                    {model.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {model.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-xs font-medium text-white/80 border border-white/5"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href="#pricing"
                      className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light font-semibold text-sm transition-colors"
                    >
                      View Specs & Pricing
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
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

                    <a
                      href="#pricing"
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-gold hover:text-accent text-white text-xs font-bold transition-all border border-white/10"
                    >
                      Book Drive
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
