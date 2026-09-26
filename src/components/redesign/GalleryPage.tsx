"use client";

/**
 * /gallery — full server-rendered photo gallery with category filters.
 * All 58 original photos with descriptive, keyword-aware alt text.
 */

import { useState } from "react";
import SmartImage from "./SmartImage";
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Brand, { BrandDefs, Eyebrow, Khatim, Monogram } from "./Brand";
import { galleryPhotos, type GalleryCategory } from "@/data/redesign/hotel";

const CATEGORIES: ("All" | GalleryCategory)[] = ["All", "The hotel", "Rooms & suites", "Dining", "Wellness", "Sea views"];

export default function GalleryPageBrowser({ initialPhotoId }: { initialPhotoId?: number }) {
  const [category, setCategory] = useState<"All" | GalleryCategory>("All");
  const [selectedId, setSelectedId] = useState<number | null>(initialPhotoId ?? null);
  const filtered = category === "All" ? galleryPhotos : galleryPhotos.filter((image) => image.category === category);
  const selectedIndex = filtered.findIndex((image) => image.id === selectedId);
  const selected = selectedIndex >= 0 ? filtered[selectedIndex] : null;

  function advance(direction: number) {
    if (selectedIndex < 0) return;
    const next = (selectedIndex + direction + filtered.length) % filtered.length;
    setSelectedId(filtered[next].id);
  }

  if (selected) {
    return (
      <div className="gallery-lightbox">
        <div className="gallery-lightbox-top">
          <button className="text-link" onClick={() => setSelectedId(null)}>&larr; Back to gallery</button>
          <span>{String(selectedIndex + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}</span>
        </div>
        <div className="gallery-lightbox-stage">
          <SmartImage key={selected.id} src={selected.src} alt={selected.alt} width={1600} height={1100} style={{ objectFit: "contain" }} sizes="100vw" />
          <button className="lightbox-arrow lightbox-arrow--previous" onClick={() => advance(-1)} aria-label="Previous photograph"><ChevronLeft size={22} /></button>
          <button className="lightbox-arrow lightbox-arrow--next" onClick={() => advance(1)} aria-label="Next photograph"><ChevronRight size={22} /></button>
        </div>
        <div className="gallery-lightbox-caption">
          <h3>{selected.title}</h3>
          <span>HOTEL MAGHRIB &nbsp;&#10022;&nbsp; ULCINJ, MONTENEGRO &nbsp;&#10022;&nbsp; {selected.category.toUpperCase()}</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <BrandDefs />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content">

        <section className="interior-hero">
          <div className="page-width interior-hero-inner">
            <Eyebrow number="04">THROUGH OUR LENS</Eyebrow>
            <h1>A feeling, <em>in photographs.</em></h1>
            <p className="body-copy interior-hero-lede">
              The real rooms, familiar corners and slower moments of Hotel Maghrib — all {galleryPhotos.length} original
              photographs from our halal hotel in Ulcinj, Montenegro. No stock photography, no retouched illusion.
            </p>
          </div>
        </section>

        <section className="gallery-index page-width section-space">
          <div className="gallery-filters gallery-filters--page" role="group" aria-label="Filter gallery by area">
            {CATEGORIES.map((item) => (
              <button key={item} className={item === category ? "is-active" : ""} aria-pressed={item === category} onClick={() => setCategory(item)}>
                {item === "All" ? "All photographs" : item}
              </button>
            ))}
          </div>
          <div className="gallery-index-grid">
            {filtered.map((image) => (
              <button className="gallery-tile" key={image.id} onClick={() => setSelectedId(image.id)} aria-label={`View ${image.title}`}>
                <div className="gallery-tile-image gallery-tile-image--page">
                  <SmartImage src={image.src} alt={image.alt} width={640} height={480} loading="lazy" sizes="(max-width: 900px) 50vw, 30vw" />
                  <span className="gallery-zoom"><ArrowUpRight size={22} /></span>
                </div>
                <span>{image.title}<ArrowRight size={16} /></span>
              </button>
            ))}
          </div>
          <p className="gallery-count" role="status">{filtered.length} photographs / A little closer to Maghrib</p>
        </section>

        <section className="closing-section">
          <div className="hour-texture" aria-hidden="true" />
          <div className="closing-glow" aria-hidden="true" />
          <div className="closing-content">
            <Monogram className="closing-monogram" />
            <p className="eyebrow"><Khatim className="eyebrow-star" />SEEN ENOUGH?</p>
            <h2>Come and<br /><em>check in.</em></h2>
            <p>Reserve directly with our team and pick your own balcony.</p>
            <Link className="button button--gold" href="/contact">Reserve your stay <ArrowUpRight size={17} strokeWidth={1.5} /></Link>
          </div>
        </section>
      </main>
    </>
  );
}
