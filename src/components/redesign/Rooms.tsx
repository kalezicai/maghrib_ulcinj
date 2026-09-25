"use client";

/**
 * Rooms index and room detail templates for the multipage redesign.
 * Both are client components (they open the reservation dialog) — Next.js
 * still server-renders them, so crawlers receive full HTML.
 */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Brand, { BrandDefs, Eyebrow, Khatim, Monogram, Seal } from "./Brand";
import CenteredFaqs from "./CenteredFaqs";
import Modal from "./BookingModal";
import Booking from "./Booking";
import Reveal from "./Reveal";
import { suites, photo, roomAmenities, type Suite } from "@/data/redesign/hotel";

const roomNarratives: Record<string, { bed: string; narrative: string[]; tag: string; faqs: { question: string; answer: string }[] }> = {
  deluxe: {
    bed: "One premium orthopedic king bed",
    narrative: [
      "The Deluxe Double is the room most guests return for. A generous 38 m² of soft sand tones and natural textures, with a panoramic private balcony that puts the entire Adriatic in front of you.",
      "Wake slowly with tea from the in-room kettle, take your coffee out to the balcony before the day begins, and let the sea set the pace. The room stays cool and quiet through the afternoon — the perfect base between the beach and the terrace.",
    ],
    tag: "A QUIET PERCH ABOVE THE ADRIATIC",
    faqs: [
      { question: "How many guests fit in the Deluxe Double Room?", answer: "The Deluxe Double Room accommodates two guests comfortably on one premium orthopedic king bed." },
      { question: "Does the Deluxe Double Room have a sea view?", answer: "Yes — every room at Hotel Maghrib has a private balcony with an uninterrupted Adriatic sea view. The Deluxe Double looks west, so the sunset is yours each evening." },
      { question: "What is included in the rate?", answer: "Your rate includes the 100% halal-certified breakfast buffet, Wi-Fi, air conditioning, and free private parking. Balcony seating, an in-room safe, and tea and coffee facilities are standard." },
      { question: "Can I request the private spa as a hotel guest?", answer: "Yes. Guests can reserve exclusive private one-hour slots of the indoor pool, jacuzzi and cedar sauna, including daily women-and-children and men-only hours." },
    ],
  },
  family: {
    bed: "One king bed plus twin beds",
    narrative: [
      "The Junior Family Suite is made for the holidays you measure in memories, not hours. 55 m² of bright space for a family of five, with the kind of thoughtful layout that keeps nap times and sunbathing hours equally possible.",
      "Parents get a proper king bed, the kids get their own space, and the whole family shares one of the widest balconies in the house — the Adriatic spread out below, the pines of Borići around you.",
    ],
    tag: "THE LARGEST SEA-VIEW LAYOUT AT MAGHRIB",
    faqs: [
      { question: "Is the Junior Family Suite good for kids?", answer: "Yes. The Junior Family Suite sleeps up to five guests, which combined with the hotel's family spa hours (women-and-children sessions and a children's wading pool) makes it the most family-ready room in Ulcinj." },
      { question: "How big is the Junior Family Suite?", answer: "The suite is 55 m² with a private sea-view balcony — the largest of the four room types at Hotel Maghrib." },
      { question: "Is breakfast included for the whole family?", answer: "Yes. The 100% halal-certified breakfast buffet is included for every guest, with fresh pastries, roasted peppers, seasonal fruit and prepared egg dishes every morning." },
      { question: "Where is the hotel relative to the beach?", answer: "Hotel Maghrib sits on a quiet hill about 14 minutes' walk from Mala Plaža (Small Beach) and the Old Town of Ulcinj, and minutes from the Borići pine forest." },
    ],
  },
  king: {
    bed: "One premium orthopedic king bed",
    narrative: [
      "A little more space, a little more quiet. The Premium King Room gives you 42 m², a wide king bed, and your own balcony over the bay — the room equivalent of an unhurried morning.",
      "It is the pick for honeymooning couples and anyone who measures a room by its view: from the bed, past the balcony chairs, to the open Adriatic.",
    ],
    tag: "COUPLES' FAVOURITE FOR SUNSETS FROM BED",
    faqs: [
      { question: "Is the Premium King Room good for couples?", answer: "Yes — couples consistently rate the location and quiet of Hotel Maghrib 9.4/10 for a two-person trip. The Premium King adds extra space, a king bed, and a private balcony over the sea." },
      { question: "What bed does the Premium King Room have?", answer: "One premium orthopedic king bed, dressed in fresh linen, with blackout-ready curtains for gentle mornings." },
      { question: "Can I book the private spa with this room?", answer: "Yes. Any guest of the hotel can reserve exclusive private one-hour slots of the indoor pool, jacuzzi and cedar sauna, including women-and-children and men-only hours." },
      { question: "How far is the hotel from the Old Town of Ulcinj?", answer: "About a 14-minute walk to the Old Town and Mala Plaža (Small Beach). The Borići pine forest starts right beside the hotel." },
    ],
  },
  triple: {
    bed: "Three beds",
    narrative: [
      "The Superior Triple Room is for friend groups and families who travel three by three: 48 m² of light, three proper beds, and one shared balcony that silences the 'which room gets the view' debate.",
      "Air conditioning, a silent mini-fridge, and generous bathrooms come standard — as does the sea view, because every room in the house looks west.",
    ],
    tag: "SPACE FOR THREE, WITH EVERYONE GETTING THE VIEW",
    faqs: [
      { question: "How many guests fit in the Superior Triple Room?", answer: "The Superior Triple Room sleeps three guests across three beds in 48 m², with one shared private sea-view balcony." },
      { question: "What amenities are in the triple room?", answer: "Air conditioning, a silent mini-fridge, in-room safe, tea and coffee facilities, complimentary Wi-Fi, a private bathroom, and of course the private sea-view balcony." },
      { question: "Is parking free at the hotel?", answer: "Yes, free private parking is available for all hotel guests, next to the building in a quiet, secure hillside neighbourhood." },
      { question: "What nearby attractions can guests visit from the hotel?", answer: "Mala Plaža and the Old Town are a short walk away; Vela Plaža (Velika Plaza) is a 12-kilometre stretch of fine sand a short drive south; Valdanos olive grove and Ada Bojana make an easy day trip." },
    ],
  },
};

