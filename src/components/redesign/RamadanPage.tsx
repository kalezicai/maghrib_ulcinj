"use client";

/**
 * /ramadan — Ramadan at Maghrib (2027 edition).
 * AEO cluster: ramadan package ulcinj, iftar suhoor hotel montenegro.
 */

import SmartImage from "./SmartImage";
import { ArrowRight, ArrowUpRight, Moon, Sun, Users, Clock, Utensils } from "lucide-react";
import { useState } from "react";
import Brand, { BrandDefs, Eyebrow, Khatim, Monogram, Rule } from "./Brand";
import CenteredFaqs from "./CenteredFaqs";
import Reveal, { ArchPhoto } from "./Reveal";
import HotelImage from "./HotelImage";
import Modal from "./BookingModal";
import { photo, whatsappLink } from "@/data/redesign/hotel";
import { ramadanFaqs } from "@/data/redesign/faqs";

export default function RamadanPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BrandDefs />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content">

        <section className="interior-hero">
          <div className="interior-hero-media">
            <SmartImage src={photo(17)} alt="The Ramadan iftar table setting at Hotel Maghrib in Ulcinj, Montenegro" width={2000} height={1100} priority sizes="100vw" fetchPriority="high" />
          </div>
          <div className="interior-hero-shade" />
          <div className="page-width interior-hero-inner">
            <Eyebrow number="06">RAMADAN 2027 AT MAGHRIB</Eyebrow>
            <h1>A blessed month,<br /><em>above the Adriatic.</em></h1>
            <p className="body-copy interior-hero-lede">
              Spend the blessed month in a place built for it: Maghrib over the sea as you break your fast, suhoor while
              the town sleeps, Taraweeh in the hotel Masjid, and every room one Qibla-marker away from rest. Ramadan at
              the halal Hotel Maghrib in Ulcinj, Montenegro.
            </p>
            <span className="interior-hero-note"><Khatim />IFTAR &nbsp;&#10022;&nbsp; SUHOOR &nbsp;&#10022;&nbsp; TARAWEEH &nbsp;&#10022;&nbsp; PRIVATE WELLNESS</span>
          </div>
        </section>

        <section className="flow-section section-space page-width">
          {[
            {
              icon: Utensils,
              title: "Daily iftar buffet",
              text: "Break your fast with a halal-certified spread of traditional Balkan and Turkish dishes: fresh dates, soups, grilled specialties, and traditional desserts — served as the sun slips into the Adriatic.",
            },
            {
              icon: Sun,
              title: "Pre-dawn suhoor",
              text: "Early service with light, sustaining options — fresh pastries, fruit, yogurt, olive oil, eggs, and traditional energy-rich dishes to carry you through the fast.",
            },
            {
              icon: Moon,
              title: "Prayer & reflection",
              text: "Extended Masjid hours with Taraweeh prayers, separate spaces for brothers and sisters, and quiet sea-view balconies for the last half of the night.",
            },
            {
              icon: Users,
              title: "Private family wellness",
              text: "Reserve the pool and sauna exclusively for your family after iftar — the quietest hour of the wellness day. Extended checkout and Ramadan package pricing on request.",
            },
          ].map((item, index) => (
            <Reveal className="flow-row" key={item.title}>
              <div className="flow-icon"><item.icon size={17} strokeWidth={1.4} /></div>
              <div className="flow-copy">
                <p className="eyebrow"><Khatim className="eyebrow-star" />0{index + 1}</p>
                <h2>{item.title}</h2>
                <p className="body-copy">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="story-section page-width section-space">
          <Reveal className="story-copy">
            <Eyebrow number="02">THE NIGHT TABLE</Eyebrow>
            <h2>Iftar, timed to<br /><em>the sea.</em></h2>
            <p className="body-copy drop-cap">In Ulcinj the fast ends at the water. Our dining terrace sits above the bay, so the adhan and the sunset arrive together. Dates and soup are already on the table; the pines cool the air you breathe.</p>
            <p className="body-copy">Families keep the tables late — sometimes the whole night for the last ten. In the morning, suhoor reopens the terrace while the stars are still out over the Adriatic.</p>
          </Reveal>
          <Reveal className="story-visual" delay={0.12}>
            <ArchPhoto src={photo(10)} alt="The sea-view terrace of Hotel Maghrib in Ulcinj at sunset — the hotel's namesake maghrib hour" caption="The hour we are named for." />
          </Reveal>
        </section>

        <section className="faqs-section page-width section-space">
          <CenteredFaqs faqs={ramadanFaqs} eyebrow="RAMADAN, ANSWERED" title="Ramadan at Maghrib, in detail" />
        </section>

        <section className="closing-section">
          <div className="hour-texture" aria-hidden="true" />
          <div className="closing-glow" aria-hidden="true" />
          <div className="closing-content">
            <Monogram className="closing-monogram" />
            <p className="eyebrow"><Khatim className="eyebrow-star" />RESERVE RAMADAN 2027</p>
            <h2>Rooms fill<br /><em>before the moon.</em></h2>
            <p>Ramadan packages release each December — inquire early for suite choice.</p>
            <a
              className="button button--gold"
              href={whatsappLink("Hello Hotel Maghrib, I would like to know more about your Ramadan 2027 packages, iftar and suhoor services, and room availability. Thank you!")}
              target="_blank"
              rel="noreferrer"
            >
              Inquire about Ramadan <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}