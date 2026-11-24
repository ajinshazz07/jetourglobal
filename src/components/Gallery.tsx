"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { galleryImages } from "@/assets/images";

interface GalleryItem {
  id: number;
  image: typeof galleryImages.gallery01;
  title: string;
  location: string;
  category: "all" | "overlanding" | "expedition" | "lifestyle";
  tag: string;
  colSpan?: string; // for bento layout highlights
  aspectRatio?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: galleryImages.gallery01,
    title: "Alpine River Fly-Fishing",
    location: "High Sierra Valley",
    category: "overlanding",
    tag: "Overlanding",
    colSpan: "col-span-1 sm:col-span-2 lg:col-span-2",
    aspectRatio: "aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8]",
  },
  {
    id: 2,
    image: galleryImages.gallery02,
    title: "Hidden Coastal Cove",
    location: "Red Sea Lagoon, Marsa Alam",
    category: "lifestyle",
    tag: "Coastal",
    colSpan: "col-span-1 sm:col-span-2 lg:col-span-1",
    aspectRatio: "aspect-[4/3] sm:aspect-[16/10]",
  },
  {
    id: 3,
    image: galleryImages.gallery03,
    title: "Global JETOUR Owners Club",
    location: "International Desert Rally",
    category: "lifestyle",
    tag: "Community",
    colSpan: "col-span-1 sm:col-span-2 lg:col-span-1",
    aspectRatio: "aspect-[4/3] sm:aspect-[16/10]",
  },
  {
    id: 4,
    image: galleryImages.gallery04,
    title: "Serengeti Cheetah Encounter",
    location: "Namibian Wilderness Trail",
    category: "expedition",
    tag: "Safari",
    colSpan: "col-span-1 sm:col-span-2 lg:col-span-2",
    aspectRatio: "aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8]",
  },
  {
    id: 5,
    image: galleryImages.gallery05,
    title: "Open Sunroof Wildlife Shoot",
    location: "Wax Palms Cloud Forest",
    category: "lifestyle",
    tag: "Highland",
    colSpan: "col-span-1",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 6,
    image: galleryImages.gallery06,
    title: "Riverside Camp & Companion",
    location: "Crystal River Basin",
    category: "overlanding",
    tag: "Camp Life",
    colSpan: "col-span-1",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 7,
    image: galleryImages.gallery07,
    title: "High Andean Volcanic Pass",
    location: "Cotopaxi High Plateau (4,200m)",
    category: "expedition",
    tag: "High Altitude",
    colSpan: "col-span-1 sm:col-span-2 lg:col-span-1",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 8,
    image: galleryImages.gallery08,
    title: "Sunset Surf Expedition",
    location: "Gold Coast Dunes",
    category: "lifestyle",
    tag: "Ocean Coast",
    colSpan: "col-span-1",
    aspectRatio: "aspect-square",
  },
  {
    id: 9,
    image: galleryImages.gallery09,
    title: "Arctic Aurora Borealis Roof Watch",
    location: "Lapland Sub-Zero Snowfields",
    category: "expedition",
    tag: "Arctic Nights",
    colSpan: "col-span-1 sm:col-span-2 lg:col-span-1",
    aspectRatio: "aspect-square",
  },
  {
    id: 10,
    image: galleryImages.gallery10,
    title: "Lakeside Glamping & Picnic",
    location: "Emerald Mountain Lake",
    category: "overlanding",
    tag: "Glamping",
    colSpan: "col-span-1",
    aspectRatio: "aspect-square",
  },
  {
    id: 11,
    image: galleryImages.gallery11,
    title: "T2 TOPFIRE Custom on Surf",
    location: "Pacific Tide Coastline",
    category: "overlanding",
    tag: "TOPFIRE Livery",
    colSpan: "col-span-1",
    aspectRatio: "aspect-square",
  },
  {
    id: 12,
    image: galleryImages.gallery12,
    title: "Golden Hour Desert Command",
    location: "Arabian Dune Ridge",
    category: "expedition",
    tag: "Sunset",
    colSpan: "col-span-1",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 13,
    image: galleryImages.gallery13,
    title: "Bedouin Desert Campfire",
    location: "Rub' al Khali Stargazing",
    category: "lifestyle",
    tag: "Night Camp",
    colSpan: "col-span-1",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 14,
    image: galleryImages.gallery14,
    title: "Desert Horse Sprint Challenge",
    location: "Arabian Peninsula Steppes",
    category: "expedition",
    tag: "Desert Speed",
    colSpan: "col-span-1",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 15,
    image: galleryImages.gallery15,
    title: "Alpine Paddleboard Preparation",
    location: "Highland Forest Reservoir",
    category: "overlanding",
    tag: "Water Sports",
    colSpan: "col-span-1 sm:col-span-2 lg:col-span-1",
    aspectRatio: "aspect-[4/3]",
  },
];

