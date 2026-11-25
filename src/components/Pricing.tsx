const plans = [
  {
    name: "T1 Cross Urban",
    subtitle: "Coming Soon · Expected Late 2026",
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
    subtitle: "Coming Soon · Expected 2027",
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
          <span className="text-xs sm:text-sm font-bold text-accent-deep tracking-widest uppercase">
            Pricing & Trims
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
            Order Your JETOUR
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            The <span className="font-bold text-ink">JETOUR T2</span> is available now for custom configuration and immediate test drives.
          </p>
        </div>

        {/* Pricing Cards: 1 Col on Mobile, 3 Col on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto w-full">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 sm:p-8 border flex flex-col justify-between transition-all ${
                plan.featured
                  ? "border-accent bg-ink text-primary shadow-2xl relative md:scale-[1.02] ring-2 ring-accent/45"
                  : "border-border bg-secondary/75 hover:border-accent hover:shadow-lg"
              }`}
            >
              <div>
                {/* Neon Status Indicator - No Curved Container */}
                <div className="flex items-center gap-2 mb-3 select-none">
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

                <div className="mb-5 sm:mb-6">
                  <h3
                    className={`text-xl sm:text-2xl font-bold ${plan.featured ? "text-primary" : "text-ink"}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm mt-1 ${plan.featured ? "text-primary/65" : "text-muted"}`}
                  >
                    {plan.subtitle}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-sm ${plan.featured ? "text-primary/65" : "text-muted"}`}
                    >
                      $
                    </span>
                    <span
                      className={`text-3xl sm:text-4xl font-extrabold ${plan.featured ? "text-primary" : "text-ink"}`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className={`text-xs mt-1 ${plan.featured ? "text-primary/50" : "text-muted"}`}
                  >
                    {plan.period}
                  </p>
                </div>

                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 sm:gap-3">
                      <svg
                        className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 ${
                          plan.featured ? "text-accent" : "text-accent-deep"
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
                      <span
                        className={`text-xs sm:text-sm ${plan.featured ? "text-primary/85" : "text-ink/80"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all active:scale-95 ${
                  plan.featured
                    ? "bg-accent text-ink hover:bg-gold-light shadow-md"
                    : "bg-primary text-ink hover:bg-accent/25 border border-border"
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
