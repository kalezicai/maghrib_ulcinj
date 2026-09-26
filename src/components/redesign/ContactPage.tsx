"use client";

/**
 * /contact — direct booking & reservations page.
 * Renders the Redesign Booking concierge inline (no dialog), plus NAP
 * details and WhatsApp/email paths for answer-engine extraction.
 */

import SmartImage from "./SmartImage";
import { ArrowUpRight, MapPin, Phone, Mail, Clock, Check } from "lucide-react";
import Brand, { BrandDefs, Eyebrow, Khatim, Monogram, Rule } from "./Brand";
import Reveal from "./Reveal";
import Booking from "./Booking";
import { photo, HOTEL_PHONE, HOTEL_EMAIL, PHONE_LINK, MAP_LINK, whatsappLink } from "@/data/redesign/hotel";

export default function ContactPage() {
  return (
    <>
      <BrandDefs />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content">

        <section className="interior-hero">
          <div className="interior-hero-media">
            <SmartImage src={photo(9)} alt="The front desk of Hotel Maghrib welcoming guests, Ulcinj Montenegro" width={2000} height={1100} priority sizes="100vw" fetchPriority="high" />
          </div>
          <div className="interior-hero-shade" />
          <div className="page-width interior-hero-inner">
            <Eyebrow number="07">RESERVATIONS</Eyebrow>
            <h1>Let&rsquo;s arrange<br /><em>your stay.</em></h1>
            <p className="body-copy interior-hero-lede">
              Book direct with Ulcinj&rsquo;s 100% halal Hotel Maghrib: best available rates, suite requests honoured, and a
              real answer — usually within two hours. Phone, WhatsApp, email, or the concierge below.
            </p>
          </div>
        </section>

        <section className="contact-nap page-width section-space">
          <Reveal className="getting-grid contact-grid">
            <div className="getting-card">
              <Phone size={17} strokeWidth={1.4} />
              <h3>Call or WhatsApp</h3>
              <a className="body-copy contact-line" href={PHONE_LINK}>{HOTEL_PHONE}</a>
              <a className="body-copy contact-line is-link" target="_blank" rel="noreferrer" href={whatsappLink("Hello Hotel Maghrib, I would like to ask about availability.")}>Message us on WhatsApp <ArrowUpRight size={13} /></a>
            </div>
            <div className="getting-card">
              <Mail size={17} strokeWidth={1.4} />
              <h3>Email</h3>
              <a className="body-copy contact-line" href={`mailto:${HOTEL_EMAIL}`}>{HOTEL_EMAIL}</a>
              <p className="body-copy">Group bookings, airport transfers and special dietary requests welcome.</p>
            </div>
            <div className="getting-card">
              <MapPin size={17} strokeWidth={1.4} />
              <h3>Find us</h3>
              <p className="body-copy contact-line">1 Kosovska, 85360 Ulcinj<br />Montenegro</p>
              <a className="body-copy contact-line is-link" target="_blank" rel="noreferrer" href={MAP_LINK}>Open in Google Maps <ArrowUpRight size={13} /></a>
            </div>
          </Reveal>
        </section>

        <section className="contact-booking page-width section-space" aria-label="Reservation concierge">
          <div className="contact-booking-frame">
            <Booking />
          </div>
        </section>

        <section className="faq-strip page-width section-space">
          <div className="faq-strip-grid">
            <div><Check size={15} strokeWidth={1.5} /><p>Direct booking, no portal commission, best available rate</p></div>
            <div><Check size={15} strokeWidth={1.5} /><p>Check-in from 2:00 PM &nbsp;&#10022;&nbsp; Check-out by 11:00 AM</p></div>
            <div><Check size={15} strokeWidth={1.5} /><p>Free private parking for all hotel guests</p></div>
            <div><Check size={15} strokeWidth={1.5} /><p>Halal breakfast buffet included with every stay</p></div>
          </div>
        </section>
      </main>
    </>
  );
}
