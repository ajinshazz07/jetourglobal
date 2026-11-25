"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { galleryImages } from "@/assets/images";

interface GalleryItem {
  id: number;
  image: (typeof galleryImages)[keyof typeof galleryImages];
  title: string;
  location: string;
  category: "all" | "overlanding" | "expedition" | "lifestyle";
  tag: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: galleryImages.galleryT2Sunset,
    title: "Alpine Sunset Summit",
    location: "High Peak Expedition Trail",
    category: "expedition",
    tag: "T2 Explorer",
  },
  {
    id: 2,
    image: galleryImages.galleryG700Red,
    title: "Cinematic Desert Flare",
    location: "Dune Basin Night Stage",
    category: "lifestyle",
    tag: "G700 Flagship",
  },
  {
    id: 3,
    image: galleryImages.gallery01,
    title: "High Mountain River Crossing",
    location: "Alpine Snowpeak Stream",
    category: "overlanding",
    tag: "4WD Explorer",
  },
  {
    id: 4,
    image: galleryImages.galleryG700Arch,
    title: "Sandstone Canyon Arch",
    location: "Terracotta Desert Pass",
    category: "expedition",
    tag: "Rock Crawling",
  },
  {
    id: 5,
    image: galleryImages.gallery04,
    title: "African Savannah Trail",
    location: "Serengeti Wildlife Corridor",
    category: "expedition",
    tag: "Wild Safari",
  },
  {
    id: 6,
    image: galleryImages.gallery09,
    title: "Arctic Aurora Stargazing",
    location: "Lapland Sub-Zero Glacier",
    category: "expedition",
    tag: "Arctic Trial",
  },
  {
    id: 7,
    image: galleryImages.gallerySteppeRange,
    title: "Vast High Plateau Horizon",
    location: "Continental Mountain Divide",
    category: "lifestyle",
    tag: "Open Plains",
  },
  {
    id: 8,
    image: galleryImages.gallery02,
    title: "Red Sea Coastal Lagoon",
    location: "Marsa Alam Cliffside Cove",
    category: "lifestyle",
    tag: "Coastline",
  },
  {
    id: 9,
    image: galleryImages.gallery11,
    title: "T2 TOPFIRE Custom Surf",
    location: "Pacific Surf Coastline",
    category: "overlanding",
    tag: "TOPFIRE Edition",
  },
  {
    id: 10,
    image: galleryImages.gallery06,
    title: "Riverside Camp & Companion",
    location: "Crystal River Valley",
    category: "overlanding",
    tag: "Basecamp",
  },
  {
    id: 11,
    image: galleryImages.gallery14,
    title: "Arabian Desert Steppe Run",
    location: "Golden Dune Gallop Challenge",
    category: "expedition",
    tag: "Desert Speed",
  },
  {
    id: 12,
    image: galleryImages.gallery10,
    title: "Lakeside Glamping & Retreat",
    location: "Emerald Mountain Lake",
    category: "overlanding",
    tag: "Glamping",
  },
  {
    id: 13,
    image: galleryImages.gallery13,
    title: "Bedouin Campfire Stargazing",
    location: "Rub' al Khali Deep Desert",
    category: "lifestyle",
    tag: "Night Camp",
  },
  {
    id: 14,
    image: galleryImages.gallery07,
    title: "Cotopaxi Volcano High Pass",
    location: "Andean High Altitude (4,200m)",
    category: "expedition",
    tag: "High Altitude",
  },
  {
    id: 15,
    image: galleryImages.gallery05,
    title: "Highland Sunroof Photography",
    location: "Wax Palms Cloud Forest",
    category: "lifestyle",
    tag: "Sunroof View",
  },
  {
    id: 16,
    image: galleryImages.gallery08,
    title: "Ocean Dune Surf Trip",
    location: "Gold Coast Sand Dunes",
    category: "lifestyle",
    tag: "Beach Adventure",
  },
  {
    id: 17,
    image: galleryImages.gallery03,
    title: "Global JETOUR Owners Rally",
    location: "International Desert Club Meet",
    category: "lifestyle",
    tag: "Community",
  },
  {
    id: 18,
    image: galleryImages.gallery15,
    title: "Alpine Paddleboard Preparation",
    location: "Highland Mountain Reservoir",
    category: "overlanding",
    tag: "Water Sports",
  },
  {
    id: 19,
    image: galleryImages.gallery12,
    title: "Sunset Desert Ridge Command",
    location: "Arabian Peninsula Escarpment",
    category: "expedition",
    tag: "Golden Hour",
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

  // Keyboard navigation for lightbox
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
    <section id="gallery" className="py-16 sm:py-24 bg-secondary text-ink overflow-hidden w-full relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-primary/60 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold text-accent-deep tracking-widest uppercase inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Travel+ Lifestyle
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Built for Every Horizon
          </h2>
          <p className="mt-3.5 text-muted text-sm sm:text-base md:text-lg leading-relaxed">
            From arctic snowdrifts to deep desert dunes and wild coastlines — experience how JETOUR drivers explore the world with zero compromises.
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
                label: "Expedition & Trail",
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
                      ? "bg-accent text-ink border-accent shadow-md shadow-accent/20 font-bold"
                      : "bg-primary/80 hover:bg-primary text-ink/80 hover:text-ink border-border"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      isActive ? "bg-ink/15 text-ink" : "bg-secondary text-muted"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Flawlessly Aligned Gallery Grid: 1 Col Mobile, 2 Col Tablet, 3 Col Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer border border-border hover:border-accent transition-all duration-500 hover:shadow-2xl hover:shadow-ink/10 bg-ink"
            >
              {/* Perfectly Balanced Image Container with Hover Scale */}
              <div className="relative w-full aspect-[16/11] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07] group-hover:rotate-[0.5deg]"
                />

                {/* Dark Vignette Overlay with Deepening on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent transition-opacity duration-500 group-hover:from-ink/95 group-hover:via-ink/45" />

                {/* Top Corner Badge & Hover Expand Button */}
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-ink/75 backdrop-blur-md text-accent border border-accent/40 shadow-md">
                    {item.tag}
                  </span>

                  {/* Expand icon appearing on hover */}
                  <div className="w-8 h-8 rounded-full bg-accent text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg">
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
                  <div className="text-[11px] font-semibold text-accent tracking-wide uppercase flex items-center gap-1.5 opacity-95 mb-1">
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
                    <span className="truncate">{item.location}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-primary tracking-tight leading-snug drop-shadow-md">
                    {item.title}
                  </h3>
                </div>

                {/* Subtle Inner Ring Glow on Hover */}
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/15 group-hover:ring-accent/60 rounded-2xl sm:rounded-3xl transition-colors duration-500 pointer-events-none" />
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
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Top Control Bar */}
          <div
            className="flex items-center justify-between z-20 max-w-7xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-accent text-xs sm:text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-accent/15 border border-accent/40">
                {filteredItems[activeLightboxIndex].tag}
              </span>
              <span className="text-primary/65 text-xs sm:text-sm font-medium">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 flex items-center justify-center transition-all cursor-pointer active:scale-95"
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
              className="absolute left-2 sm:-left-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-ink/80 hover:bg-accent hover:text-ink text-primary border border-primary/20 flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xl"
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
              className="absolute right-2 sm:-right-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-ink/80 hover:bg-accent hover:text-ink text-primary border border-primary/20 flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xl"
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
            <h3 className="text-lg sm:text-2xl font-bold text-primary tracking-tight">
              {filteredItems[activeLightboxIndex].title}
            </h3>
            <p className="text-accent text-xs sm:text-sm mt-1 flex items-center justify-center gap-1.5 font-medium">
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
