import Image from "next/image";
import { getAssetPath } from "@/lib/assets";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    location: "Dubai, UAE",
    model: "T2 Traveller 4WD",
    image: getAssetPath("/images/jetour-t2-side.png"),
    quote:
      "Took the T2 on a weekend desert trip and it handled the dunes like a dream. The cabin is surprisingly quiet and premium for the price. Best value 4WD I've driven.",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    location: "Almaty, Kazakhstan",
    model: "T8 Luxury Flagship",
    image: getAssetPath("/images/jetour-t8.jpg"),
    quote:
      "The T8 flagship delivers executive tranquility. Exceptional acoustic insulation, commanding driving height, and seamless intelligent hybrid power across mountain roads.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    location: "Lagos, Nigeria",
    model: "T2 Stealth Obsidian",
    image: getAssetPath("/images/jetour-t2-black.jpg"),
    quote:
      "The Obsidian edition turns heads everywhere. The illuminated JETOUR grille and robust squared-off stance look like a car twice its price. Urban presence is unmatched.",
    rating: 5,
  },
  {
    name: "Carlos & Sofia Mendez",
    location: "Santiago, Chile",
    model: "T2 Expedition Overland",
    image: getAssetPath("/images/jetour-t2-hero.jpg"),
    quote:
      "From coastal highways to rugged Patagonian gravel, the T2 Expedition roof platform carried all our gear effortlessly. Reliable, stylish, and built for true explorers.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-card-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            Owner Experiences
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-accent tracking-tight">
            Trusted by Explorers Worldwide
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            From the dunes of the Middle East to coastal highways and mountain passes,
            hear why over 1.2 million drivers chose JETOUR.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 border border-border hover:border-gold/30 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with car thumbnail & stars */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 bg-slate-50 border border-border px-3 py-1 rounded-full">
                    <div className="relative w-5 h-5 rounded-full overflow-hidden">
                      <Image
                        src={t.image}
                        alt={t.model}
                        fill
                        className="object-cover"
                        sizes="20px"
                      />
                    </div>
                    <span className="text-xs font-semibold text-accent">{t.model}</span>
                  </div>
                </div>

                <blockquote className="text-foreground/90 text-base leading-relaxed mb-6 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-accent/10 border border-accent/10 flex items-center justify-center text-accent font-extrabold text-sm">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-bold text-sm text-accent">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted">
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
