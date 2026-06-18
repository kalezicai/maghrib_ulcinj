"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  ArrowLeft,
  ImageIcon,
} from "lucide-react";
import { galleryImages, CATEGORIES, type CategoryId } from "./gallery-data";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null && lightboxIndex < filtered.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const currentImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-800">
      <div className="bg-stone-900 text-[#FAF9F6] px-4 py-2.5 text-xs font-medium tracking-[0.15em] uppercase flex items-center justify-center gap-2">
        <ImageIcon className="w-3.5 h-3.5 text-[#C5A880]" />
        <span>Real Guest Photos — Hotel Maghrib Ulcinj</span>
      </div>

      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-2xl tracking-[0.15em] font-semibold text-stone-900 leading-none">
              MAGHRIB
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] mt-1 font-medium">
              Gallery
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-stone-600 hover:text-stone-900 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Hotel
          </Link>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
              Authentic Visual Tour
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
              Hotel Maghrib Photo Gallery
            </h1>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Real photos from our 100% halal family hotel in Ulcinj, Montenegro.
              Sea-view suites, halal breakfast, private spa, prayer room, and
              the beautiful Adriatic coast.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                  activeCategory === cat.id
                    ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                    : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/60 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/20 transition-colors" />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-stone-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-medium block">
                    {img.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <Grid3X3 className="w-12 h-12 text-stone-300 mx-auto mb-4" />
              <p className="text-stone-500 text-sm">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && currentImage && (
        <div className="fixed inset-0 z-50 bg-stone-950/95 flex flex-col animate-fade-in">
          <div className="flex items-center justify-between px-6 py-4 text-white/80">
            <span className="text-xs font-mono">
              {lightboxIndex + 1} / {filtered.length}
            </span>
            <button
              onClick={closeLightbox}
              className="p-2 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center px-4 relative">
            {lightboxIndex > 0 && (
              <button
                onClick={goPrev}
                className="absolute left-4 p-2 text-white/60 hover:text-white transition-colors z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}
            <div className="relative w-full max-w-5xl aspect-[4/3]">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            {lightboxIndex < filtered.length - 1 && (
              <button
                onClick={goNext}
                className="absolute right-4 p-2 text-white/60 hover:text-white transition-colors z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}
          </div>

          <div className="text-center px-6 py-6 text-white/70">
            <p className="text-sm font-medium text-white mb-1">
              {currentImage.title}
            </p>
            <p className="text-xs text-white/50 max-w-xl mx-auto">
              {currentImage.alt}
            </p>
          </div>
        </div>
      )}

      <footer className="border-t border-stone-200/60 py-8 bg-white text-center text-xs text-stone-500">
        <p>&copy; {new Date().getFullYear()} Hotel Maghrib, Ulcinj, Montenegro.</p>
      </footer>
    </div>
  );
}
