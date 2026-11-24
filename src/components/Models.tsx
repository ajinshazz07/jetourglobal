import Image from "next/image";
import { vehicleImages } from "@/assets/images";

const models = [
  {
    name: "JETOUR G700 Flagship",
    tagline: "Luxury All-Terrain Command",
    description:
      "Commanding full-size luxury SUV with intelligent PHEV powertrain, triple digital displays, adaptive air suspension, and executive 7-seat versatility.",
    specs: ["380 HP Hybrid", "Smart AWD", "7 Seats", "235mm Clearance"],
    image: vehicleImages.g700Studio,
    badge: "Flagship SUV",
    gradient: "from-blue-950/70 via-slate-900 to-slate-950",
  },
  {
    name: "JETOUR F700 Adventure Truck",
    tagline: "Heavy-Duty Dual-Cab Dominance",
    description:
      "Engineered for high-tonnage hauling, desert overlanding, and commercial toughness with reinforced steel bed and dual-diff lock AWD.",
    specs: ["2.0T / PHEV", "3,500 kg Towing", "1,150 kg Payload", "Locking Diffs"],
    image: vehicleImages.f700Pickup,
    badge: "Off-Road Truck",
    gradient: "from-amber-950/70 via-slate-900 to-slate-950",
  },
  {
    name: "JETOUR T2 TOPFIRE Custom",
    tagline: "The Glamping Overlander",
    description:
      "Custom-tuned expedition specialist featuring iconic retro sunset mountain livery, heavy-duty all-terrain tires, and reinforced roof mounting.",
    specs: ["TOPFIRE Tune", "AT Rugged Tires", "Roof Expedition Rack", "7 Modes"],
    image: vehicleImages.t2Topfire,
    badge: "Special Edition",
    gradient: "from-sky-950/70 via-slate-900 to-slate-950",
  },
  {
    name: "JETOUR T2 Traveller",
    tagline: "Born for the Wild",
    description:
      "Box-styled rugged 4WD SUV with rear spare wheel carrier, intelligent BorgWarner torque distribution, and 220mm ground clearance.",
    specs: ["2.0T Turbo (254 HP)", "Smart X-WD", "Rear Wheel Carrier", "220mm Clearance"],
    image: vehicleImages.t2Silver,
    badge: "Adventure Icon",
    gradient: "from-slate-900 via-slate-900 to-slate-950",
  },
  {
    name: "JETOUR T1 Cross",
    tagline: "Next-Gen Urban Freedom",
    description:
      "Compact, boxy urban adventure crossover with flush door handles, class-leading fuel efficiency, and intelligent digital driver assistance.",
    specs: ["1.5T / 2.0T", "5.8 L/100km", "Dual 12.3\" Cockpit", "Level 2 ADAS"],
    image: vehicleImages.t1Green,
    badge: "Urban Explorer",
    gradient: "from-emerald-950/70 via-slate-900 to-slate-950",
  },
  {
    name: "JETOUR G700 Ocean Edition",
    tagline: "Deep Ocean All-Terrain",
    description:
      "Deep metallic blue executive edition with intelligent multi-terrain drive selector, acoustic soundproofing, and panoramic glass roof.",
    specs: ["PHEV AWD", "Acoustic Glass", "Panoramic Roof", "Executive Seats"],
    image: vehicleImages.g700Blue,
    badge: "Executive Edition",
    gradient: "from-indigo-950/70 via-slate-900 to-slate-950",
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
            Choose Your JETOUR
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            From the heavy-duty F700 truck and flagship G700 to the iconic T2 and agile T1 Cross — engineered for every journey.
          </p>
        </div>

        {/* Responsive Grid: 1 Col Mobile, 2 Col Tablet/Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {models.map((model) => (
            <div
              key={model.name}
              className={`w-full relative group rounded-2xl sm:rounded-3xl bg-gradient-to-br ${model.gradient} p-5 sm:p-7 md:p-8 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] border border-slate-800 shadow-xl`}
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

                  {/* Floating Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-white/90 border border-white/20">
                      {model.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  {model.name}
                </h3>
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
                <a
                  href="#pricing"
                  className="text-gold hover:text-gold-light transition-colors font-semibold text-xs sm:text-sm flex items-center gap-1 group/btn active:scale-95 whitespace-nowrap"
                >
                  Configure
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
