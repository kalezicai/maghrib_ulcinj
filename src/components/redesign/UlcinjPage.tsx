"use client";

/**
 * /ulcinj — the destination & travel-guide page.
 * GEO play: where is Ulcinj, beaches, airports, halal travel answers.
 */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plane, MapPin, Compass } from "lucide-react";
import Brand, { BrandDefs, Eyebrow, Khatim, Monogram, Rule } from "./Brand";
import CenteredFaqs from "./CenteredFaqs";
import Reveal, { ArchPhoto } from "./Reveal";
import HotelImage from "./HotelImage";
import Modal from "./BookingModal";
import Booking from "./Booking";
import { photo, MAP_LINK } from "@/data/redesign/hotel";
import { ulcinjFaqs } from "@/data/redesign/faqs";

const stops = [
  {
    name: "Borići — the iconic pines",
    image: 28,
    text: "The saline, oxygen-rich pine forest begins beside the hotel. Locals credit the air as half the cure, and the morning walk leads straight along the cliff above the sea.",
  },
  {
    name: "Mala Plaža — Small Beach",
    image: 27,
    text: "Fourteen minutes on foot brings you to the soft golden sand of Small Beach, framed by the fortress walls. Simple, swimmable, and calm in the shoulder season.",
  },
  {
    name: "The Old Town",
    image: 29,
    text: "Ulcinj's 2,500-year-old fortified quarter: lane tables under vines, a mosque, a small museum, and watchtower views over the Adriatic toward Shkodra.",
  },
  {
    name: "Velika Plaža — Long Beach",
    image: 30,
    text: "Twelve kilometres of fine sand south of town, wide enough for every kind of family — with its own kite-surf scene and beach cafés that end the day with grilled fish.",
  },
  {
    name: "Valdanos",
    image: 45,
    text: "A pebble cove inside an olive grove so old the Romans drew it. Flat water, deep shade, and a natural harbour for quiet swims.",
  },
  {
    name: "Ada Bojana",
    image: 44,
    text: "The river delta at land's end, dressed in eucalyptus and sand bungalows: the Adriatic's wild south — sunset dinners on the water and a choice of quiet coves.",
  },
];

export default function UlcinjPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BrandDefs />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content">

        <section className="interior-hero">
          <div className="interior-hero-media">
            <Image src={photo(56)} alt="Ulcinj's Adriatic hillside above the sea with Hotel Maghrib among the Mediterranean pine trees" width={2000} height={1100} priority sizes="100vw" fetchPriority="high" />
          </div>
          <div className="interior-hero-shade" />
          <div className="page-width interior-hero-inner">
            <Eyebrow number="05">OUR CORNER OF THE COAST</Eyebrow>
            <h1>Ulcinj, our<br /><em>beloved south.</em></h1>
            <p className="body-copy interior-hero-lede">
              Montenegro’s southernmost town is its airiest: 2,500 years of history on a cliff, beaches that run for
              kilometres, pines that perfume the air, and a genuinely halal-friendly culture. This is the guide our
              guests ask for — where to walk, swim and wander, straight from the team at Hotel Maghrib.
            </p>
            <span className="interior-hero-note"><Khatim />MALA PLAŽA &nbsp;&#10022;&nbsp; VELIKA PLAŽA &nbsp;&#10022;&nbsp; ADA BOJANA</span>
          </div>
        </section>

        <section className="stops-section section-space page-width">
          {stops.map((stop, index) => (
            <Reveal className="stop-row" key={stop.name}>
              <div className={`stop-photo ${index % 2 === 1 ? "is-flipped" : ""}`}>
                <Image src={photo(stop.image)} alt={`${stop.name} near Hotel Maghrib in Ulcinj, Montenegro`} width={960} height={720} loading="lazy" sizes="(max-width: 900px) 100vw, 44vw" />
              </div>
              <div className="stop-copy">
                <p className="eyebrow"><Khatim className="eyebrow-star" />0{index + 1}</p>
                <h2>{stop.name}</h2>
                <p className="body-copy">{stop.text}</p>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="getting-here page-width section-space">
          <Reveal className="getting-grid">
            <div className="getting-card">
              <Plane size={17} strokeWidth={1.4} />
              <h3>By air</h3>
              <p className="body-copy">Podgorica (TGD) is the closest airport — about 1 h 15 by car. Tivat (TIV) is the scenic route along the coast. Our team arranges transfers for guests; mention your flight when you inquire.</p>
            </div>
            <div className="getting-card">
              <MapPin size={17} strokeWidth={1.4} />
              <h3>Where we are</h3>
              <p className="body-copy">1 Kosovska, Ulcinj 85360, Montenegro — on the hillside between the Borići pines and Mala Plaža. <a href={MAP_LINK} target="_blank" rel="noreferrer">Open Hotel Maghrib in Google Maps</a>.</p>
            </div>
            <div className="getting-card">
              <Compass size={17} strokeWidth={1.4} />
              <h3>Halal-friendly practicalities</h3>
              <p className="body-copy">Minarets in the Old Town, halal dining nearby, a quiet beach culture, and prayer times posted in our Masjid. Ulcinj is an easy, respectful, halal-conscious base on the Adriatic.</p>
            </div>
          </Reveal>
        </section>

        <section className="faqs-section page-width section-space">
          <CenteredFaqs faqs={ulcinjFaqs} eyebrow="ULCINJ, ANSWERED" title="Where is Ulcinj, and how do I get there?" />
        </section>

        <section className="closing-section">
          <div className="hour-texture" aria-hidden="true" />
          <div className="closing-glow" aria-hidden="true" />
          <div className="closing-content">
            <Monogram className="closing-monogram" />
            <p className="eyebrow"><Khatim className="eyebrow-star" />YOUR WHOLE TRIP STARTS HERE</p>
            <h2>Stay in the middle<br /><em>of the best of it.</em></h2>
            <p>Sea-view suites above the pines — your base for every beach on this list.</p>
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
