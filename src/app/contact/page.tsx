import type { Metadata } from "next";
import ContactPage from "@/components/redesign/ContactPage";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { breadcrumbLd, contactPageLd } from "@/data/redesign/schema";

export const metadata: Metadata = pageMetadata("/contact");

export default function Contact() {
  return (
      <>
      <SiteHeader active="/contact" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageLd()) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Contact & Bookings", path: "/contact" },
            ]),
          ),
        }}
      />
      <ContactPage />
      <SiteFooter />
    </>
  );
}
