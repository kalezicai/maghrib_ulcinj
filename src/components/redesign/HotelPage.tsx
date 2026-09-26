"use client";

/**
 * /hotel — the dedicated "The Hotel" page.
 * Continuation of the header item: the house, the concept, the facilities,
 * with more pictures and explanations than the home page offers.
 * Keyword cluster: hotel maghrib ulcinj, 100% halal hotel montenegro,
 * family run hotel ulcinj, boutique hotel adriatic.
 */

import Link from "next/link";
import { useState } from "react";
import SmartImage from "./SmartImage";
import { ArrowRight, ArrowUpRight, Check, Utensils, Moon, Waves, Sun, Car, Clock, Star, MapPin } from "lucide-react";
import Brand, { BrandDefs, Eyebrow, Khatim, Monogram, Rule, Seal } from "./Brand";
import CenteredFaqs from "./CenteredFaqs";
import Reveal, { ArchPhoto } from "./Reveal";
import Modal from "./BookingModal";
import Booking from "./Booking";
import { photo, MAP_LINK } from "@/data/redesign/hotel";
import { hotelFaqs } from "@/data/redesign/hotel-page";

const stats = [
  { value: "16", label: "SEA-VIEW ROOMS" },
  { value: "4.9", label: "GOOGLE RATING" },
  { value: "136", label: "VERIFIED REVIEWS" },
  { value: "100%", label: "ALCOHOL-FREE HOUSE" },
];

const facilities = [
  {
    icon: Waves,
    href: "/spa",
    title: "The Private Spa",
    text: "Indoor heated pool with a children's wading corner, chromotherapy jacuzzi and a cedar sauna — reservable by your family alone, with structured women-and-children and men-only hours.",
  },
  {
    icon: Utensils,
    href: "/experience",
    title: "Halal Dining & Terrace",
    text: "A 100% halal-certified breakfast buffet served on the open-air terrace, which stays open around the clock — sunrise coffees, family dinners, and the hotel's namesake maghrib sunset.",
  },
  {
    icon: Moon,
    href: "/experience",
    title: "The Masjid",
    text: "A dedicated, air-conditioned prayer room with wudu facilities at the heart of the house, plus clear Qibla direction markers in every single room.",
  },
  {
    icon: Sun,
    href: "/rooms",
    title: "Sea-View Rooms",
    text: "Four room types, 38–55 m², every one with a private balcony over the Adriatic and a hidden sightline for privacy. Suites sleep 2 to 5 guests.",
  },
  {
    icon: Car,
    title: "Free Private Parking",
    text: "Secure parking on the hotel's own hillside — right by the entrance, at no charge, in one of Ulcinj's quietest neighbourhoods.",
  },
  {
    icon: Clock,
    title: "Hospitality Around the Clock",
    text: "Reception and hosts who answer within two hours, arrange airport transfers, and point you to the right beach by the wind direction.",
  },
];

const IncludedFacts = [
  "Check-in from 2:00 PM",
  "Check-out by 11:00 AM",
  "Halal breakfast buffet included",
  "Free private parking",
  "Wi-Fi throughout",
  "Airport transfers on request",
];

