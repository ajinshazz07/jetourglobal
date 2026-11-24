const plans = [
  {
    name: "Freedom 2.0T",
    subtitle: "Launch Edition — Rugged & Agile",
    price: "24,990",
    period: "Starting MSRP (~¥159,900)",
    features: [
      "2.0T Turbocharged Direct-Injection Engine",
      '10.25" Ultra-Clear Touchscreen Display',
      "Wireless Apple CarPlay & Android Auto",
      "Reverse Camera with Dynamic Guidelines",
      "Keyless Entry & Remote Engine Start",
      "5-Year / 100,000 km Warranty",
    ],
    cta: "Configure Yours",
    featured: false,
  },
  {
    name: "T2 Freedom Expedition",
    subtitle: "Best Seller — Desert & Trail Ready",
    price: "32,990",
    period: "Starting MSRP",
    features: [
      "2.0T High-Performance Engine (254 HP)",
      "Smart X-WD with 7 Terrain Modes",
      'Dual 12.3" Full Digital Cockpit',
      "Full ADAS Safety Pilot Suite",
      "Panoramic Sunroof & Roof Carrier Mounts",
      "Ventilated Leather Adventure Seats",
      "7-Year / 150,000 km Global Warranty",
    ],
    cta: "Configure Yours",
    featured: true,
  },
  {
    name: "Freedom Off-Road Flagship",
    subtitle: "Ultimate All-Terrain Dominance",
    price: "42,990",
    period: "Starting MSRP",
    features: [
      "Torque Vectoring AWD with Rear Diff Lock",
      "360° Transparent Chassis Trail Camera",
      "Reinforced Underbody Steel Armor",
      "64-Color Dynamic Ambient Cabin Lights",
      "Sony Premium Sound System",
      "Autonomous Trail Crawl & Descent Control",
      "7-Year / 150,000 km Global Warranty",
    ],
    cta: "Configure Yours",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-gold tracking-widest uppercase">
            Pricing & Trims
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-5xl font-bold text-accent tracking-tight">
            Premium, Priced Right
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-muted max-w-2xl mx-auto">
            Rugged capability and premium luxury features at accessible prices.
            All models include our industry-leading global warranty.
          </p>
        </div>

        {/* Pricing Cards: Stack on mobile, 3-Col on Desktop */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 sm:p-8 border flex flex-col justify-between transition-all ${
                plan.featured
                  ? "border-gold bg-accent text-white shadow-2xl relative md:scale-[1.02] ring-1 ring-gold/40"
                  : "border-border bg-white hover:border-gold/30 hover:shadow-lg"
              }`}
            >
              <div>
                {plan.featured && (
                  <div className="inline-block md:absolute md:-top-3 md:left-1/2 md:-translate-x-1/2 px-3.5 py-1 bg-gold text-accent text-[11px] font-extrabold rounded-full tracking-wider uppercase shadow-md mb-4 md:mb-0">
                    Most Popular
                  </div>
                )}

                <div className="mb-5 sm:mb-6">
                  <h3
                    className={`text-xl sm:text-2xl font-bold ${plan.featured ? "text-white" : "text-accent"}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm mt-1 ${plan.featured ? "text-white/60" : "text-muted"}`}
                  >
                    {plan.subtitle}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-sm ${plan.featured ? "text-white/60" : "text-muted"}`}
                    >
                      $
                    </span>
                    <span
                      className={`text-3xl sm:text-4xl font-extrabold ${plan.featured ? "text-white" : "text-accent"}`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className={`text-xs mt-1 ${plan.featured ? "text-white/40" : "text-muted"}`}
                  >
                    {plan.period}
                  </p>
                </div>

                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 sm:gap-3">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 text-gold"
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
                        className={`text-xs sm:text-sm ${plan.featured ? "text-white/80" : "text-muted"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#footer"
                className={`block text-center py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all active:scale-95 ${
                  plan.featured
                    ? "bg-gold text-accent hover:bg-gold-light shadow-md"
                    : "bg-accent text-white hover:bg-accent-light"
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
