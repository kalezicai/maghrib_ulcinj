import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { Eyebrow, Khatim, Monogram } from "@/components/redesign/Brand";
import { HOTEL_EMAIL } from "@/data/redesign/hotel";

export const metadata: Metadata = pageMetadata("/privacy");

export default function PrivacyPage() {
  return (
      <>
      <SiteHeader active="/privacy" />
      <main id="main-content" className="legal-page">
        <article className="legal-inner page-width section-space">
          <Eyebrow number="08">PRIVACY</Eyebrow>
          <h1>A little clarity.<br /><em>Complete peace of mind.</em></h1>
          <p className="body-copy">This website lets you prepare a hotel or spa inquiry in your browser. Form details are not automatically sent to a server or stored after the page is closed.</p>
          <p className="body-copy"><strong>Where your details go.</strong> When you choose WhatsApp or email on the reservation concierge, the details you entered are included in a message to Hotel Maghrib. The message is sent only when you send it in that service; those services handle your information according to their own privacy policies.</p>
          <p className="body-copy"><strong>Technical loading.</strong> The site&rsquo;s original hotel photography and web fonts load from this domain and its content-delivery network, which receive the technical information needed to serve those resources.</p>
          <p className="body-copy"><strong>Cookies.</strong> No analytics or advertising cookies are set by this website.</p>
          <p className="body-copy">For privacy questions about your reservation or information held by the hotel, contact <a href={`mailto:${HOTEL_EMAIL}`}>{HOTEL_EMAIL}</a>.</p>
          <div className="story-signature">
            <Monogram />
            <span>LAST UPDATED FOR THE 2026 SEASON</span>
          </div>
          <p className="body-copy legal-links"><Link href="/">Hotel Maghrib home</Link></p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
