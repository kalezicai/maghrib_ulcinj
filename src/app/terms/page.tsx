import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { Eyebrow, Khatim, Monogram } from "@/components/redesign/Brand";
import { HOTEL_PHONE, PHONE_LINK } from "@/data/redesign/hotel";

export const metadata: Metadata = pageMetadata("/terms");

export default function TermsPage() {
  return (
      <>
      <SiteHeader active="/terms" />
      <main id="main-content" className="legal-page">
        <article className="legal-inner page-width section-space">
          <Eyebrow number="09">STAY INFORMATION</Eyebrow>
          <h1>Thoughtful details.<br /><em>No surprises.</em></h1>
          <p className="body-copy">Room prices shown are starting nightly rates for the 2026 season. Seasonal pricing, occupancy supplements, tourist taxes, cancellation conditions, check-in times and final availability are confirmed directly with Hotel Maghrib when you inquire.</p>
          <p className="body-copy"><strong>Inquiries are not confirmations.</strong> Submitting a prepared inquiry through WhatsApp or email is not a booking confirmation. No payment is collected by this website. Your reservation is confirmed only after the hotel responds and you agree to its reservation terms.</p>
          <p className="body-copy"><strong>Private spa reservations.</strong> Private spa times are preferences, not real-time inventory. The hotel must confirm the time, exclusivity, and any applicable charges. Published wellness hours may change — please confirm with reception during your stay.</p>
          <p className="body-copy"><strong>Prayer &amp; sunset times.</strong> Sunrise and sunset times on this website are calculated astronomically for Ulcinj. Daily prayer times are posted at the hotel and in our Masjid, and should be confirmed locally.</p>
          <p className="body-copy">Questions about your dates? Call <a href={PHONE_LINK}>{HOTEL_PHONE}</a> — our team replies within two hours.</p>
          <div className="story-signature">
            <Monogram />
            <span>2026 SEASON INFORMATION</span>
          </div>
          <p className="body-copy legal-links"><Link href="/rooms">Browse rooms &amp; suites</Link></p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
