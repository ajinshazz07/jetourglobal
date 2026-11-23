"use client";

import { useState } from "react";
import Image from "next/image";
import { vehicleImages } from "@/assets/images";

const galleryItems = [
  {
    id: "beach-expedition",
    title: "T2 Traveller · Coastline Expedition",
    category: "expedition",
    location: "Coastal Dunes & Ocean Front",
    image: vehicleImages.t2Hero,
    description:
      "Equipped with custom modular roof platform, reinforced recovery points, and low-pressure sand calibration for boundless shore expeditions.",
    specs: "2.0T AWD · 220mm Clearance · 700mm Fording Depth",
    fit: "cover",
  },
  {
    id: "t8-premiere",
    title: "JETOUR T8 · Flagship Premiere",
    category: "flagship",
    location: "Global Auto Show Reveal",
    image: vehicleImages.t8,
    description:
      "Next-generation luxury flagship boasting intelligent PHEV dual-motor architecture, acoustic executive cabin, and illuminated horizontal light bar.",
    specs: "Intelligent Hybrid · Executive 7-Seat · Level 2+ Pilot",
    fit: "cover",
  },
  {
    id: "side-profile",
    title: "T2 Traveller · Desert Amber Silhouette",
    category: "design",
    location: "Studio Aerodynamic & Proportions",
    image: vehicleImages.t2Side,
    description:
      "Iconic geometric design language: squared wheel arches, high beltline, functional roof rails, and rear-mounted spare tire carrier.",
    specs: "High-Tensile Steel Body · 28° Approach · 30° Departure",
    fit: "contain",
  },
  {
    id: "urban-stealth",
    title: "T2 Traveller · Obsidian Black Edition",
    category: "urban",
    location: "Metropolitan District",
    image: vehicleImages.t2Black,
    description:
      "High-contrast obsidian black styling featuring signature JETOUR grille illumination, sport lower valance, and 360° surround camera view.",
    specs: "Gloss Black Package · Matrix LED · Acoustic Glass",
    fit: "cover",
  },
  {
    id: "mountain-conqueror",
    title: "T2 Traveller · Alpine Rock Trail",
    category: "trail",
    location: "High Altitude Rocky Pass",
    image: vehicleImages.t2Mountain,
    description:
      "Tested on extreme jagged terrain with BorgWarner 6th-Gen torque vectoring and electronic rear differential lock for unwavering grip.",
    specs: "X-WD All-Terrain System · Underbody Skid Plates · Hill Descent",
    fit: "cover",
  },
];

const categories = [
  { id: "all", label: "All Vehicles" },
  { id: "expedition", label: "Expedition & Overland" },
  { id: "flagship", label: "T8 Flagship" },
  { id: "urban", label: "Urban & Stealth" },
  { id: "trail", label: "Mountain Trail" },
  { id: "design", label: "Design Silhouette" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeModalItem, setActiveModalItem] = useState<(typeof galleryItems)[0] | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-card-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            Visual Showcase
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-accent tracking-tight">
            Engineered for Every Horizon
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Explore authentic captures of the JETOUR fleet — from coastal overland journeys
            and rugged mountain tracks to executive auto show debuts.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-accent text-white shadow-md"
                    : "bg-white text-muted hover:text-accent hover:bg-slate-100 border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className={`group relative rounded-2xl overflow-hidden bg-white border border-border hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                index === 0 && activeCategory === "all" ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Media Container */}
              <div
                className={`relative w-full overflow-hidden bg-slate-950 ${
                  index === 0 && activeCategory === "all"
                    ? "h-72 sm:h-96"
                    : "h-64 sm:h-72"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`transition-transform duration-700 group-hover:scale-105 ${
                    item.fit === "contain"
                      ? "object-contain p-6"
                      : "object-cover object-center"
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/10" />

                {/* Location / Tag Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white border border-white/15">
                    {item.location}
                  </span>
                </div>

                {/* Bottom Overlay Info on Card */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 mt-1 line-clamp-1">{item.specs}</p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 flex items-center justify-between bg-white border-t border-slate-100">
                <span className="text-xs text-muted font-medium line-clamp-1 pr-3">
                  {item.description}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-accent group-hover:text-gold transition-colors whitespace-nowrap">
                  View Details
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-up"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-colors"
                aria-label="Close dialog"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Image */}
              <div className="relative w-full h-72 sm:h-96 md:h-[460px] bg-black">
                <Image
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  fill
                  className={activeModalItem.fit === "contain" ? "object-contain p-6" : "object-cover"}
                  sizes="100vw"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-8 bg-slate-900">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wider border border-gold/30">
                    {activeModalItem.location}
                  </span>
                  <span className="text-xs text-white/50">{activeModalItem.specs}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {activeModalItem.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">
                  {activeModalItem.description}
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-end">
                  <a
                    href="#pricing"
                    onClick={() => setActiveModalItem(null)}
                    className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-accent text-sm font-bold px-6 py-3 rounded-xl transition-colors"
                  >
                    Configure This Spec
                  </a>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
