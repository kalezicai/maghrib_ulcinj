"use client";

/**
 * /experience — the complete halal-experience page.
 * Built on the Redesign design language: arched photos, editorial copy,
 * accordion detail blocks, AEO FAQ accordion, closing CTA.
 */

import Link from "next/link";
import { useState } from "react";
import SmartImage from "./SmartImage";
import { ArrowRight, ArrowUpRight, Clock, Utensils, Moon, Star, Waves, Sun, type LucideIcon } from "lucide-react";
import Brand, { BrandDefs, Eyebrow, Khatim, Monogram, Rule, Seal } from "./Brand";
import CenteredFaqs from "./CenteredFaqs";
import Reveal, { ArchPhoto } from "./Reveal";
import HotelImage from "./HotelImage";
import Modal from "./BookingModal";
import Booking from "./Booking";
import { photo } from "@/data/redesign/hotel";
import { pillars, experienceFaqs, type Pillar } from "@/data/redesign/experience";

const ICONS: Record<Pillar["iconKey"], LucideIcon> = {
  utensils: Utensils,
  star: Star,
  moon: Moon,
  waves: Waves,
  sun: Sun,
  clock: Clock,
};

export default function ExperiencePage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BrandDefs />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content">

        <section className="interior-hero">
          <div className="interior-hero-media">
            <SmartImage src={photo(50)} alt="The 100% halal-certified breakfast buffet at Hotel Maghrib, Ulcinj, Montenegro" width={2000} height={1100} priority sizes="100vw" fetchPriority="high" />
          </div>
          <div className="interior-hero-shade" />
          <div className="page-width interior-hero-inner">
            <Eyebrow number="03">THE MAGHRIB EXPERIENCE</Eyebrow>
            <h1>Halal, without<br /><em>a single compromise.</em></h1>
            <p className="body-copy interior-hero-lede">
              Hotel Maghrib was built for families who do not want to choose between a beautiful holiday and their values.
              Certified halal dining, an onsite Masjid with Qibla-marked rooms, an entirely alcohol-free environment —
              and an Adriatic view worth the journey. This is what 100% halal means in practice, not on a brochure.
            </p>
            <span className="interior-hero-note"><Khatim />HALAL CERTIFIED &nbsp;&#10022;&nbsp; ALCOHOL-FREE &nbsp;&#10022;&nbsp; FAMILY FIRST</span>
          </div>
        </section>

        <section className="pillars-section section-space page-width" aria-label="The six pillars of the halal experience">
          {pillars.map((pillar, index) => {
            const Icon = ICONS[pillar.iconKey];
            return (
              <Reveal key={pillar.title} className="pillar-row">
                <div className="pillar-copy">
                  <p className="eyebrow"><Khatim className="eyebrow-star" />0{index + 1}</p>
                  <h2 className="pillar-title">{pillar.title}</h2>
                  <p className="body-copy">{pillar.text}</p>
                </div>
                <div className="pillar-rule"><Rule /></div>
                <div className="pillar-icon"><Icon size={17} strokeWidth={1.4} /></div>
              </Reveal>
            );
          })}
        </section>

        <section className="interior-gallery-band" aria-label="The halal experience in photographs">
          {[
            { image: 50, alt: "The 100% halal breakfast buffet at Hotel Maghrib in Ulcinj, Montenegro" },
            { image: 29, alt: "The light-filled onsite Masjid (prayer room) at Hotel Maghrib, Ulcinj" },
            { image: 10, alt: "The open-air sea-view terrace of Hotel Maghrib at golden hour" },
          ].map((item, index) => (
            <Reveal key={item.image} className={`band-photo band-photo--${index}`}>
              <SmartImage src={photo(item.image)} alt={item.alt} width={700} height={900} loading="lazy" sizes="(max-width: 900px) 92vw, 30vw" />
            </Reveal>
          ))}
        </section>

        <section className="story-section page-width section-space">
          <Reveal className="story-copy">
            <Eyebrow number="04">BEYOND THE BUFFET</Eyebrow>
            <h2>The details that<br /><em>make it home.</em></h2>
            <p className="body-copy drop-cap">Guests arrive anxious about whether &lsquo;halal-friendly&rsquo; really means halal. They leave reviews with the same three words: halal, clean, family. Nasheeds in the lobby, an aroma of fresh bread, wudu facilities that dry before the next prayer.</p>
            <p className="body-copy">And because the hotel sits on its own quiet hill, mornings start with birdcall and the sea, not traffic. Prayer times work with the terrace, not against it.</p>
          </Reveal>
          <Reveal className="story-visual" delay={0.12}>
            <ArchPhoto src={photo(58)} alt="A private sea-view balcony of Hotel Maghrib, Ulcinj — hidden from view, facing the Adriatic" caption="Privacy, built into the view." />
          </Reveal>
        </section>

        <section className="faqs-section page-width section-space">
          <CenteredFaqs faqs={experienceFaqs} eyebrow="HALAL, ANSWERED" title="Questions Muslim travelers ask us" />
        </section>

        <section className="closing-section">
          <div className="hour-texture" aria-hidden="true" />
          <div className="closing-glow" aria-hidden="true" />
          <div className="closing-content">
            <Monogram className="closing-monogram" />
            <p className="eyebrow"><Khatim className="eyebrow-star" />EXPERIENCE IT YOURSELF</p>
            <h2>Reserve your<br /><em>halal escape.</em></h2>
            <p>Our reservations team replies within two hours.</p>
            <button className="button button--gold" onClick={() => setOpen(true)}>Reserve your stay <ArrowUpRight size={17} strokeWidth={1.5} /></button>
          </div>
        </section>
      </main>

      {open && (
        <Modal onClose={() => setOpen(false)} label="Reservation inquiry" variant="wide">
          <Booking />
        </Modal>
      )}
    </>
  );
}
