import { describe, it, expect } from "vitest";
import { hotelLd, faqLd, breadcrumbLd, roomLd, roomFaqs, centralFaqs, touristDestinationLd, galleryLd } from "./schema";
import { suites } from "./hotel";
import { PAGE_SEO, NOINDEX_PAGES } from "./seo";

const validTypes = [
  "Hotel", "FAQPage", "BreadcrumbList", "HotelRoom", "ImageGallery",
  "WebSite", "Organization", "BlogPosting", "TouristDestination", "WebPage",
  "PostalAddress", "GeoCoordinates", "AggregateRating", "Offer", "Rating",
  "LocationFeatureSpecification", "Question", "Answer", "ListItem",
  "QuantitativeValue", "BedDetails", "LandmarksOrHistoricalBuildings",
  "Beach", "Park", "EntryPoint", "CommunicateAction",
];

function walkTypes(node: unknown, found: Set<string>) {
  if (Array.isArray(node)) {
    node.forEach((item) => walkTypes(item, found));
    return;
  }
  if (node && typeof node === "object") {
    const record = node as Record<string, unknown>;
    if (typeof record["@type"] === "string") found.add(record["@type"]);
    Object.values(record).forEach((value) => walkTypes(value, found));
  }
}

describe("structured data builders", () => {
  it("hotelLd anchors the canonical Hotel entity with address + geo", () => {
    const ld = hotelLd("/") as Record<string, unknown>;
    expect(ld["@type"]).toBe("Hotel");
    expect(ld["@id"]).toBe("https://hotelmaghrib.me/#hotel");
    expect((ld.address as Record<string, unknown>).addressLocality).toBe("Ulcinj");
    expect(ld.url).toBe("https://hotelmaghrib.me/");
  });

  it("hotelLd covers all four suites as offers", () => {
    const ld = hotelLd("/") as Record<string, unknown>;
    expect((ld.makesOffer as unknown[]).length).toBe(suites.length);
  });

  it("every schema fragment declares schema.org context and a known type", () => {
    const all = [hotelLd("/"), faqLd(centralFaqs), breadcrumbLd([{ name: "Home", path: "/" }]), roomLd(suites[0], "/rooms/deluxe-double-room"), touristDestinationLd(), galleryLd()];
    for (const fragment of all) {
      const found = new Set<string>();
      walkTypes(fragment, found);
      expect(found.size).toBeGreaterThan(0);
      for (const type of found) expect(validTypes).toContain(type);
    }
  });

  it("roomFaqs reference the correct suite by name", () => {
    const faqs = roomFaqs(suites[1]);
    expect(faqs[0].answer).toContain("halal-certified breakfast buffet");
    expect(faqs[1].answer).toContain(suites[1].name);
  });

  it("faqLd serializes to valid JSON for the script tag", () => {
    const serialized = JSON.stringify(faqLd(centralFaqs));
    expect(() => JSON.parse(serialized)).not.toThrow();
  });
});

describe("SEO page registry", () => {
  it("gives every page a unique canonical path, title and description", () => {
    const paths = new Set<string>();
    const titles = new Set<string>();
    for (const page of Object.values(PAGE_SEO)) {
      expect(paths.has(page.path)).toBe(false);
      expect(titles.has(page.title)).toBe(false);
      expect(page.title.length).toBeGreaterThan(15);
      expect(page.description.length).toBeGreaterThan(50);
      expect(page.keywords.length).toBeGreaterThan(0);
      paths.add(page.path);
      titles.add(page.title);
    }
  });

  it("excludes noindex utility pages from the sitemap path set", () => {
    for (const path of Object.keys(NOINDEX_PAGES)) {
      expect(PAGE_SEO[path]).toBeDefined();
    }
  });

  it("og images exist as generated assets", () => {
    const fs = require("fs");
    const path = require("path");
    for (const page of Object.values(PAGE_SEO)) {
      const ogPath = path.join(process.cwd(), "public", page.ogImage);
      expect(fs.existsSync(ogPath)).toBe(true);
    }
  });
});
