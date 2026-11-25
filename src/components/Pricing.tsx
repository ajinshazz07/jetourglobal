const plans = [
  {
    name: "T1 Cross Urban",
    subtitle: "Expected Late 2026",
    price: "21,990",
    period: "Estimated Starting MSRP",
    features: [
      "1.5T / 2.0T Direct-Injection Turbo Engine",
      '10.25" Ultra-Clear Touchscreen Display',
      "Wireless Apple CarPlay & Android Auto",
      "5.8 L/100km Fuel Consumption",
      "Keyless Entry & Remote Engine Start",
      "7-Year / 150,000 km Global Warranty",
    ],
    cta: "Join Waitlist",
    featured: false,
    comingSoon: true,
  },
  {
    name: "T2 Traveller 4WD",
    subtitle: "Available Now · Ready for Delivery",
    price: "32,990",
    period: "Starting MSRP",
    features: [
      "2.0T High-Performance Engine (254 HP)",
      "Smart X-WD with 7 Terrain Modes",
      'Dual 12.3" Full Digital Cockpit',
      "Full ADAS Safety Pilot Suite",
      "Rear Spare Wheel Carrier & Roof Mounts",
      "Ventilated Adventure Leather Seats",
      "7-Year / 150,000 km Global Warranty",
    ],
    cta: "Order T2 Now",
    featured: true,
    comingSoon: false,
  },
  {
    name: "G700 / F700 Flagship",
    subtitle: "Expected 2027",
    price: "48,990",
    period: "Estimated Starting MSRP",
    features: [
      "PHEV Hybrid 380 HP / 615 N·m Torque",
      "3.5-Ton Towing / Dual Locking Diffs",
      "360° Transparent Chassis Trail Camera",
      "Executive 7-Seat Lounge & Triple Displays",
      "Sony Premium Sound System",
      "Adaptive Terrain Air Suspension",
      "7-Year / 150,000 km Global Warranty",
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
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-accent tracking-widest uppercase">
            Pricing & Trims
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight">
            Order Your JETOUR
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            The <span className="font-bold text-ink">JETOUR T2</span> is available now for custom configuration and immediate test drives.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto w-full">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-sm p-6 sm:p-8 border flex flex-col justify-between transition-all ${
                plan.featured
                  ? "border-accent bg-ink text-primary shadow-2xl relative md:scale-[1.02] ring-2 ring-accent/45"
                  : "border-border bg-secondary/75 hover:border-accent hover:shadow-lg"
              }`}
            >
              <div>
                {/* Status indicator */}
                <div className="flex items-center gap-2 mb-4 select-none">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      plan.comingSoon ? "neon-dot-amber" : "neon-dot-emerald animate-pulse"
                    }`}
                  />
                  <span
                    className={`text-[10px] sm:text-[11px] font-extrabold uppercase ${
                      plan.comingSoon
                        ? "neon-glow-amber"
                        : plan.featured
                        ? "neon-glow-emerald-bright"
                        : "neon-glow-emerald"
                    }`}
                  >
                    {plan.comingSoon ? "Coming Soon" : "Available Now"}
                  </span>
                </div>

                {/* Model name */}
                <h3 className={`text-lg sm:text-xl font-bold mb-1 ${plan.featured ? "text-primary" : "text-ink"}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mb-5 ${plan.featured ? "text-primary/60" : "text-muted"}`}>
                  {plan.subtitle}
                </p>

                {/* Price — large, prominent */}
                <div className={`pb-5 mb-5 border-b ${plan.featured ? "border-primary/15" : "border-border"}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 ${plan.featured ? "text-primary/50" : "text-muted"}`}>
                    {plan.comingSoon ? "Est. starting from" : "Starting from"}
                  </p>
                  <div className="flex items-baseline gap-0.5">
                    <span className={`text-xl font-black ${plan.featured ? "text-primary/60" : "text-muted"}`}>$</span>
                    <span className={`text-4xl sm:text-5xl font-black tracking-tight leading-none ${plan.featured ? "text-primary" : "text-ink"}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className={`text-xs mt-1.5 ${plan.featured ? "text-primary/50" : "text-muted"}`}>
                    {plan.period}
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 sm:gap-3">
                      <svg
                        className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 ${
                          plan.featured ? "text-accent" : "text-accent"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className={`text-xs sm:text-sm ${plan.featured ? "text-primary/85" : "text-ink/80"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`block text-center py-3.5 font-bold text-xs sm:text-sm transition-all rounded-sm ${
                  plan.featured
                    ? "bg-accent text-ink hover:bg-gold-light shadow-[3px_3px_0_rgba(37,37,37,0.25)] border border-accent active:translate-y-px active:shadow-none"
                    : "bg-primary text-ink hover:bg-accent/25 border border-border shadow-[2px_2px_0_rgba(37,37,37,0.12)] active:translate-y-px active:shadow-none"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
