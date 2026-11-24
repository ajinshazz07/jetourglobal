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
    <section id="models" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            Lineup
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-accent tracking-tight">
            Choose Your Journey
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            From extreme desert conquerors to modern urban explorers — find the JETOUR
            that matches your lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model) => (
            <div
              key={model.name}
              className={`relative group rounded-3xl bg-gradient-to-br ${model.gradient} p-6 sm:p-8 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] border border-slate-800`}
            >
              <div>
                {/* Vehicle Image Frame */}
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-white/10">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-white/90 border border-white/20">
                      {model.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {model.name}
                </h3>
                <p className="text-gold font-medium text-sm mt-1">{model.tagline}</p>
                <p className="mt-3 text-white/70 leading-relaxed text-sm">
                  {model.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                {model.specs.map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1 bg-white/10 rounded-lg text-xs sm:text-sm text-white/80 font-medium border border-white/5"
                  >
                    {spec}
                  </span>
                ))}
                <a
                  href="#pricing"
                  className="ml-auto text-gold hover:text-gold-light transition-colors font-medium text-sm flex items-center gap-1 group/btn"
                >
                  Configure
                  <svg
                    className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
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