export function RoomsIndex({ heroPhotoNumber }: { heroPhotoNumber?: number }) {
  const [bookingSuite, setBookingSuite] = useState<Suite | null>(null);
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <>
      <BrandDefs />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content">
        <section className="interior-hero">
          <div className="interior-hero-media">
            <Image src={photo(35)} alt="" width={2000} height={1100} priority sizes="100vw" fetchPriority="high" />
          </div>
          <div className="interior-hero-shade" />
          <div className="page-width interior-hero-inner">
            <Eyebrow number="02">ROOMS &amp; SUITES</Eyebrow>
            <h1>Your own piece<br /><em>of the Adriatic.</em></h1>
            <p className="body-copy interior-hero-lede">
              Every room at Hotel Maghrib has a private sea-view balcony, a 100% halal breakfast waiting one floor below, and the Borići pines outside your window. Four ways to stay, one uninterrupted view of the Adriatic Sea in Ulcinj, Montenegro.
            </p>
            <span className="interior-hero-note"><Khatim />FROM &euro;169 / NIGHT &nbsp;&#10022;&nbsp; HALAL BREAKFAST INCLUDED</span>
          </div>
        </section>

        <section className="room-index section-space page-width" aria-label="All rooms and suites at Hotel Maghrib">
          {suites.map((suite, index) => (
            <article className="room-index-row" key={suite.id} id={suite.id}>
              <Link className="room-index-photo" href={`/rooms/${suite.seoSlug}`} aria-label={`Open the ${suite.name} page`}>
                <div className={`room-index-crop ${index % 2 === 1 ? "is-flipped" : ""}`}>
                  <Image src={photo(suite.image)} alt={`${suite.name} with private sea-view balcony at the halal Hotel Maghrib, Ulcinj`} width={1200} height={900} priority={index === 0} sizes="(max-width: 900px) 100vw, 46vw" />
                </div>
              </Link>
              <div className="room-index-copy">
                <p className="eyebrow"><Khatim className="eyebrow-star" />0{index + 1} / SEA-VIEW COLLECTION</p>
                <h2>{suite.name}</h2>
                <p className="suite-subtitle">{suite.subtitle}</p>
                <div className="suite-specs"><span>{suite.size} m<sup>2</sup></span><i /><span>Up to {suite.guests} guests</span><i /><span>Sea view</span></div>
                <p className="body-copy">{suite.description}</p>
                <p className="suite-rate">From <strong>&euro;{suite.price}</strong><span> / night</span></p>
                <div className="room-index-actions">
                  <button className="button button--rust" onClick={() => setBookingSuite(suite)}>Reserve this room <ArrowUpRight size={17} strokeWidth={1.5} /></button>
                  <Link className="text-link" href={`/rooms/${suite.seoSlug}`}>Room details <ArrowRight size={15} strokeWidth={1.5} /></Link>
                </div>
              </div>
            </article>
          ))}
          <p className="suite-footnote"><Khatim />Every room. A private balcony. An uninterrupted sea view.<Khatim /></p>
        </section>

        <section className="closing-section">
          <div className="hour-texture" aria-hidden="true" />
          <div className="closing-glow" aria-hidden="true" />
          <div className="closing-content">
            <Monogram className="closing-monogram" />
            <p className="eyebrow"><Khatim className="eyebrow-star" />CANNOT DECIDE?</p>
            <h2>Tell us who is<br /><em>travelling.</em></h2>
            <p>We will match you with the right room, the right floor, and the right view.</p>
            <button className="button button--gold" onClick={() => setBookingSuite(suites[0])}>Reserve your stay <ArrowUpRight size={17} strokeWidth={1.5} /></button>
          </div>
        </section>
      </main>

      {bookingSuite && (
        <Modal onClose={() => setBookingSuite(null)} label="Reservation inquiry" variant="wide">
          <Booking initialSuite={bookingSuite} />
        </Modal>
      )}
    </>
  );
}

