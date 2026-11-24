const models = [
  {
    name: "T2 Traveller",
    tagline: "Born for the Wild",
    description:
      "Box-styled rugged SUV with smart 4WD, high ground clearance, and a tech-forward cabin. Ready for any terrain.",
    specs: ["2.0T Engine", "4WD", "7 Seats"],
    gradient: "from-slate-800 via-slate-700 to-slate-900",
    badge: "Adventure",
  },
  {
    name: "Dashing",
    tagline: "Future in Motion",
    description:
      "Futuristic crossover with aggressive styling, flush door handles, and a minimalist digital cockpit for the urban driver.",
    specs: ["1.6T Engine", "Sport Mode", "5 Seats"],
    gradient: "from-blue-900 via-indigo-900 to-slate-900",
    badge: "Urban",
  },
  {
    name: "X70 Plus",
    tagline: "Space for Everything",
    description:
      "Spacious family SUV with 7-seat flexibility, panoramic sunroof, and premium comfort for every journey.",
    specs: ["1.5T Engine", "ADAS", "7 Seats"],
    gradient: "from-emerald-900 via-teal-900 to-slate-900",
    badge: "Family",
  },
  {
    name: "T8 Flagship",
    tagline: "The Flagship",
    description:
      "Luxury all-terrain hybrid with intelligent driving tech, multi-row premium seating, and commanding presence.",
    specs: ["PHEV", "AWD", "7 Seats"],
    gradient: "from-amber-900 via-yellow-900 to-slate-900",
    badge: "Flagship",
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
            From rugged adventurers to sleek urban crossovers — find the JETOUR
            that matches your lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {models.map((model) => (
            <div
              key={model.name}
              className={`relative group rounded-2xl bg-gradient-to-br ${model.gradient} p-8 sm:p-10 overflow-hidden min-h-[340px] flex flex-col justify-between transition-transform hover:scale-[1.02] cursor-pointer`}
            >
              {/* Decorative circle */}
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/70 tracking-wider uppercase mb-4">
                  {model.badge}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  {model.name}
                </h3>
                <p className="text-gold font-medium mt-1">{model.tagline}</p>
                <p className="mt-4 text-white/60 leading-relaxed max-w-sm">
                  {model.description}
                </p>
              </div>

              <div className="relative z-10 mt-6 flex flex-wrap items-center gap-3">
                {model.specs.map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1.5 bg-white/10 rounded-lg text-sm text-white/80 font-medium"
                  >
                    {spec}
                  </span>
                ))}
                <span className="ml-auto text-white/40 group-hover:text-gold transition-colors font-medium text-sm flex items-center gap-1">
                  Learn more
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
