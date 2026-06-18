"use client";

import Link from "next/link";
import { Info, Menu, X, Volume2, VolumeX } from "lucide-react";

interface HeaderProps {
  nasheedPlaying: boolean;
  toggleNasheed: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
}

export function Header({ nasheedPlaying, toggleNasheed, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200/50 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl tracking-[0.15em] font-semibold text-stone-900 leading-none">
            MAGHRIB
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] mt-1 font-medium">
            Hotel • Ulcinj
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">
          <a href="#about" className="hover:text-stone-950 transition-colors">The Vision</a>
          <a href="#rooms" className="hover:text-stone-950 transition-colors">Suites</a>
          <a href="#halal" className="hover:text-stone-950 transition-colors">Halal Comforts</a>
          <a href="#spa" className="hover:text-stone-950 transition-colors">Private Spa</a>
          <a href="#reviews" className="hover:text-stone-950 transition-colors">Guest Reviews</a>
          <a href="#location" className="hover:text-stone-950 transition-colors">Ulcinj Guide</a>
          <Link href="/brand-brief" className="text-[#C5A880] hover:underline transition-colors flex items-center gap-1 normal-case tracking-normal font-medium">
            <Info className="w-3.5 h-3.5" /> Brand Brief
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleNasheed}
            className={`flex items-center gap-2 text-xs px-3.5 py-2 rounded-full border transition-all ${
              nasheedPlaying
                ? "bg-[#FAF9F6] border-[#C5A880] text-[#C5A880] shadow-sm"
                : "bg-white border-stone-200 text-stone-600 hover:border-stone-400"
            }`}
            title="Toggle Serene Background Nasheed instrumental drone"
          >
            {nasheedPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-bounce" />
                <span className="hidden sm:inline font-mono tracking-widest text-[9px] uppercase">Ambient ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                <span className="hidden sm:inline font-mono tracking-widest text-[9px] uppercase">Ambient Off</span>
              </>
            )}
          </button>

          <a
            href="#booking-suite"
            className="bg-stone-950 hover:bg-[#C5A880] text-white hover:text-stone-950 font-semibold text-xs tracking-[0.15em] uppercase py-3 px-6 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hidden sm:inline-block"
          >
            Reserve Stay
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-stone-700 hover:text-stone-950"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200/60 bg-white px-6 py-6 space-y-4 shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-stone-600">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-stone-950 py-1 border-b border-stone-100">The Vision</a>
            <a href="#rooms" onClick={() => setMobileMenuOpen(false)} className="hover:text-stone-950 py-1 border-b border-stone-100">Suites</a>
            <a href="#halal" onClick={() => setMobileMenuOpen(false)} className="hover:text-stone-950 py-1 border-b border-stone-100">Halal Comforts</a>
            <a href="#spa" onClick={() => setMobileMenuOpen(false)} className="hover:text-stone-950 py-1 border-b border-stone-100">Private Spa</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-stone-950 py-1 border-b border-stone-100">Guest Reviews</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="hover:text-stone-950 py-1 border-b border-stone-100">Ulcinj Guide</a>
            <Link href="/brand-brief" onClick={() => setMobileMenuOpen(false)} className="text-[#C5A880] py-1 flex items-center gap-2">
              <Info className="w-4 h-4" /> Design System (Brand Brief)
            </Link>
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => { toggleNasheed(); setMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-2 w-full text-xs py-3 rounded-full border border-stone-200"
            >
              {nasheedPlaying ? "Silence Serene Ambient" : "Play Serene Ambient"}
            </button>
            <a
              href="#booking-suite"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-stone-950 text-white text-center font-semibold text-xs tracking-widest uppercase py-3.5 rounded-full"
            >
              Reserve Stay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