export default function HotelPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BrandDefs />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content">
        <section className="interior-hero">
          <div className="interior-hero-media">
            <SmartImage src={photo(56)} alt="Hotel Maghrib — the family-run 100% halal hotel in Ulcinj, Montenegro — among the Borići pines above the Adriatic" width={2000} height={1100} priority sizes="100vw" fetchPriority="high" />
          </div>
          <div className="interior-hero-shade" />
          <div className="page-width interior-hero-inner">
            <Eyebrow number="01">THE HOTEL</Eyebrow>
            <h1>A house built<br /><em>around your values.</em></h1>
            <p className="body-copy interior-hero-lede">
              Hotel Maghrib is a family-run, 100% halal boutique hotel on Ulcinj&rsquo;s hillside — 16 sea-view rooms,
              a private-bookable spa, an onsite Masjid and a wholly alcohol-free house, held to one standard:
              a beautiful holiday and a faithful one should never compete.
            </p>
            <span className="interior-hero-note"><Khatim />FAMILY RUN &nbsp;&#10022;&nbsp; HALAL BUILT &nbsp;&#10022;&nbsp; ABOVE THE ADRIATIC</span>
          </div>
        </section>

        <section className="stats-band" aria-label="Hotel Maghrib at a glance">
          {stats.map((fact) => (
            <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>
          ))}
        </section>

        <section className="story-section page-width section-space">
          <Reveal className="story-copy">
            <Eyebrow number="02">WHAT MAGHRIB IS</Eyebrow>
            <h2>One hill.<br />Sixteen rooms.<br /><em>One promise.</em></h2>
            <p className="body-copy drop-cap">High above the Adriatic, flanked by the iconic Borići pines, Hotel Maghrib was built by a travelling family who knew exactly what was missing on this coast: a house where halal is the system, not an exception.</p>
            <p className="body-copy">So the kitchen is certified halal and the house is alcohol-free. The balconies hide you from every neighbouring sightline. The spa reserves itself by the hour — for your family alone. The Masjid sits at the centre of the floor plan, and every room carries a Qibla marker. Nothing here is improvised; it was designed this way on purpose.</p>
            <Link className="text-link" href="/story">Read the full story <ArrowUpRight size={17} strokeWidth={1.5} /></Link>
            <div className="story-signature">
              <Monogram />
              <span>THOUGHTFULLY HOSTED.<br />NATURALLY SERENE.</span>
            </div>
          </Reveal>
          <Reveal className="story-visual" delay={0.12}>
            <ArchPhoto src={photo(58)} alt="A private sea-view balcony at Hotel Maghrib, hidden from view and facing the Adriatic Sea" caption="Privacy, built into the architecture." />
          </Reveal>
        </section>

        <section className="interior-gallery-band" aria-label="The hotel in photographs">
          {[
            { image: 25, alt: "The light-filled lobby and reception of Hotel Maghrib in Ulcinj" },
            { image: 12, alt: "The warm welcome at the entrance of Hotel Maghrib, Ulcinj" },
            { image: 26, alt: "Hotel Maghrib glowing after dark among the pines of Ulcinj" },
          ].map((item, index) => (
            <Reveal key={item.image} className={`band-photo band-photo--${index}`}>
              <SmartImage src={photo(item.image)} alt={item.alt} width={700} height={900} loading="lazy" sizes="(max-width: 900px) 92vw, 30vw" />
            </Reveal>
          ))}
        </section>

        <section className="facilities-section page-width section-space">
          <Reveal className="section-heading">
            <div>
              <Eyebrow number="03">THE FACILITIES</Eyebrow>
              <h2>Everything, <em>on your terms.</em></h2>
            </div>
            <p className="body-copy">Each facility is designed for privacy and comfort first — click through for the full picture.</p>
          </Reveal>
          <div className="facilities-grid">
            {facilities.map((item, index) => {
              const Icon = item.icon;
              const inner = (
                <>
                  <Icon size={17} strokeWidth={1.4} />
                  <h3>{item.title}</h3>
                  <p className="body-copy">{item.text}</p>
                  {item.href && <span className="facility-link">Discover more <ArrowRight size={14} /></span>}
                </>
              );
              return (
                <Reveal key={item.title}>
                  {item.href ? <Link className="facility-card" href={item.href}>{inner}</Link> : <div className="facility-card">{inner}</div>}
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="included-strip page-width">
          <div className="included-grid">
            {IncludedFacts.map((fact) => (
              <div key={fact}><Check size={15} strokeWidth={1.5} /><p>{fact}</p></div>
            ))}
          </div>
        </section>

        <section className="story-section page-width section-space">
          <Reveal className="story-visual" >
            <ArchPhoto src={photo(10)} alt="The 24-hour open-air sea-view dining terrace at Hotel Maghrib in Ulcinj at golden hour" caption="The terrace at the hour we are named for." />
          </Reveal>
          <Reveal className="story-copy" delay={0.12}>
            <Eyebrow number="04">THE LOCATION</Eyebrow>
            <h2>Quiet hill.<br />Fourteen minutes<br /><em>to the sea.</em></h2>
            <p className="body-copy">The hotel stands in one of Ulcinj&rsquo;s calmest neighbourhoods, between the pine forest and the town — the walk down to Mala Plaža takes about fourteen minutes, the Old Town a little past it, and the twelve-kilometre Velika Plaža a short drive south.</p>
            <p className="body-copy">Podgorica airport is about 75 minutes by car; our team arranges transfers and shares wind-and-beach advice by season. The <a href={MAP_LINK} target="_blank" rel="noreferrer">map pin</a> says the rest.</p>
            <Link className="text-link" href="/ulcinj">The Ulcinj guide <ArrowUpRight size={17} strokeWidth={1.5} /></Link>
          </Reveal>
        </section>

        <section className="faqs-section page-width section-space">
          <CenteredFaqs faqs={hotelFaqs} eyebrow="THE HOUSE, ANSWERED" title="Questions about Hotel Maghrib" />
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
