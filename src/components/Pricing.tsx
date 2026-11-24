const plans = [
  {
    name: "X70 Plus",
    subtitle: "The Smart Family Choice",
    price: "24,990",
    period: "Starting MSRP",
    features: [
      "1.5T Turbocharged Engine",
      '10.25" Touchscreen Infotainment',
      "Wireless Apple CarPlay & Android Auto",
      "Rear Parking Camera",
      "Keyless Entry & Push Start",
      "5-Year / 100,000 km Warranty",
    ],
    cta: "Configure Yours",
    featured: false,
  },
  {
    name: "T2 Traveller",
    subtitle: "Best Seller — Adventure Ready",
    price: "32,990",
    period: "Starting MSRP",
    features: [
      "2.0T High-Performance Engine",
      "Smart 4WD with Terrain Modes",
      'Dual 12.3" Digital Cockpit',
      "Full ADAS Safety Suite",
      "Panoramic Sunroof",
      "Ventilated Leather Seats",
      "7-Year / 150,000 km Warranty",
    ],
    cta: "Configure Yours",
    featured: true,
  },
  {
    name: "T8 Flagship",
    subtitle: "Luxury Without Limits",
    price: "49,990",
    period: "Starting MSRP",
    features: [
      "Plug-in Hybrid (PHEV) Powertrain",
      "Intelligent AWD System",
      "Premium Multi-Row Seating",
      "64-Color Ambient Lighting",
      "Head-Up Display",
      "Bose® Premium Audio",
      "Autonomous Driving Level 2+",
      "7-Year / 150,000 km Warranty",
    ],
    cta: "Configure Yours",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-accent tracking-tight">
            Premium, Priced Right
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Luxury features and adventure capability at prices that make sense.
            All models include comprehensive warranty coverage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border ${
                plan.featured
                  ? "border-gold bg-accent text-white scale-[1.03] shadow-2xl"
                  : "border-border bg-white hover:border-gold/30 hover:shadow-lg"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-accent text-xs font-bold rounded-full tracking-wider uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold ${plan.featured ? "text-white" : "text-accent"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${plan.featured ? "text-white/60" : "text-muted"}`}
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
                    className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-accent"}`}
                  >
                    {plan.price}
                  </span>
                </div>
                <p
                  className={`text-sm mt-1 ${plan.featured ? "text-white/40" : "text-muted"}`}
                >
                  {plan.period}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0 text-gold"
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
                      className={`text-sm ${plan.featured ? "text-white/80" : "text-muted"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#footer"
                className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                  plan.featured
                    ? "bg-gold text-accent hover:bg-gold-light"
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
