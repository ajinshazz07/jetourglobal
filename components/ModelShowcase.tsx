"use client";

import Image from "next/image";
import { useRef, type KeyboardEvent } from "react";
import { activeVehicles } from "@/config/site";
import { useVehicle } from "./VehicleContext";

export default function ModelShowcase() {
  const { selected, select, enquire } = useVehicle();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern).
  const onKey = (e: KeyboardEvent, i: number) => {
    const n = activeVehicles.length;
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % n;
    if (e.key === "ArrowLeft") next = (i - 1 + n) % n;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = n - 1;
    if (next < 0) return;
    e.preventDefault();
    select(activeVehicles[next].id);
    const btn = tabRefs.current[next];
    btn?.focus();
    btn?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  return (
    <section id="models" className="section" aria-labelledby="models-title">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Explore Our Range</p>
            <h2 id="models-title" className="h-section">Built for every journey.</h2>
          </div>
          <p className="lead">From the flagship G700 to the T Series and its i-DM plug-in hybrids — select a model to explore.</p>
        </div>

        <div className="tabs" role="tablist" aria-label="JETOUR models">
          {activeVehicles.map((v, i) => (
            <button
              key={v.id}
              ref={(el) => { tabRefs.current[i] = el; }}
              role="tab"
              id={`tab-${v.id}`}
              aria-selected={selected.id === v.id}
              aria-controls="model-panel"
              tabIndex={selected.id === v.id ? 0 : -1}
              className="tab"
              onClick={() => select(v.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {v.name.replace("JETOUR ", "")}
            </button>
          ))}
        </div>

        <div id="model-panel" role="tabpanel" aria-labelledby={`tab-${selected.id}`} className="showcase" aria-live="polite">
          <div key={`info-${selected.id}`} className="fade-in">
            <p className="showcase__caption">{selected.caption}</p>
            <h3 className="showcase__name">{selected.name}</h3>
            <p className="showcase__desc">{selected.description}</p>
            <dl className="specs" style={{ margin: "0 0 36px" }}>
              {selected.specs.map((s) => (
                <div key={s.label} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
                  <dt className="k">{s.label}</dt>
                  <dd className="v" style={{ margin: 0 }}>{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className="showcase__actions">
              <button className="btn" onClick={() => enquire(selected.id)}>
                Enquire Now <span className="arrow" aria-hidden="true">→</span>
              </button>
              <a className="textlink" href={selected.source} target="_blank" rel="noopener noreferrer">
                Full specification<span className="sr-only"> for {selected.name} (opens jetourglobal.com)</span>
              </a>
            </div>
          </div>

          <div className="showcase__media">
            <Image
              key={`img-${selected.id}`}
              className="slide-in"
              src={selected.cutout.src}
              alt={`${selected.name}, side profile`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
