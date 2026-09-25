"use client";

/**
 * /halal-hotel-ulcinj — the primary conversion landing page for the exact
 * keyword "halal hotel ulcinj". Distinct from /experience: this page is
 * booking-first (rates, availability proof, four room cards, reviews),
 * while /experience is the topical cluster page.
 */

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Star } from "lucide-react";
import { useState } from "react";
import Brand, { BrandDefs, Eyebrow, Khatim, Monogram, Rule, Seal } from "./Brand";
import Reveal, { ArchPhoto } from "./Reveal";
import CenteredFaqs from "./CenteredFaqs";
import Modal from "./BookingModal";
import Booking from "./Booking";
import { photo, suites, MAP_LINK } from "@/data/redesign/hotel";
import { hotelStats } from "@/data/redesign/seo";

const quickFacts = [
  { value: "4.9", label: "GOOGLE RATING" },
  { value: "136", label: "VERIFIED REVIEWS" },
  { value: "100%", label: "HALAL CERTIFIED" },
  { value: "0%", label: "ALCOHOL POLICY" },
];

const differentiators = [
  { title: "100% halal breakfast", text: "Every ingredient certified. Fresh pastries, roasted peppers, seasonal fruit and gourmet egg dishes — no alcohol in any preparation." },
  { title: "Private family spa", text: "Reserve the entire pool, sauna and jacuzzi for your family alone. Women-and-children hours and men-only hours, daily." },
  { title: "Onsite prayer room", text: "A dedicated, air-conditioned Masjid with wudu facilities; Qibla direction markers in every room." },
  { title: "Sea-view suites", text: "Every room has a private balcony with panoramic Adriatic views — hidden from neighbouring sightlines." },
  { title: "Free private parking", text: "Secure parking on the hotel's own quiet hillside, next to the Borići pines and Small Beach." },
  { title: "Family privacy first", text: "Hidden balconies, family-exclusive spa slots and a conservative dress code respected — no nightclub noise, ever." },
];

const reviews = [
  { name: "Sanela Muhic", group: "Family", text: "The hotel has a HALAL concept, which exceeded our expectations. Reserving the pool was very easy. Beautiful nasheed songs in the background. Excellent aroma in the lobby!" },
  { name: "Mujahidah UmmCoffee", group: "Vacation", text: "As Muslims, it is rare to find a hotel that truly caters to our needs. Our room was spacious, modern, with a private balcony with breathtaking sea views." },
  { name: "Ermin Tarahija", group: "Couple", text: "Highly recommend 10/10. Extremely clean, modernly decorated. Staff is incredibly friendly. Wellness center with pool, sauna and jacuzzi is ideal." },
];

const bookingFaqs = [
  {
    question: "How do I book a room at Hotel Maghrib Ulcinj?",
    answer:
      "Send an inquiry via the reservation concierge on this page, WhatsApp (+382 68 007 720) or email (info@hotelmaghrib.me). There is no online payment: the reservations team confirms availability and your final rate personally, usually within two hours.",
  },
  {
    question: "What are the rates at Hotel Maghrib?",
    answer:
      "2026 season starting rates: Deluxe Double Room from EUR169, Premium King Room from EUR189, Superior Triple Room from EUR209, Junior Family Suite from EUR229 — breakfast buffet always included.",
  },
  {
    question: "Is Hotel Maghrib the best halal hotel in Ulcinj?",
    answer:
      "Guests rate it 4.9/5 across 136 Google reviews, and it is the only hotel in Ulcinj built as a 100% halal, alcohol-free house with a private-bookable family spa and an onsite Masjid.",
  },
  {
    question: "When should I book for summer?",
    answer:
      "Ulcinj's season peaks in July and August; halal-family rooms sell out first. For July stays, reserve by early spring. June and September offer the same sea and softer rates.",
  },
];

