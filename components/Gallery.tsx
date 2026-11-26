"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { activeVehicles, gallery } from "@/config/site";
import { useVehicle } from "./VehicleContext";

type Slide = { src: string; alt: string; kind: string; model: string };

function useMedia(q: string) {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [q]);
  return m;
}

export default function Gallery() {
  const { selected } = useVehicle();

  // Selected vehicle first, then the rest of the range, then brand imagery.
  const slides = useMemo<Slide[]>(() => {
    const ordered = [selected, ...activeVehicles.filter((v) => v.id !== selected.id)];
    return [
      ...ordered.flatMap((v) => v.gallery.map((g) => ({ ...g, model: v.name }))),
      ...gallery.brandImages.map((g) => ({ ...g, model: "JETOUR" })),
    ];
  }, [selected]);

  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [playing, setPlaying] = useState(false); // touch / mobile play-pause
  const reduceMotion = useMedia("(prefers-reduced-motion: reduce)");
  const finePointer = useMedia("(hover: hover) and (pointer: fine)");
  const n = slides.length;

  useEffect(() => setIndex(0), [selected.id]);

  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n]);

  // Cycling: desktop while hovered (first change after 3 s, then every 3 s); mobile when Play is on.
  const cycling = !reduceMotion && ((finePointer && hovering) || (!finePointer && playing));
  const firstTick = useRef(true);
  useEffect(() => {
    if (!cycling) { firstTick.current = true; return; }
    const delay = firstTick.current ? gallery.hoverDelayMs : gallery.intervalMs;
    const t = window.setTimeout(() => { firstTick.current = false; next(); }, delay);
    return () => window.clearTimeout(t);
  }, [cycling, index, next]);

  // Swipe support.
  const startX = useRef<number | null>(null);
  const onPointerDown = (e: PointerEvent) => { if (e.pointerType !== "mouse") startX.current = e.clientX; };
  const onPointerUp = (e: PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };

  const current = slides[index];
  // Only mount the current slide and its neighbours (fast loads, smooth crossfade).
  const mounted = new Set([index, (index + 1) % n, (index - 1 + n) % n]);

  return (
    <section className="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <h2 id="gallery-title" className="eyebrow">{gallery.label} · {selected.name}</h2>

        <div
          className="gallery__stage"
          role="region"
          aria-roledescription="carousel"
          aria-label={`${selected.name} photo gallery. Use left and right arrow keys to navigate.`}
          tabIndex={0}
          onKeyDown={onKey}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (startX.current = null)}
        >
          {slides.map((s, i) =>
            mounted.has(i) ? (
              <div key={s.src} className="gallery__slide" data-active={i === index} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${n}`} aria-hidden={i !== index}>
                <Image src={s.src} alt={s.alt} fill loading="lazy"sizes="(min-width: 1440px) 1312px, 100vw" draggable={false} />
              </div>
            ) : null,
          )}
        </div>

        <div className="gallery__progress" aria-hidden="true">
          <span
            key={`${index}-${cycling}`}
            style={{
              transform: cycling ? undefined : `scaleX(${(index + 1) / n})`,
              animation: cycling ? `galleryProgress ${gallery.intervalMs}ms linear both` : undefined,
            }}
          />
        </div>

        <div className="gallery__bar">
          <div className="gallery__meta" aria-live={cycling ? "off" : "polite"}>
            <span className="gallery__count">{String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
            <span className="gallery__caption">{current.model} · {current.kind}</span>
          </div>
          <div className="gallery__controls">
            {!reduceMotion && (
              <button className="icon-btn gallery__play" onClick={() => setPlaying((p) => !p)} aria-pressed={playing} aria-label={playing ? "Pause slideshow" : "Play slideshow"}>
                {playing ? (
                  <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true"><path d="M2 1v12M10 1v12" stroke="currentColor" strokeWidth="1.8" /></svg>
                ) : (
                  <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true"><path d="M1.5 1.2v11.6L11 7z" fill="currentColor" /></svg>
                )}
              </button>
            )}
            <button className="icon-btn" onClick={prev} aria-label="Previous image">
              <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><path d="M6 1L1 6l5 5M1 6h14" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
            </button>
            <button className="icon-btn" onClick={next} aria-label="Next image">
              <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><path d="M10 1l5 5-5 5M15 6H1" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
            </button>
          </div>
        </div>
      </div>
      <style>{`@keyframes galleryProgress { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
    </section>
  );
}
