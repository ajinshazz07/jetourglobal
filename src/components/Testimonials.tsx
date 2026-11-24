const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    location: "Dubai, UAE",
    model: "T2 Traveller 4WD",
    quote:
      "Took the T2 on a weekend desert trip and it handled the high dunes like a dream. The cabin is quiet, robust, and luxurious for the price. Best value 4WD I've driven.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    location: "São Paulo, Brazil",
    model: "T2 2.0T Smart X-WD",
    quote:
      "With three kids, space and safety were everything. The T2 gives us ample room for the whole family and all the tech to keep everyone entertained. The 7-year warranty is unmatched.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    location: "Lagos, Nigeria",
    model: "T2 TOPFIRE Edition",
    quote:
      "The bold boxy styling turns heads everywhere. High ground clearance, full 360° trail cameras — it tackles unpaved roads with zero fuss and premium comfort.",
    rating: 5,
  },
  {
    name: "Lin Mei Chen",
    location: "Kuala Lumpur, Malaysia",
    model: "T2 4WD Explorer",
    quote:
      "Daily commutes in heavy monsoon rain feel totally secure with the intelligent X-WD system. High torque, sharp looks, and incredible fuel efficiency.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-card-bg overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-gold tracking-widest uppercase">
            Reviews
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-accent tracking-tight">
            Owners Love JETOUR
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Hear from JETOUR drivers around the world who chose adventure,
            comfort, and value.
          </p>
        </div>

        {/* 100% Responsive Grid: 1 Col Mobile, 2 Col Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="w-full bg-white rounded-2xl p-6 sm:p-8 border border-border hover:border-gold/30 hover:shadow-lg transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-3.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-foreground leading-relaxed mb-5 text-xs sm:text-sm md:text-base">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xs sm:text-sm flex-shrink-0">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-sm text-accent">
                    {t.name}
                  </div>
                  <div className="text-[11px] sm:text-xs text-muted">
                    {t.location} · {t.model}
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
