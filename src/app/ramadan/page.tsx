import type { Metadata } from "next";
import RamadanPage from "@/components/redesign/RamadanPage";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { hotelLd, breadcrumbLd, faqLd } from "@/data/redesign/schema";
import { ramadanFaqs } from "@/data/redesign/faqs";

export const metadata: Metadata = pageMetadata("/ramadan");

export default function Ramadan() {
  return (
      <>
      <SiteHeader active="/ramadan" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelLd("/ramadan")) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Ramadan at Maghrib", path: "/ramadan" },
            ]),
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(ramadanFaqs)) }} />
      <RamadanPage />
      <SiteFooter />
    </>
  );
}
