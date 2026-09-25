"use client";

/**
 * /spa — the private family spa & wellness page.
 * Keyword cluster: halal spa ulcinj, private family spa montenegro,
 * women only pool hours, indoor pool hotel ulcinj.
 */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Clock, Waves, Shield, Users } from "lucide-react";
import Brand, { BrandDefs, Eyebrow, Khatim, Monogram, Rule } from "./Brand";
import CenteredFaqs from "./CenteredFaqs";
import Reveal, { ArchPhoto } from "./Reveal";
import HotelImage from "./HotelImage";
import Modal from "./BookingModal";
import { SpaBooking } from "./Booking";
import { photo, PHONE_LINK } from "@/data/redesign/hotel";
import { spaFaqs } from "@/data/redesign/faqs";

export default function SpaPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BrandDefs />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content">

        <section className="interior-hero">
          <div className="interior-hero-media">
            <Image src={photo(55)} alt="The private indoor pool sanctuary at the family spa of Hotel Maghrib in Ulcinj, Montenegro" width={2000} height={1100} priority sizes="100vw" fetchPriority="high" />
          </div>
          <div className="interior-hero-shade" />
          <div className="page-width interior-hero-inner">
            <Eyebrow number="04">WELLNESS, ON YOUR TERMS</Eyebrow>
            <h1>A little stillness.<br /><em>All to yourself.</em></h1>
            <p className="body-copy interior-hero-lede">
              An indoor pool, a whirlpool with therapeutic colours, and a warming cedar sauna — privately bookable by the
              hour, so your family relaxes the way your family relaxes. Structured women-and-children hours, men-only
              hours, and exclusive private sessions define the spa at Ulcinj’s halal Hotel Maghrib.
            </p>
            <span className="interior-hero-note"><Khatim />PRIVATE FAMILY BOOKINGS &nbsp;&#10022;&nbsp; ZERO-CONFLICT RESERVATIONS</span>
          </div>
        </section>

        <section className="spa-hours-section section-space page-width">
          <Reveal className="spa-hours-intro">
            <Eyebrow number="01">STRUCTURED &amp; PRIVATE HOURS</Eyebrow>
            <h2>The spa,<br /><em>scheduled in good faith.</em></h2>
            <p className="body-copy">
              We listened to our guests: no overlaps, no surprises. The wellness day is organized so every family, woman,
              or man can enjoy the water with complete peace of mind.
            </p>
          </Reveal>
          <Reveal className="spa-hours-table" delay={0.1}>
            <div className="spa-hours-list">
              <div className="is-gold"><Waves size={16} strokeWidth={1.4} /><span>Women &amp; children only</span><strong>11:00 – 12:00&nbsp;&nbsp;/&nbsp;&nbsp;15:00 – 16:00</strong></div>
              <div><Shield size={16} strokeWidth={1.4} /><span>Men only</span><strong>14:00 – 15:00</strong></div>
              <div><Users size={16} strokeWidth={1.4} /><span>Mixed general use</span><strong>All other operational hours, unless privately reserved</strong></div>
              <div><Clock size={16} strokeWidth={1.4} /><span>Private family booking</span><strong>Exclusive one-hour slots, on request</strong></div>
            </div>
            <button className="button button--rust" onClick={() => setOpen(true)}>Request a private spa slot <ArrowUpRight size={17} strokeWidth={1.5} /></button>
            <p className="form-note">Preferred times, confirmed personally by our concierge. For same-day requests, call <a href={PHONE_LINK}>+382 68 007 720</a>.</p>
          </Reveal>
        </section>

        <section className="interior-gallery-band" aria-label="The private spa in photographs">
          {[
            { image: 3, alt: "The private indoor spa pool at Hotel Maghrib in Ulcinj, Montenegro" },
            { image: 6, alt: "The cedar sauna inside the private family spa of Hotel Maghrib" },
            { image: 18, alt: "The indoor swimming pool with children's wading area at Hotel Maghrib Ulcinj" },
          ].map((item, index) => (
            <Reveal key={item.image} className={`band-photo band-photo--${index}`}>
              <Image src={photo(item.image)} alt={item.alt} width={700} height={900} loading="lazy" sizes="(max-width: 900px) 92vw, 30vw" />
            </Reveal>
          ))}
        </section>

        <section className="story-section page-width section-space">
          <Reveal className="story-copy">
            <Eyebrow number="02">WHY IT MATTERS</Eyebrow>
            <h2>Modesty, without<br /><em>giving anything up.</em></h2>
            <p className="body-copy drop-cap">A spa holiday should never be the reason you compromise. At Hotel Maghrib the wellness center learned from every season of guest feedback: pool hours that protect families, whirlpool features that delight the children.</p>
            <p className="body-copy">The cedar sauna warms slowly, as it should. Towels, robes and a changing suite are all steps from the water. And when the hour is yours, it is yours alone — no scheduling conflicts, ever again.</p>
          </Reveal>
          <Reveal className="story-visual" delay={0.12}>
            <ArchPhoto src={photo(21)} alt="A warm, private family wellness corner at the spa of Hotel Maghrib, Ulcinj" caption="Yours, for a whole hour." />
          </Reveal>
        </section>

        <section className="faqs-section page-width section-space">
          <CenteredFaqs faqs={spaFaqs} eyebrow="THE SPA, ANSWERED" title="Private spa questions, answered" />
        </section>

        <section className="closing-section">
          <div className="hour-texture" aria-hidden="true" />
          <div className="closing-glow" aria-hidden="true" />
          <div className="closing-content">
            <Monogram className="closing-monogram" />
            <p className="eyebrow"><Khatim className="eyebrow-star" />THE POOL IS WARM</p>
            <h2>Your hour<br /><em>is waiting.</em></h2>
            <p>Reserve through the spa concierge — confirmed personally.</p>
            <button className="button button--gold" onClick={() => setOpen(true)}>Plan your private spa moment <ArrowUpRight size={17} strokeWidth={1.5} /></button>
          </div>
        </section>
      </main>

      {open && (
        <Modal onClose={() => setOpen(false)} label="Private spa concierge" variant="wide">
          <SpaBooking />
        </Modal>
      )}
    </>
  );
}
