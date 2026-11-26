"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { navigation } from "@/config/site";
import Logo from "./Logo";
import { scrollToSection } from "./VehicleContext";

export default function Header() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  // Active-section indicator.
  useEffect(() => {
    const ids = navigation.map((n) => n.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
        const best = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
        setActive(best && best[1] > 0 ? best[0] : "");
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.01, 0.25, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Lock scroll and support Escape while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => scrollToSection(id));
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo" onClick={(e) => { e.preventDefault(); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <Logo />
        </a>

        <nav className="nav" aria-label="Primary">
          <ul>
            {navigation.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined} onClick={(e) => go(e, n.id)}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn header__cta" onClick={(e) => go(e, "contact")}>Enquire</a>

        <button className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((o) => !o)}>
          <span />
        </button>
      </div>

      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile" hidden={!open}>
        <ul>
          {navigation.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined} onClick={(e) => go(e, n.id)}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
