const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    location: "Dubai, UAE",
    model: "T2 Traveller",
    quote:
      "Took the T2 on a weekend desert trip and it handled the dunes like a dream. The cabin is surprisingly quiet and premium for the price. Best value 4WD I've driven.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    location: "São Paulo, Brazil",
    model: "X70 Plus",
    quote:
      "With three kids, space was everything. The X70 Plus gives us room for the whole family and all the tech to keep everyone entertained. The 7-year warranty sealed the deal.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    location: "Lagos, Nigeria",
    model: "Dashing",
    quote:
      "The Dashing turns heads everywhere. Flush door handles, the digital cockpit — it looks like a car twice its price. Perfect for city driving with that sporty feel.",
    rating: 5,
  },
  {
    name: "Lin Mei Chen",
    location: "Kuala Lumpur, Malaysia",
    model: "T2 i-DM",
    quote:
      "Switched to the PHEV variant and my fuel costs dropped by 60%. The electric range easily covers my daily commute, and I still have the power for weekend adventures.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-card-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            Reviews
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-accent tracking-tight">
            Owners Love JETOUR
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Hear from JETOUR drivers around the world who chose adventure,
            comfort, and value.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-border hover:border-gold/30 hover:shadow-lg transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
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

              <blockquote className="text-foreground leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-sm text-accent">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted">
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
