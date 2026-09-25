import type { Metadata } from "next";
import { RoomDetail } from "@/components/redesign/Rooms";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { hotelLd, breadcrumbLd, faqLd, roomLd, roomFaqs } from "@/data/redesign/schema";
import { suites } from "@/data/redesign/hotel";

const suite = suites.find((s) => s.id === "triple")!;

export const metadata: Metadata = pageMetadata("/rooms/superior-triple-room");

export default function RoomDetailPage() {
  return (
      <>
      <SiteHeader active="/rooms/superior-triple-room" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelLd("/rooms/superior-triple-room")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomLd(suite, "/rooms/superior-triple-room")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(roomFaqs(suite))) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Rooms & Suites", path: "/rooms" },
              { name: suite.name, path: "/rooms/superior-triple-room" },
            ]),
          ),
        }}
      />
      <RoomDetail suite={suite} />
      <SiteFooter />
    </>
  );
}