type CategoryFilter = "all" | "overlanding" | "expedition" | "lifestyle";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : null
    );
  }, [activeLightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
    );
  }, [activeLightboxIndex, filteredItems.length]);

  // Keyboard controls for lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeLightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-950 text-white overflow-hidden w-full relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-semibold text-gold tracking-widest uppercase inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Travel+ Lifestyle
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Built for Every Horizon
          </h2>
          <p className="mt-3.5 text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
            From arctic snowdrifts to deep desert sands and sun-drenched coastlines — experience how the JETOUR community takes adventure beyond boundaries.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {[
              { id: "all", label: "All Adventures", count: galleryItems.length },
              {
                id: "overlanding",
                label: "Overlanding & Camp",
                count: galleryItems.filter((i) => i.category === "overlanding").length,
              },
              {
                id: "expedition",
                label: "Expedition & Nature",
                count: galleryItems.filter((i) => i.category === "expedition").length,
              },
              {
                id: "lifestyle",
                label: "Community & Lifestyle",
                count: galleryItems.filter((i) => i.category === "lifestyle").length,
              },
            ].map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id as CategoryFilter)}
                  className={`cursor-pointer px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 border active:scale-95 ${
                    isActive
                      ? "bg-gold text-accent border-gold shadow-lg shadow-gold/20 font-bold"
                      : "bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border-white/10"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      isActive ? "bg-accent/20 text-accent" : "bg-white/10 text-white/60"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer border border-white/10 hover:border-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/15 bg-slate-900 ${
                activeFilter === "all" ? item.colSpan || "col-span-1" : "col-span-1"
              }`}
            >
              {/* Image Container with Hover Scale */}
              <div className={`relative w-full ${item.aspectRatio || "aspect-[4/3]"} overflow-hidden`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08] group-hover:rotate-[0.5deg]"
                />

                {/* Always visible bottom vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/45" />

                {/* Top Corner Badge & Hover Expand Button */}
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-gold border border-gold/30 shadow-md">
                    {item.tag}
                  </span>

                  {/* Expand icon appearing on hover */}
                  <div className="w-8 h-8 rounded-full bg-gold/90 text-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom Caption Information */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 transform transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="text-[11px] font-semibold text-gold tracking-wide uppercase flex items-center gap-1.5 opacity-90 mb-1">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                    {item.title}
                  </h3>
                </div>

                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-gold/40 rounded-2xl sm:rounded-3xl transition-colors duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Top Control Bar */}
          <div
            className="flex items-center justify-between z-20 max-w-7xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-gold text-xs sm:text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
                {filteredItems[activeLightboxIndex].tag}
              </span>
              <span className="text-white/60 text-xs sm:text-sm">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer active:scale-95"
              aria-label="Close image preview"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Central Image Viewer with Prev/Next Navigation */}
          <div
            className="relative flex-1 flex items-center justify-center my-3 sm:my-6 w-full max-w-6xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:-left-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/70 hover:bg-gold hover:text-accent text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xl"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Main Lightbox Image */}
            <div className="relative w-full h-full max-h-[75vh] flex items-center justify-center">
              <Image
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                fill
                priority
                className="object-contain rounded-xl sm:rounded-2xl shadow-2xl"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 sm:-right-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/70 hover:bg-gold hover:text-accent text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xl"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div
            className="text-center z-20 max-w-3xl mx-auto w-full pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
              {filteredItems[activeLightboxIndex].title}
            </h3>
            <p className="text-gold text-xs sm:text-sm mt-1 flex items-center justify-center gap-1.5 font-medium">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{filteredItems[activeLightboxIndex].location}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
