import type { Metadata } from "next";
import HalalHotelUlcinjPage from "@/components/redesign/HalalHotelUlcinjPage";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { hotelLd, breadcrumbLd, faqLd } from "@/data/redesign/schema";
import { centralFaqs } from "@/data/redesign/schema";

export const metadata: Metadata = pageMetadata("/halal-hotel-ulcinj");

export default function HalalHotelUlcinj() {
  return (
      <>
      <SiteHeader active="/halal-hotel-ulcinj" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelLd("/halal-hotel-ulcinj")) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Halal Hotel Ulcinj", path: "/halal-hotel-ulcinj" },
            ]),
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(centralFaqs)) }} />
      <HalalHotelUlcinjPage />
      <SiteFooter />
    </>
  );
}
