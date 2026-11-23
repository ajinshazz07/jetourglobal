import Image from "next/image";

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
    title: "Hybrid Power",
    description:
      "Available PHEV technology across the range delivers high torque with lower emissions. Up to 100km pure electric range on select models.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Smart 4WD",
    description:
      "Intelligent all-wheel drive with terrain response modes for sand, snow, mud, and rock. Adventure-ready from factory.",
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
      "Ventilated leather seats, panoramic sunroof, 64-color ambient lighting, and noise-cancelling cabin for a luxury experience.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global 7-Year Warranty",
    description:
      "Comprehensive warranty coverage and global after-sales support across 45+ international markets.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-card-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            Engineering & Technology
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-accent tracking-tight">
            Engineered for Extremes
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            From extreme rock trails to quiet city commutes, every JETOUR combines robust
            mechanical engineering with intuitive digital sophistication.
          </p>
        </div>

        {/* Feature Grid */}
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

        {/* Engineering Spotlight Banner */}
        <div className="mt-16 rounded-3xl overflow-hidden bg-accent border border-white/10 text-white shadow-xl">
          <div className="grid md:grid-cols-2 items-center">
            {/* Visual */}
            <div className="relative h-72 sm:h-96 w-full bg-slate-900">
              <Image
                src="/images/jetour-t2-mountain.png"
                alt="Jetour T2 tested on high altitude alpine rock trails"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-accent via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-gold border border-gold/30">
                Torture-Tested Reliability
              </span>
            </div>

            {/* Engineering specs */}
            <div className="p-8 sm:p-12">
              <span className="text-xs font-bold tracking-widest text-gold uppercase">
                All-Terrain Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2">
                Proven on Mountain Passes & Extreme Trails
              </h3>
              <p className="mt-3 text-white/70 text-sm sm:text-base leading-relaxed">
                JETOUR vehicles undergo over 2,000,000 kilometers of high-altitude, extreme
                heat, and sub-zero durability testing. The X-WD intelligent torque system
                adapts within 0.1 seconds to shifting terrain.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-gold">28°</div>
                  <div className="text-xs text-white/60 mt-0.5">Approach Angle</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-gold">700mm</div>
                  <div className="text-xs text-white/60 mt-0.5">Wading Depth</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-gold">0.1s</div>
                  <div className="text-xs text-white/60 mt-0.5">AWD Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
