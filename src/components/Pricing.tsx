const plans = [
  {
    name: "T1 Cross Urban",
    tag: "Coming Soon · Late 2026",
    price: "21,990",
    msrp: "Est. starting from",
    // Only what makes T1 unique vs others
    highlights: [
      { icon: "⛽", text: "5.8 L/100km — class-leading efficiency" },
      { icon: "📱", text: "Wireless CarPlay & Android Auto" },
      { icon: "🏙️", text: "Compact footprint, flush door handles" },
    ],
    cta: "Join Waitlist",
    featured: false,
    comingSoon: true,
  },
  {
    name: "T2 Traveller 4WD",
    tag: "Available Now",
    price: "32,990",
    msrp: "Starting from",
    // Only what makes T2 unique vs others
    highlights: [
      { icon: "🏔️", text: "Smart X-WD — 7 terrain modes + dual-diff lock" },
      { icon: "🛡️", text: "Full ADAS safety suite + 360° cameras" },
      { icon: "📦", text: "Rear spare carrier, roof mounts, 220mm clearance" },
    ],
    cta: "Order T2 Now",
    featured: true,
    comingSoon: false,
  },
  {
    name: "G700 / F700 Flagship",
    tag: "Coming Soon · 2027",
    price: "48,990",
    msrp: "Est. starting from",
    // Only what makes G700/F700 unique vs others
    highlights: [
      { icon: "⚡", text: "PHEV hybrid — 380 HP / 615 N·m torque" },
      { icon: "🚛", text: "3,500 kg towing — dual locking differentials" },
      { icon: "👑", text: "7-seat executive lounge + triple displays" },
    ],
    cta: "Join Waitlist",
    featured: false,
    comingSoon: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-primary overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold text-accent tracking-widest uppercase">
            Pricing & Trims
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight">
            Order Your JETOUR
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted max-w-xl mx-auto">
            The <span className="font-bold text-ink">T2</span> is in stock now. Configure and book a test drive today.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-sm flex flex-col border transition-all ${
                plan.featured
                  ? "bg-ink border-accent shadow-2xl ring-2 ring-accent/40 md:scale-[1.02]"
                  : "bg-secondary/75 border-border hover:border-accent hover:shadow-md"
              }`}
            >
              {/* Card header */}
              <div className={`p-6 sm:p-7 pb-5 border-b ${plan.featured ? "border-primary/15" : "border-border"}`}>
                {/* Availability dot */}
                <div className="flex items-center gap-2 mb-3 select-none">
                  <span className={`w-1.5 h-1.5 rounded-full ${plan.comingSoon ? "neon-dot-amber" : "neon-dot-emerald animate-pulse"}`} />
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest ${
                    plan.comingSoon ? "neon-glow-amber" : plan.featured ? "neon-glow-emerald-bright" : "neon-glow-emerald"
                  }`}>
                    {plan.tag}
                  </span>
                </div>

                <h3 className={`text-lg font-bold ${plan.featured ? "text-primary" : "text-ink"}`}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-4">
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${plan.featured ? "text-primary/50" : "text-muted"}`}>
                    {plan.msrp}
                  </p>
                  <div className="flex items-baseline gap-0.5">
                    <span className={`text-xl font-black ${plan.featured ? "text-primary/60" : "text-muted"}`}>$</span>
                    <span className={`text-4xl sm:text-5xl font-black tracking-tight leading-none ${plan.featured ? "text-primary" : "text-ink"}`}>
                      {plan.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Unique differentiators — not repeated anywhere else */}
              <div className="p-6 sm:p-7 flex-1">
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${plan.featured ? "text-primary/50" : "text-muted"}`}>
                  What sets it apart
                </p>
                <ul className="space-y-3">
                  {plan.highlights.map((h) => (
                    <li key={h.text} className="flex items-start gap-3">
                      <span className="text-base leading-none mt-0.5 flex-shrink-0">{h.icon}</span>
                      <span className={`text-xs sm:text-sm leading-snug ${plan.featured ? "text-primary/85" : "text-ink/80"}`}>
                        {h.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                <a
                  href="#contact"
                  className={`block text-center py-3.5 font-bold text-sm transition-all rounded-sm ${
                    plan.featured
                      ? "bg-accent text-ink hover:bg-gold-light shadow-[3px_3px_0_rgba(37,37,37,0.25)] border border-accent active:translate-y-px active:shadow-none"
                      : "bg-primary text-ink hover:bg-accent/20 border border-border shadow-[2px_2px_0_rgba(37,37,37,0.10)] active:translate-y-px active:shadow-none"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Single global warranty note — shown once instead of in every card */}
        <p className="mt-8 text-center text-xs text-muted">
          All models include a{" "}
          <span className="font-semibold text-ink">7-Year / 150,000 km global warranty</span>{" "}
          and authorized service across 45+ countries.
        </p>

      </div>
    </section>
  );
}
