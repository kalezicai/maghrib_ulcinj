"use client";

/**
 * Site-wide chrome: sticky header (scroll-aware) with a mobile menu dialog,
 * and the shared footer (server-safe). Interior pages render <SiteHeader/>
 * + <SiteFooter/>; the home page keeps its own immersive header.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Menu, ArrowUpRight, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, useSpring, useScroll } from "motion/react";
import Brand, { Khatim, Monogram } from "./Brand";
import { HOTEL_PHONE, HOTEL_EMAIL, MAP_LINK, PHONE_LINK, pageNav } from "@/data/redesign/hotel";

const extraNav = [
  { label: "Our story", href: "/story" },
  { label: "Ramadan 2027", href: "/ramadan" },
  { label: "Reserve a room", href: "/contact" },
];

export function SiteHeader({ active = "" }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 140, damping: 32, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [...pageNav, ...extraNav];

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div id="home" />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="Hotel Maghrib — home">
            <Monogram className="brand-symbol" />
            <span className="brand-type">
              <span className="brand-name">MAGHRIB</span>
              <span className="brand-location">
                <i />HOTEL<span>&#10022;</span>ULCINJ<i />
              </span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {pageNav.map((item) => (
              <Link
                key={item.href}
                className={active === item.href ? "is-active" : ""}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="button button--rust header-reserve" href="/contact">
              <span className="reserve-desktop">Reserve your stay</span>
              <span className="reserve-mobile">Reserve</span>
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </Link>
            <button className="mobile-menu-button icon-button" onClick={() => setMenuOpen(true)} aria-label="Open navigation menu">
              <Menu size={24} strokeWidth={1.4} />
            </button>
          </div>
        </div>
        <motion.div className="scroll-progress" style={{ scaleX: progressScale }} aria-hidden="true" />
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: reducedMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: reducedMotion ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mobile-menu-scroll">
              <button className="modal-close icon-button" onClick={() => setMenuOpen(false)} aria-label="Close navigation menu" autoFocus>
                <ArrowUpRight size={21} strokeWidth={1.5} style={{ transform: "rotate(45deg)" }} />
              </button>
              <p className="eyebrow"><Khatim className="eyebrow-star" />A LITTLE CLOSER TO MAGHRIB</p>
              <nav aria-label="Mobile navigation">
                {navLinks.map((item, index) => (
                  <Link href={item.href} onClick={() => setMenuOpen(false)} key={item.href} className="mobile-nav-item">
                    <span>{String(index + 1).padStart(2, "0")}</span>{item.label}<ArrowRight size={20} strokeWidth={1.2} />
                  </Link>
                ))}
              </nav>
              <a className="mobile-menu-phone" href={PHONE_LINK}>{HOTEL_PHONE}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Site-wide footer with crawlable internal links for topical clusters. */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="hour-texture" aria-hidden="true" />
      <div className="footer-main page-width">
        <div className="footer-brand">
          <Brand footer />
          <p className="footer-arabic" lang="ar" dir="rtl">مغرب</p>
          <p>Thoughtful hospitality.<br />A beautiful sense of belonging.</p>
        </div>
        <div className="footer-contact">
          <p className="eyebrow">COME FIND YOUR PEACE</p>
          <a href={MAP_LINK} target="_blank" rel="noreferrer"><MapPin size={15} strokeWidth={1.5} /><span>Kosovska Ulica bb<br />85360 Ulcinj, Montenegro</span></a>
          <a href={PHONE_LINK}><Phone size={14} strokeWidth={1.5} />{HOTEL_PHONE}</a>
          <a href={`mailto:${HOTEL_EMAIL}`}><Mail size={15} strokeWidth={1.5} />{HOTEL_EMAIL}</a>
        </div>
        <div className="footer-links">
          <p className="eyebrow">MAKE IT YOUR STAY</p>
          <Link href="/rooms">Rooms &amp; suites</Link>
          <Link href="/experience">The halal experience</Link>
          <Link href="/spa">Private spa concierge</Link>
          <Link href="/contact">Contact &amp; reservations</Link>
        </div>
        <div className="footer-links">
          <p className="eyebrow">A LITTLE MORE MAGHRIB</p>
          <Link href="/story">Our story</Link>
          <Link href="/gallery">Explore the gallery</Link>
          <Link href="/ramadan">Ramadan at Maghrib</Link>
          <Link href="/ulcinj">Discover Ulcinj</Link>
          <Link href="/blog">Halal travel journal</Link>
        </div>
      </div>
      <div className="footer-bottom page-width">
        <span>&copy; {new Date().getFullYear()} Hotel Maghrib. All rights reserved.</span>
        <span className="footer-bottom-note">HALAL HOSPITALITY &#10022; WHOLEHEARTED WELCOME</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Stay information</Link>
          <Link href="/#home" aria-label="Back to the top of Hotel Maghrib"><ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </footer>
  );
}
