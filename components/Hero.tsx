"use client";

import Image from "next/image";
import { hero } from "@/config/site";
import { scrollToSection } from "./VehicleContext";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__copy">
          <div>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title" className="h-display">
              {hero.heading.map((line) => (
                <span key={line} style={{ display: "block" }}>{line}</span>
              ))}
            </h1>
          </div>
          <div className="hero__side">
            <p className="lead">{hero.supporting}</p>
            <div className="hero__ctas">
              {hero.ctas.map((c) => (
                <a key={c.target} href={`#${c.target}`} className="btn" onClick={(e) => { e.preventDefault(); scrollToSection(c.target); }}>
                  {c.label} <span className="arrow" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="hero__media">
          <Image src={hero.image.src} alt={hero.image.alt} fill priority fetchPriority="high" sizes="(min-width: 1440px) 1312px, 100vw" />
        </div>
      </div>
    </section>
  );
}
