import type { Metadata } from "next";
import UlcinjPage from "@/components/redesign/UlcinjPage";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { breadcrumbLd, faqLd, touristDestinationLd } from "@/data/redesign/schema";
import { ulcinjFaqs } from "@/data/redesign/faqs";

export const metadata: Metadata = pageMetadata("/ulcinj");

export default function Ulcinj() {
  return (
      <>
      <SiteHeader active="/ulcinj" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Ulcinj Travel Guide", path: "/ulcinj" },
            ]),
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(ulcinjFaqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristDestinationLd()) }} />
      <UlcinjPage />
      <SiteFooter />
    </>
  );
}
