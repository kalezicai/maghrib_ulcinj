import type { Metadata } from "next";
import GalleryPageBrowser from "@/components/redesign/GalleryPage";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { breadcrumbLd, galleryLd } from "@/data/redesign/schema";
import { photo } from "@/data/redesign/hotel";
import { SITE_URL } from "@/data/redesign/hotel";

export const metadata: Metadata = pageMetadata("/gallery");

export default function GalleryPage() {
  return (
      <>
      <SiteHeader active="/gallery" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Photo Gallery", path: "/gallery" },
            ]),
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryLd()) }} />
      <GalleryPageBrowser />
      <SiteFooter />
    </>
  );
}
