import Image from "next/image";
import { vehicleImages } from "@/assets/images";

const features = [
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Advanced Safety",
    description:
      "Full suite ADAS with lane keeping, adaptive cruise control, blind-spot monitoring, and 360° camera for complete peace of mind.",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "High-Output Hybrid & Turbo",
    description:
      "State-of-the-art PHEV hybrid and 2.0T turbocharged powerplants delivering up to 380 HP and 615 Nm torque for uncompromising power.",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Smart X-WD All-Terrain",
    description:
      "Intelligent all-wheel drive with 7 terrain response modes for sand, snow, mud, and rock with dual-diff locking capabilities.",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Digital Cockpit",
    description:
      'Dual 12.3" high-resolution screens with intelligent voice assistant, wireless Apple CarPlay, Android Auto, and OTA cloud updates.',
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Executive Comfort",
    description:
      "Ventilated leather seating, panoramic glass roof, multi-color ambient lighting, and acoustic noise-cancelling cabin architecture.",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global 7-Year Warranty",
    description:
      "Industry-leading 7-year / 150,000 km warranty coverage backed by authorized service and dealer networks across 45+ countries worldwide.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-card-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-gold tracking-widest uppercase">
            Why JETOUR
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-5xl font-bold text-accent tracking-tight">
            Engineered for More
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-muted max-w-2xl mx-auto">
            Every JETOUR is packed with rugged durability and smart technology that
            redefines modern adventure.
          </p>
        </div>

        {/* Feature Grid: Adaptive on Mobile, Tablet, Desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-border hover:border-gold/30 hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                {feature.icon}
              </div>
              <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold text-accent">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted leading-relaxed text-xs sm:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Extreme Terrain Testing Spotlight featuring JETOUR T2 */}
        <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 grid md:grid-cols-2 items-center shadow-xl">
          <div className="p-6 sm:p-10 md:p-12 order-2 md:order-1">
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-gold uppercase px-3 py-1 rounded-full bg-gold/10 border border-gold/20 inline-block mb-3 sm:mb-4">
              Rigorous Validation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Tested in the World’s Most Demanding Terrains
            </h3>
            <p className="mt-3 sm:mt-4 text-white/70 text-xs sm:text-sm leading-relaxed">
              The JETOUR T2 undergoes over 2 million kilometers of extreme endurance trials across scorching desert dunes, sub-zero snowfields, and rocky high-altitude passes.
            </p>
            <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold text-white">+53°C</div>
                <div className="text-[11px] sm:text-xs text-white/50 mt-0.5">Desert Heat Tested</div>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold text-white">-40°C</div>
                <div className="text-[11px] sm:text-xs text-white/50 mt-0.5">Arctic Cold Start</div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/10] md:aspect-auto md:h-full min-h-[260px] sm:min-h-[320px] order-1 md:order-2 bg-slate-950 flex items-center justify-center p-4">
            <Image
              src={vehicleImages.t2Topfire}
              alt="Jetour T2 rugged 4WD SUV tested in extreme conditions"
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
