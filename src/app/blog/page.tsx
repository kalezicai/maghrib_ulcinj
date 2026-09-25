import type { Metadata } from "next";
import { BlogIndex } from "@/components/redesign/Blog";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { breadcrumbLd } from "@/data/redesign/schema";

export const metadata: Metadata = pageMetadata("/blog");

export default function BlogPage() {
  return (
      <>
      <SiteHeader active="/blog" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Halal Travel Journal", path: "/blog" },
            ]),
          ),
        }}
      />
      <BlogIndex />
      <SiteFooter />
    </>
  );
}
