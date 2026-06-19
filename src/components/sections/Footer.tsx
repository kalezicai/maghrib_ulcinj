import Link from "next/link";
import { Star, Info } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-white pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <span className="font-serif text-2xl tracking-[0.15em] font-semibold block">MAGHRIB</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] block font-medium">Hotel &bull; Ulcinj</span>
          <p className="text-xs text-stone-400 leading-relaxed font-light">
            Providing premium, 100% Halal certified, alcohol-free luxury family hospitality along the gorgeous Adriatic coast of Montenegro.
          </p>
          <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
            ))}
            <span className="text-xs text-stone-300 ml-1">4.9 on Google</span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">Navigation</h4>
          <ul className="space-y-2 text-xs text-stone-400 font-light">
            <li><a href="#about" className="hover:text-[#C5A880] transition-colors">Our Vision & Pillars</a></li>
            <li><a href="#rooms" className="hover:text-[#C5A880] transition-colors">Sea-View Suites</a></li>
            <li><a href="#halal" className="hover:text-[#C5A880] transition-colors">100% Halal Gastronomy</a></li>
            <li><a href="#spa" className="hover:text-[#C5A880] transition-colors">The Private Spa Sanctuary</a></li>
            <li><a href="#reviews" className="hover:text-[#C5A880] transition-colors">Verified Guest Reviews</a></li>
            <li><a href="#location" className="hover:text-[#C5A880] transition-colors">Ulcinj Travel Guide</a></li>
            <li className="pt-2 border-t border-stone-800 mt-2">
              <Link href="/gallery" className="hover:text-[#C5A880] transition-colors">Photo Gallery</Link>
            </li>
            <li><Link href="/blog" className="hover:text-[#C5A880] transition-colors">Travel Blog</Link></li>
            <li><Link href="/ramadan" className="hover:text-[#C5A880] transition-colors">Ramadan Package</Link></li>
            <li><Link href="/halal-hotel-ulcinj" className="hover:text-[#C5A880] transition-colors">Halal Hotel Ulcinj Guide</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">Our Policies</h4>
          <ul className="space-y-2 text-xs text-stone-400 font-light">
            <li>Check-in: 2:00 PM</li>
            <li>Check-out: 11:00 AM</li>
            <li>100% Alcohol-Free Premises</li>
            <li>No immodest dress code allowed</li>
            <li>Halal Certified Gastronomy</li>
            <li>Conflict-Free Spa Concierge</li>
          </ul>
        </div>

        <div className="space-y-4 text-xs">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">Get in Touch</h4>
          <p className="text-stone-400 leading-relaxed font-light">
            1 Kosovska, Ulcinj 85360, Montenegro <br />
            Next to iconic Pine Trees (Borići)
          </p>
          <p className="text-stone-300 font-mono">
            +382 68 007 720 <br />
            info@hotelmaghrib.me
          </p>
          <div className="pt-2">
            <Link
              href="/brand-brief"
              className="inline-flex items-center gap-1 bg-[#C5A880]/10 text-[#C5A880] border border-[#C5A880]/30 hover:bg-[#C5A880] hover:text-stone-950 py-2 px-4 rounded-lg transition-all text-[10px] font-bold uppercase tracking-wider"
            >
              <Info className="w-3.5 h-3.5" /> Design System Brief
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-stone-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-stone-500">
        <p>&copy; {new Date().getFullYear()} Hotel Maghrib, Ulcinj, Montenegro. All Rights Reserved.</p>
        <div className="flex gap-4">
          <span>Premium Light Theme &bull; Halal Hospitality</span>
          <span>&bull;</span>
          <Link href="/brand-brief" className="hover:text-[#C5A880] transition-colors">Design MD & SEO Strategy</Link>
        </div>
      </div>
    </footer>
  );
}
