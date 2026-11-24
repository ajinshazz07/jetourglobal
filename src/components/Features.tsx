import Image from "next/image";
import { vehicleImages } from "@/assets/images";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Advanced Safety",
    description:
      "Full suite ADAS with lane keeping, adaptive cruise control, blind-spot monitoring, and 360° camera for complete peace of mind.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "High-Output Turbo Power",
    description:
      "2.0T turbocharged powerplants deliver up to 254 HP and 390 Nm of torque, pairing rapid highway acceleration with crawling power.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Smart X-WD 4WD",
    description:
      "Intelligent all-wheel drive with 7 terrain response modes for sand, snow, mud, and rock. Instant power transfer in milliseconds.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Digital Cockpit",
    description:
      'Dual 12.3" screens with voice assistant, wireless Apple CarPlay & Android Auto, OTA updates, and remote vehicle control via app.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Premium Comfort",
    description:
      "Ventilated adventure leather seats, panoramic glass roof, 64-color ambient lighting, and acoustic noise-cancelling cabin.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global 7-Year Warranty",
    description:
      "Industry-leading 7-year / 150,000 km warranty coverage backed by authorized service centers across 45+ countries worldwide.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-card-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            Why JETOUR
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-accent tracking-tight">
            Engineered for More
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Every JETOUR is packed with rugged durability and smart technology that
            redefines modern adventure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 border border-border hover:border-gold/30 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-accent">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Extreme Terrain Testing Spotlight */}
        <div className="mt-16 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 grid md:grid-cols-2 items-center">
          <div className="p-8 sm:p-12">
            <span className="text-xs font-semibold tracking-wider text-gold uppercase px-3 py-1 rounded-full bg-gold/10 border border-gold/20 inline-block mb-4">
              Rigorous Validation
            </span>
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Tested in the World’s Most Demanding Terrains
            </h3>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Every Jetour Freedom model undergoes over 2 million kilometers of extreme endurance trials across scorching desert dunes, sub-zero snowfields, and rocky high-altitude passes.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">+53°C</div>
                <div className="text-xs text-white/50 mt-1">Desert Heat Tested</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">-40°C</div>
                <div className="text-xs text-white/50 mt-1">Arctic Cold Start</div>
              </div>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-full min-h-[320px]">
            <Image
              src={vehicleImages.desertAction}
              alt="Jetour Freedom tested in extreme desert conditions"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
