import type { Metadata } from "next";
import HomeSections from "@/components/redesign/HomeSections";
import { SiteFooter } from "@/components/redesign/Chrome";
import { pageMetadata } from "@/lib/page-metadata";
import { centralFaqs, hotelLd, websiteLd, faqLd, breadcrumbLd } from "@/data/redesign/schema";

export const metadata: Metadata = pageMetadata("/");

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelLd("/")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(centralFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd([{ name: "Home", path: "/" }])) }}
      />
      <HomeSections />
      <SiteFooter />
    </>
  );
}
