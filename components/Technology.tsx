"use client";

import Image from "next/image";
import { useState } from "react";
import { activeVehicles, technology, type TechCategoryId } from "@/config/site";

export default function Technology() {
  const [open, setOpen] = useState<TechCategoryId>(technology.categories[0].id);
  const current = technology.categories.find((c) => c.id === open) ?? technology.categories[0];

  return (
    <section id="technology" className="section" aria-labelledby="tech-title">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">{technology.eyebrow}</p>
            <h2 id="tech-title" className="h-section">{technology.heading}</h2>
          </div>
          <p className="lead">{technology.intro}</p>
        </div>

        <div className="tech">
          <ul className="tech__list">
            {technology.categories.map((c, i) => {
              const expanded = c.id === open;
              // Model-specific features, attributed to the exact model and variant.
              const features = activeVehicles.flatMap((v) => v.features.filter((f) => f.category === c.id).map((f) => ({ model: v.name.replace("JETOUR ", ""), text: f.text })));
              return (
                <li className="tech__item" key={c.id}>
                  <h3 style={{ margin: 0 }}>
                    <button className="tech__btn" aria-expanded={expanded} aria-controls={`tech-${c.id}`} id={`tech-btn-${c.id}`} onClick={() => setOpen(c.id)}>
                      <span className="n">{String(i + 1).padStart(2, "0")}</span>
                      <span className="t">{c.title}</span>
                      <span className="ind" aria-hidden="true" />
                    </button>
                  </h3>
                  <div id={`tech-${c.id}`} role="region" aria-labelledby={`tech-btn-${c.id}`} className="tech__panel" hidden={!expanded}>
                    <p>{c.summary}</p>
                    <ul className="feature-list">
                      {features.map((f) => (
                        <li key={f.model + f.text}>
                          <span className="m">{f.model}</span>
                          <span>{f.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="tech__media">
            <Image key={current.id} className="fade-in" src={current.image.src} alt={current.image.alt} fill loading="lazy" sizes="(min-width: 1024px) 58vw, 100vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
