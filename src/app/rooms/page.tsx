import type { Metadata } from "next";
import { RoomsIndex } from "@/components/redesign/Rooms";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { hotelLd, breadcrumbLd, faqLd } from "@/data/redesign/schema";

export const metadata: Metadata = pageMetadata("/rooms");

const roomsIndexFaqs = [
  {
    question: "Which room should I choose at Hotel Maghrib?",
    answer:
      "Couples usually pick the Deluxe Double Room (38 m², from €169) or the Premium King Room (42 m², from €189); families of five love the Junior Family Suite (55 m², from €229); groups of three book the Superior Triple Room (48 m², from €209). Every room has a private sea-view balcony and the halal breakfast buffet included.",
  },
  {
    question: "Is breakfast included with every room at Hotel Maghrib?",
    answer:
      "Yes. A 100% halal-certified breakfast buffet is included with every stay — fresh pastries, traditional roasted peppers, seasonal fruits and prepared egg dishes, served on the sea-view breakfast terrace.",
  },
  {
    question: "Do all rooms have a sea view in Ulcinj?",
    answer:
      "Yes. All four room types at Hotel Maghrib look west over the Adriatic Sea from Ulcinj's hillside, each with a private balcony hidden from neighbouring views.",
  },
];

export default function RoomsIndexPage() {
  return (
      <>
      <SiteHeader active="/rooms" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelLd("/rooms")) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Rooms & Suites", path: "/rooms" },
            ]),
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(roomsIndexFaqs)) }} />
      <RoomsIndex />
      <SiteFooter />
    </>
  );
}
