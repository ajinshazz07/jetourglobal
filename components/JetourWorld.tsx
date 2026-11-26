import Image from "next/image";
import { world } from "@/config/site";

export default function JetourWorld() {
  return (
    <section id="world" className="section" aria-labelledby="world-title">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">{world.eyebrow}</p>
            <h2 id="world-title" className="h-section">{world.heading}</h2>
          </div>
          <p className="lead">{world.intro}</p>
        </div>

        <div className="world__feature">
          <Image src={world.feature.src} alt={world.feature.alt} fill loading="lazy" sizes="(min-width: 1440px) 1312px, 100vw" />
        </div>

        <div className="pillars">
          {world.pillars.map((p, i) => (
            <article className="pillar" key={p.title}>
              <div className="pillar__img">
                <Image src={p.image.src} alt={p.image.alt} fill loading="lazy" sizes="(min-width: 900px) 33vw, 100vw" />
              </div>
              <p className="pillar__num">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="h-card">{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
