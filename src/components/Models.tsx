import Image from "next/image";
import { vehicleImages } from "@/assets/images";

const models = [
  {
    name: "T2 Freedom Expedition",
    tagline: "Born for the Wild",
    description:
      "Box-styled rugged SUV with smart 4WD, high ground clearance, and a tech-forward cabin. Ready for desert dunes and unpaved frontiers.",
    specs: ["2.0T Turbo", "Smart X-WD", "220mm Clearance"],
    image: vehicleImages.desertAction,
    badge: "Overlanding",
    gradient: "from-amber-950/80 via-slate-900 to-slate-950",
  },
  {
    name: "Jetour Freedom 2.0T",
    tagline: "Rugged Design & Power",
    description:
      "Bold geometric exterior with intelligent cockpit, spacious 5-seater versatility, and high-performance powertrain.",
    specs: ["2.0T Engine", "7-Speed DCT", "Intelligent AWD"],
    image: vehicleImages.freedom1,
    badge: "Launch Edition",
    gradient: "from-emerald-950/80 via-slate-900 to-slate-950",
  },
  {
    name: "Freedom Off-Road",
    tagline: "Uncharted Frontiers",
    description:
      "Engineered with multi-terrain response modes, heavy-duty suspension, and full 360° trail surveillance cameras.",
    specs: ["Terrain Select", "AWD Lock", "360° Cam"],
    image: vehicleImages.freedom2,
    badge: "Trail Master",
    gradient: "from-blue-950/80 via-slate-900 to-slate-950",
  },
  {
    name: "Freedom Desert Runner",
    tagline: "High-Speed Dunes",
    description:
      "Equipped with advanced cooling, sand traction algorithms, and reinforced underbody plates for relentless desert adventures.",
    specs: ["254 HP", "Torque Vectoring", "7 Drive Modes"],
    image: vehicleImages.desertAction,
    badge: "Special Edition",
    gradient: "from-orange-950/80 via-slate-900 to-slate-950",
  },
];

export default function Models() {
  return (
    <section id="models" className="py-16 sm:py-24 bg-white overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-gold tracking-widest uppercase">
            Lineup
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-accent tracking-tight">
            Choose Your Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            From extreme desert conquerors to modern urban explorers — find the JETOUR
            that matches your lifestyle.
          </p>
        </div>

        {/* 100% Responsive Grid: 1 Col on Mobile, 2 Col on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {models.map((model) => (
            <div
              key={model.name}
              className={`w-full relative group rounded-2xl sm:rounded-3xl bg-gradient-to-br ${model.gradient} p-5 sm:p-7 md:p-8 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] border border-slate-800 shadow-lg`}
            >
              <div>
                {/* Vehicle Image Frame with Responsive Aspect Ratio */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden mb-5 bg-slate-950 border border-white/10 shadow-inner">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

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
