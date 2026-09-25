import type { Metadata } from "next";
import StoryPage from "@/components/redesign/StoryPage";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { breadcrumbLd } from "@/data/redesign/schema";

export const metadata: Metadata = pageMetadata("/story");

export default function Story() {
  return (
      <>
      <SiteHeader active="/story" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Our Story", path: "/story" },
            ]),
          ),
        }}
      />
      <StoryPage />
      <SiteFooter />
    </>
  );
}
