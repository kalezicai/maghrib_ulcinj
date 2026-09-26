import { test, expect } from "@playwright/test";

test.describe("SEO smoke across the multipage site", () => {
  const routes = [
    { path: "/", title: /Hotel Maghrib/ },
    { path: "/rooms", title: /Rooms & Suites with Sea View/ },
    { path: "/rooms/deluxe-double-room", title: /Deluxe Double Room with Sea View/ },
    { path: "/rooms/junior-family-suite", title: /Junior Family Suite/ },
    { path: "/rooms/premium-king-room", title: /Premium King Room with Sea View/ },
    { path: "/rooms/superior-triple-room", title: /Superior Triple Room with Sea View/ },
    { path: "/hotel", title: /The Hotel \| Hotel Maghrib/ },
    { path: "/experience", title: /The 100% Halal Experience/ },
    { path: "/spa", title: /Private Family Spa & Wellness/ },
    { path: "/gallery", title: /Photo Gallery/ },
    { path: "/ulcinj", title: /Where Is Ulcinj/ },
    { path: "/halal-hotel-ulcinj", title: /Halal Hotel Ulcinj/ },
    { path: "/story", title: /Our Story/ },
    { path: "/contact", title: /Contact & Direct Booking/ },
    { path: "/ramadan", title: /Ramadan 2027 in Ulcinj/ },
    { path: "/blog", title: /Halal Travel Journal/ },
    { path: "/blog/halal-hotel-montenegro", title: /100% Halal Hotel/ },
    { path: "/blog/family-holiday-ulcinj", title: /Halal Family Holiday in Ulcinj/ },
    { path: "/blog/ulcinj-vs-budva", title: /Ulcinj vs Budva/ },
  ];

  for (const route of routes) {
    test(`SEO metadata on ${route.path}`, async ({ page }) => {
      await page.goto(route.path);
      await expect(page).toHaveTitle(route.title);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
      const expected = route.path === "/" ? "https://hotelmaghrib.me" : `https://hotelmaghrib.me${route.path}`;
      expect(canonical).toBe(expected);
      const h1Count = await page.locator("h1").count();
      expect(h1Count).toBe(1);
      const ogImage = await page.locator('meta[property="og:image"]').getAttribute("content");
      expect(ogImage).toContain("/images/og/");
    });
  }

  test("404 page returns not found state", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.locator("main")).toContainText("lead to the sea");
  });

  test("robots.txt allows AI crawlers and references the sitemap", async ({ request }) => {
    const response = await request.get("/robots.txt");
    expect(response.ok()).toBeTruthy();
    const body = await response.text();
    expect(body).toContain("Sitemap: https://hotelmaghrib.me/sitemap.xml");
    expect(body).toContain("Allow: /");
  });

  test("sitemap lists the multipage routes", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.ok()).toBeTruthy();
    const body = await response.text();
    for (const path of ["/rooms", "/spa", "/experience", "/ulcinj", "/halal-hotel-ulcinj", "/hotel"]) {
      expect(body).toContain(`https://hotelmaghrib.me${path}`);
    }
  });
});