export function RoomDetail({ suite }: { suite: Suite }) {
  const [open, setOpen] = useState(false);
  const details = roomNarratives[suite.id];
  const others = suites.filter((s) => s.id !== suite.id);

  return (
    <>
      <BrandDefs />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content">
        {/* H1 present in SSR for the crawler + a hidden one for the animated view. */}
                <section className="room-hero">
          <div className="room-hero-media">
            <Image src={photo(suite.image)} alt={`${suite.name} with private balcony overlooking the Adriatic Sea at Hotel Maghrib, Ulcinj`} width={1600} height={1000} priority sizes="100vw" />
          </div>
          <div className="room-hero-shade" />
          <div className="room-hero-content page-width">
            <Link className="text-link room-hero-back" href="/rooms"><ArrowLeft size={15} /> All rooms &amp; suites</Link>
            <p className="eyebrow"><Khatim className="eyebrow-star" />{details.tag}</p>
            <h1 className="room-hero-title">{suite.name}</h1>
            <p className="suite-subtitle">{suite.subtitle}</p>
            <div className="room-hero-facts">
              <span>{suite.size} m<sup>2</sup></span><i />
              <span>Up to {suite.guests} guests</span><i />
              <span>{details.bed}</span><i />
              <span>From &euro;{suite.price} / night</span>
            </div>
            <button className="button button--gold" onClick={() => setOpen(true)}>Reserve this room <ArrowUpRight size={17} strokeWidth={1.5} /></button>
          </div>
        </section>

        <section className="story-section page-width section-space">
          <Reveal className="story-copy">
            <Eyebrow number="01">THE ROOM</Eyebrow>
            <h2>Considered.<br /><em>In every detail.</em></h2>
            {details.narrative.map((paragraph) => (
              <p className="body-copy" key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <div className="story-signature">
              <Monogram />
              <span>SEA VIEW INCLUDED.<br />ALWAYS.</span>
            </div>
          </Reveal>
          <Reveal className="story-visual" >
            <div className="arch-photo">
              <div className="arch-photo-crop">
                <Image src={photo(suite.images[1])} alt={`${suite.name} interior detail — ${suite.shortName} at the halal Hotel Maghrib in Ulcinj`} width={900} height={1200} loading="lazy" sizes="(max-width: 900px) 92vw, 44vw" />
              </div>
              <span className="arch-photo-caption"><Khatim />Filled with morning light.</span>
            </div>
          </Reveal>
        </section>

        <section className="amenities-section section-space">
          <div className="page-width">
            <Reveal className="amenities-heading">
              <Eyebrow number="02">CONSIDERED STANDARD</Eyebrow>
              <h2>In this room,<br /><em>nothing is missing.</em></h2>
            </Reveal>
            <ul className="amenities-grid">
              {roomAmenities.map((amenity) => (
                <li key={amenity}><Check size={15} strokeWidth={1.5} />{amenity}</li>
              ))}
            </ul>
            <div className="room-cta-row">
              <button className="button button--gold" onClick={() => setOpen(true)}>Reserve this room <ArrowUpRight size={17} strokeWidth={1.5} /></button>
              <Link className="text-link" href="/spa">Add a private spa slot <ArrowUpRight size={15} /></Link>
            </div>
          </div>
        </section>

        <section className="other-rooms page-width section-space" aria-label="Other rooms at Hotel Maghrib">
          <Eyebrow number="03">STILL BROWSING</Eyebrow>
          <div className="other-rooms-grid">
            {others.map((other) => (
              <Link key={other.id} className="other-room-card" href={`/rooms/${other.seoSlug}`}>
                <div className="other-room-photo">
                  <Image src={photo(other.image)} alt={`${other.name} at Hotel Maghrib, Ulcinj`} width={640} height={480} loading="lazy" sizes="30vw" />
                </div>
                <span className="other-room-name">{other.name}<ArrowRight size={16} /></span>
                <span className="other-room-rate">From &euro;{other.price} / night</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="faq-section page-width section-space">
          <CenteredFaqs faqs={details.faqs} eyebrow="ROOMS, ANSWERED" title={`About the ${suite.name}`} />
        </section>

        <section className="closing-section">
          <div className="hour-texture" aria-hidden="true" />
          <div className="closing-glow" aria-hidden="true" />
          <div className="closing-content">
            <Monogram className="closing-monogram" />
            <p className="eyebrow"><Khatim className="eyebrow-star" />SEA VIEW INCLUDED</p>
            <h2>Reserve it before<br /><em>someone else does.</em></h2>
            <p>Our reservations team replies within two hours — often much sooner.</p>
            <button className="button button--gold" onClick={() => setOpen(true)}>Reserve this room <ArrowUpRight size={17} strokeWidth={1.5} /></button>
          </div>
        </section>
      </main>

      {open && (
        <Modal onClose={() => setOpen(false)} label="Reservation inquiry" variant="wide">
          <Booking initialSuite={suite} />
        </Modal>
      )}
    </>
  );
}

export { roomNarratives };