export default function HalalHotelUlcinjPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BrandDefs />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content">

        <section className="interior-hero">
          <div className="interior-hero-media">
            <Image src={photo(56)} alt="Hotel Maghrib — the 100% halal hotel in Ulcinj, Montenegro — above the Adriatic at golden hour" width={2000} height={1100} priority sizes="100vw" fetchPriority="high" />
          </div>
          <div className="interior-hero-shade" />
          <div className="page-width interior-hero-inner">
            <Eyebrow number="01">ULCINJ&rsquo;S PREMIER HALAL HOTEL</Eyebrow>
            <h1>100% halal hotel<br /><em>in Ulcinj, Montenegro.</em></h1>
            <p className="body-copy interior-hero-lede">
              Hotel Maghrib is Ulcinj&rsquo;s halal-built sanctuary: certified halal breakfast, an entirely alcohol-free
              house, sea-view suites with private balconies, a bookable family spa, and an onsite Masjid — one quiet
              hill above the Adriatic, 14 minutes from Small Beach.
            </p>
            <div className="hero-actions interior-hero-actions">
              <button className="button button--gold" onClick={() => setOpen(true)}>Check availability <ArrowUpRight size={17} strokeWidth={1.5} /></button>
              <Link className="hero-explore" href="/rooms">See rooms &amp; rates <ArrowRight size={16} strokeWidth={1.5} /></Link>
            </div>
          </div>
        </section>

        <section className="stats-band" aria-label="Hotel Maghrib at a glance">
          {quickFacts.map((fact) => (
            <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>
          ))}
        </section>

        <section className="room-index section-space page-width" aria-label="Rooms and rates">
          {suites.map((suite) => (
            <Reveal className="room-rate-row" key={suite.id}>
              <Link className="room-rate-photo" href={`/rooms/${suite.seoSlug}`}>
                <Image src={photo(suite.image)} alt={`${suite.name} with sea-view balcony at Hotel Maghrib Ulcinj`} width={520} height={390} loading="lazy" sizes="220px" />
              </Link>
              <div className="room-rate-copy">
                <h3>{suite.name}</h3>
                <div className="suite-specs"><span>{suite.size} m<sup>2</sup></span><i /><span>Up to {suite.guests} guests</span><i /><span>Halal breakfast included</span></div>
              </div>
              <div className="room-rate-cta">
                <p className="suite-rate">From <strong>&euro;{suite.price}</strong><span> / night</span></p>
                <button className="button button--outline" onClick={() => setOpen(true)}>Reserve <ArrowUpRight size={15} strokeWidth={1.5} /></button>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="differentiators-section page-width section-space" id="features">
          <Reveal className="section-heading">
            <div>
              <Eyebrow number="02">WHY WE&rsquo;RE DIFFERENT</Eyebrow>
              <h2>What makes Maghrib<br /><em>the halal choice.</em></h2>
            </div>
            <p className="body-copy">Six commitments our guests verify on arrival — and the reason families rebook every summer.</p>
          </Reveal>
          <div className="differentiators-grid">
            {differentiators.map((item, index) => (
              <Reveal key={item.title}>
                <div className="differentiator-card">
                  <Check size={15} strokeWidth={1.6} />
                  <h3>{item.title}</h3>
                  <p className="body-copy">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="lp-reviews page-width section-space">
          <Reveal>
            <p className="eyebrow"><Khatim className="eyebrow-star" />IN OUR GUESTS&rsquo; WORDS</p>
            <div className="review-stars" aria-label="4.9 out of 5, from 136 Google reviews">
              {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={12} fill="currentColor" strokeWidth={1} />)}
              <span>4.9 / 5 ON GOOGLE &nbsp;&#10022;&nbsp; 136 REVIEWS</span>
            </div>
            <div className="lp-reviews-grid">
              {reviews.map((review) => (
                <blockquote key={review.name}>
                  <p>&ldquo;{review.text}&rdquo;</p>
                  <p className="review-author">{review.name}<span>{review.group} stay / Google guest review</span></p>
                </blockquote>
              ))}
            </div>
            <Link className="text-link" href="/#reviews">More guest stories <ArrowUpRight size={15} /></Link>
          </Reveal>
        </section>

        <section className="faqs-section page-width section-space" id="booking">
          <CenteredFaqs faqs={bookingFaqs} eyebrow="BOOKING, ANSWERED" title="Rates, availability and how to reserve" />
        </section>

        <section className="closing-section">
          <div className="hour-texture" aria-hidden="true" />
          <div className="closing-glow" aria-hidden="true" />
          <div className="closing-content">
            <div className="closing-seal">
              <Seal className="is-turning" />
              <Monogram className="closing-monogram" />
            </div>
            <p className="eyebrow"><Khatim className="eyebrow-star" />YOUR ADRIATIC CHAPTER AWAITS</p>
            <h2>Come for the view.<br /><em>Stay for the feeling.</em></h2>
            <p>We look forward to making you feel at home.</p>
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
