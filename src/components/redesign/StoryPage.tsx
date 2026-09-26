"use client";

/**
 * /story — the about page. E-E-A-T: a real, specific founder story
 * written in the first person, with entity facts for GEO.
 */

import SmartImage from "./SmartImage";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { useState } from "react";
import Brand, { BrandDefs, Eyebrow, Khatim, Monogram, Rule, Seal } from "./Brand";
import Reveal, { ArchPhoto } from "./Reveal";
import HotelImage from "./HotelImage";
import Modal from "./BookingModal";
import Booking from "./Booking";
import { photo, whatsappLink } from "@/data/redesign/hotel";

const CHAPTERS = [
  {
    eyebrow: "01 / A NAME",
    title: <><em>Maghrib</em> means the sunset.</>,
    paragraphs: [
      "In Arabic, maghrib is the moment the sun meets the horizon — and the prayer that follows it. When our family first stood on this hill and watched the sun slip into the Adriatic between the pines, the name chose itself.",
      "Every evening since, our terrace turns gold, the adhan rises from town, and guests put their phones down mid-sentence to watch. It happens on time, every time.",
    ],
  },
  {
    eyebrow: "02 / A PROMISE",
    title: <>Halal, <em>all the way down.</em></>,
    paragraphs: [
      "We travel as a family, and we know the calculus: is the breakfast really halal, will the balcony be private, can our children swim in peace, is there somewhere to pray that is not the stairwell.",
      "So Hotel Maghrib was built answer-first: certified halal kitchens, an entirely alcohol-free house, a dedicated Masjid, Qibla markers in every room, hidden-view balconies, and a spa that reserves itself by the hour, exclusively.",
    ],
  },
  {
    eyebrow: "03 / THE HOSTS",
    title: <>The people, <em>the real luxury.</em></>,
    paragraphs: [
      "Our hosts — Abdullah, Jahja, Arjan and our manager — treat each arrival like it matters, because it does. Reviews mention them by name. They recommend beaches by the child's age and the wind direction.",
      "Guests tell us the same thing in different ways: 'We came for the halal food. We came back for the people.'",
    ],
  },
];

export default function StoryPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BrandDefs />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content">

        <section className="interior-hero">
          <div className="interior-hero-media">
            <SmartImage src={photo(25)} alt="The considered interiors of the Hotel Maghrib lobby in Ulcinj, Montenegro" width={2000} height={1100} priority sizes="100vw" fetchPriority="high" />
          </div>
          <div className="interior-hero-shade" />
          <div className="page-width interior-hero-inner">
            <Eyebrow number="01">THE MAGHRIB WAY</Eyebrow>
            <h1>Where faith and comfort<br /><em>find their harmony.</em></h1>
            <p className="body-copy interior-hero-lede">
              Hotel Maghrib is a family sanctuary of halal hospitality on a pine-scented hill in Ulcinj, Montenegro — a
              story of the sunset, of families who asked for better, and of hosts who answered.
            </p>
            <span className="interior-hero-note"><Khatim />EST. IN ULCINJ &nbsp;&#10022;&nbsp; FAMILY OWNED &amp; HOSTED</span>
          </div>
        </section>

        <section className="story-chapters section-space page-width">
          {CHAPTERS.map((chapter, index) => (
            <Reveal className="chapter-row" key={index}>
              <div className="chapter-copy">
                <p className="eyebrow"><Khatim className="eyebrow-star" />{chapter.eyebrow}</p>
                <h2>{chapter.title}</h2>
                {chapter.paragraphs.map((paragraph) => (
                  <p className="body-copy" key={paragraph.slice(0, 20)}>{paragraph}</p>
                ))}
              </div>
              <Reveal className="chapter-photo" delay={0.12}>
                <div className="arch-photo">
                  <div className="arch-photo-crop">
                    <SmartImage src={photo([56, 50, 9][index])} alt={`Hotel Maghrib story — chapter ${index + 1}, halal hospitality in Ulcinj`} width={900} height={1200} loading="lazy" sizes="(max-width: 900px) 92vw, 44vw" />
                  </div>
                  <span className="arch-photo-caption"><Khatim />{["The house on the hill.", "The morning spread.", "The people of the house."][index]}</span>
                </div>
              </Reveal>
            </Reveal>
          ))}
        </section>

        <section className="closing-section">
          <div className="hour-texture" aria-hidden="true" />
          <div className="closing-glow" aria-hidden="true" />
          <div className="closing-content">
            <div className="closing-seal">
              <Seal className="is-turning" />
              <Monogram className="closing-monogram" />
            </div>
            <p className="eyebrow"><Khatim className="eyebrow-star" />YOU ARE ALREADY WELCOME</p>
            <h2>Come for the view.<br /><em>Stay for the feeling.</em></h2>
            <p>Our team answers every inquiry personally, within two hours.</p>
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
