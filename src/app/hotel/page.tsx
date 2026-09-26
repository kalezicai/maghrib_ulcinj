import type { Metadata } from "next";
import HotelPage from "@/components/redesign/HotelPage";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { hotelLd, breadcrumbLd, faqLd } from "@/data/redesign/schema";
import { hotelFaqs } from "@/data/redesign/hotel-page";

export const metadata: Metadata = pageMetadata("/hotel");

export default function Hotel() {
  return (
    <>
      <SiteHeader active="/hotel" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelLd("/hotel")) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "The Hotel", path: "/hotel" },
            ]),
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(hotelFaqs)) }} />
      <HotelPage />
      <SiteFooter />
    </>
  );
}
