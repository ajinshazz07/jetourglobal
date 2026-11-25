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
];

const milestones = [
  { label: "Desert +53°C", sub: "Sahara & Arabian dunes" },
  { label: "Arctic −40°C", sub: "Siberian snowfields" },
  { label: "Mountain passes", sub: "2,000m+ altitude" },
  { label: "2 Million km", sub: "Total endurance distance" },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-accent tracking-widest uppercase">
            Why JETOUR
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-5xl font-black text-ink tracking-tight">
            Engineered for More
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-muted max-w-2xl mx-auto">
            Every JETOUR is packed with rugged durability and smart technology that
            redefines modern adventure.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-secondary/75 rounded-sm p-6 sm:p-8 border border-border hover:border-accent hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-primary border border-border flex items-center justify-center text-ink group-hover:bg-accent group-hover:border-accent group-hover:text-ink transition-colors">
                {feature.icon}
              </div>
              <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted leading-relaxed text-xs sm:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── RIGOROUS VALIDATION — Redesigned ── */}
        <div className="mt-16 sm:mt-20">
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest uppercase px-4 py-1.5 bg-accent/15 border border-accent/30 text-accent mb-3">
              Rigorous Validation
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-ink tracking-tight">
              Every T2 Is Proven Before It Reaches You
            </h3>
            <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
              Before a single JETOUR T2 reaches a customer, it has already conquered
              the world&apos;s most punishing environments — deserts, glaciers, and
              high-altitude mountain passes.
            </p>
          </div>

          {/* Two-column: milestones + image */}
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Left — milestone list + progress bar */}
            <div className="space-y-3">
              {milestones.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-4 bg-secondary/75 border border-border p-4 rounded-sm"
                >
                  <div className="w-1.5 self-stretch bg-accent rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-ink">{m.label}</p>
                    <p className="text-xs text-muted mt-0.5">{m.sub}</p>
                  </div>
                </div>
              ))}

              {/* Journey bar */}
              <div className="bg-secondary/75 border border-border p-5 rounded-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-ink uppercase tracking-widest">Validation Complete</span>
                  <span className="text-xs text-accent font-bold">100%</span>
                </div>
                <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full w-full" />
                </div>
              </div>
            </div>

            {/* Right — TOPFIRE image */}
            <div className="relative rounded-sm overflow-hidden border border-border bg-secondary/40">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={vehicleImages.t2Topfire}
                  alt="JETOUR T2 TOPFIRE extreme terrain validation"
                  fill
                  className="object-contain p-4 sm:p-6"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Overlay badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent p-5 sm:p-6">
                <p className="text-primary/90 text-xs sm:text-sm font-semibold leading-snug">
                  JETOUR T2 TOPFIRE — purpose-built for the world&apos;s most demanding terrain validation program
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
