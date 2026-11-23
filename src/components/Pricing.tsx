import Image from "next/image";
import { vehicleImages } from "@/assets/images";

const plans = [
  {
    name: "T2 Traveller",
    subtitle: "Signature Adventure — 4WD",
    price: "32,990",
    period: "Starting MSRP",
    image: vehicleImages.t2Side,
    alt: "Jetour T2 Traveller profile",
    features: [
      "2.0T High-Performance Engine (254 HP)",
      "Smart 4WD with Terrain Modes",
      'Dual 12.3" Digital Cockpit',
      "Full ADAS Safety Suite",
      "Panoramic Sunroof",
      "Ventilated Leather Seats",
      "7-Year / 150,000 km Warranty",
    ],
    cta: "Configure T2",
    featured: true,
  },
  {
    name: "T2 Expedition Overland",
    subtitle: "Overland Spec with Roof Platform",
    price: "36,490",
    period: "Starting MSRP",
    image: vehicleImages.t2Hero,
    alt: "Jetour T2 Overland Expedition with roof rack",
    features: [
      "Heavy-Duty Expedition Roof Platform",
      "All-Terrain Tires & Reinforced Rims",
      "BorgWarner X-WD with Rear E-Locker",
      "Dual Recovery Tow Hooks & Underbody Armor",
      "Water Fording Sensor Suite (700mm)",
      "7-Year / 150,000 km Warranty",
    ],
    cta: "Configure Overland",
    featured: false,
  },
  {
    name: "T8 Flagship Luxury",
    subtitle: "Executive Intelligent Hybrid",
    price: "49,990",
    period: "Starting MSRP",
    image: vehicleImages.t8,
    alt: "Jetour T8 luxury flagship SUV",
    features: [
      "Plug-in Hybrid (PHEV) Dual-Motor System",
      "Executive 7-Seat VIP Layout",
      "Level 2.5 Pilot Autonomous Suite",
      "Acoustic Triple-Layer Glass",
      "Head-Up Display & Smart Cockpit",
      "7-Year / 150,000 km Warranty",
    ],
    cta: "Inquire Flagship",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            Transparent Pricing
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-accent tracking-tight">
            Premium Capability, Accessible Value
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Adventure capability, uncompromising build quality, and comprehensive global
            warranty coverage included with every vehicle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 border flex flex-col justify-between ${
                plan.featured
                  ? "border-gold bg-accent text-white scale-[1.02] shadow-2xl relative"
                  : "border-border bg-white hover:border-gold/40 hover:shadow-xl transition-all"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-accent text-xs font-black rounded-full tracking-wider uppercase shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                {/* Vehicle Thumbnail Preview */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/10">
                  <Image
                    src={plan.image}
                    alt={plan.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-xs font-semibold text-white/90 px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-sm">
                    {plan.name}
                  </span>
                </div>

                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold ${plan.featured ? "text-white" : "text-accent"}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${plan.featured ? "text-white/70" : "text-muted"}`}
                  >
                    {plan.subtitle}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-border/20">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-sm ${plan.featured ? "text-white/60" : "text-muted"}`}
                    >
                      $
                    </span>
                    <span
                      className={`text-4xl font-extrabold ${plan.featured ? "text-white" : "text-accent"}`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className={`text-xs mt-1 font-medium ${plan.featured ? "text-gold" : "text-muted"}`}
                  >
                    {plan.period} · Standard Export Spec
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
                        className={`text-sm ${plan.featured ? "text-white/85" : "text-muted"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#footer"
                className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-all shadow-md ${
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
