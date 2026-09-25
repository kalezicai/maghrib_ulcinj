import type { Metadata } from "next";
import ExperiencePage from "@/components/redesign/ExperiencePage";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { hotelLd, breadcrumbLd, faqLd } from "@/data/redesign/schema";
import { experienceFaqs } from "@/data/redesign/experience";

export const metadata: Metadata = pageMetadata("/experience");

export default function Experience() {
  return (
      <>
      <SiteHeader active="/experience" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelLd("/experience")) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "The Halal Experience", path: "/experience" },
            ]),
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(experienceFaqs)) }} />
      <ExperiencePage />
      <SiteFooter />
    </>
  );
}
