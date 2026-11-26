"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { media } from "@/config/site";

const fmt = (iso: string) => new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function MediaCenter() {
  const items = media.items.slice(0, media.maxItems);
  const [openId, setOpenId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const item = items.find((i) => i.id === openId);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (openId && !d.open) d.showModal();
    if (!openId && d.open) d.close();
  }, [openId]);

  const close = () => {
    setOpenId(null);
    triggerRef.current?.focus();
  };

  return (
    <section id="media" className="section" aria-labelledby="media-title">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">{media.eyebrow}</p>
            <h2 id="media-title" className="h-section">{media.heading}</h2>
          </div>
        </div>

        <div className="news">
          {items.map((n) => (
            <button
              key={n.id}
              className="news__card"
              aria-haspopup="dialog"
              onClick={(e) => { triggerRef.current = e.currentTarget; setOpenId(n.id); }}
            >
              <span className="news__img">
                <Image src={n.image.src} alt="" fill loading="lazy" sizes="(min-width: 768px) 33vw, 100vw" />
              </span>
              <time className="news__date" dateTime={n.date}>{fmt(n.date)}</time>
              <h3 className="h-card">{n.title}</h3>
              <p>{n.excerpt}</p>
              <span className="news__more">Read more <span aria-hidden="true">→</span></span>
            </button>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="modal"
        aria-labelledby="modal-title"
        onClose={() => openId && close()}
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      >
        {item && (
          <article>
            <div className="modal__close">
              <button className="icon-btn" onClick={close} aria-label="Close article">
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" /></svg>
              </button>
            </div>
            <div className="modal__img">
              <Image src={item.image.src} alt={item.image.alt} fill sizes="880px" />
            </div>
            <div className="modal__body">
              <time className="news__date" dateTime={item.date} style={{ margin: 0 }}>{fmt(item.date)}</time>
              <h2 id="modal-title" className="h-card" style={{ fontSize: "clamp(24px, 3vw, 34px)" }}>{item.title}</h2>
              {item.body.map((p, i) => <p key={i}>{p}</p>)}
              <p style={{ marginTop: 8 }}>
                <a className="textlink" href={item.source} target="_blank" rel="noopener noreferrer">
                  Source: JETOUR Global newsroom<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            </div>
          </article>
        )}
      </dialog>
    </section>
  );
}
