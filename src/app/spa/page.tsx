import type { Metadata } from "next";
import SpaPage from "@/components/redesign/SpaPage";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { hotelLd, breadcrumbLd, faqLd } from "@/data/redesign/schema";
import { spaFaqs } from "@/data/redesign/faqs";

export const metadata: Metadata = pageMetadata("/spa");

export default function Spa() {
  return (
      <>
      <SiteHeader active="/spa" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelLd("/spa")) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Private Spa & Wellness", path: "/spa" },
            ]),
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(spaFaqs)) }} />
      <SpaPage />
      <SiteFooter />
    </>
  );
}
