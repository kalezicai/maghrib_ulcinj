import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads with correct title and hero", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Hotel Maghrib \| 100% Halal Hotel in Ulcinj/);
    await expect(page.locator("h1")).toContainText("MAGHRIB");
    await expect(page.locator(".hero-headline")).toBeVisible();
  });

  test("contains Hotel structured data", async ({ page }) => {
    await page.goto("/");
    const scripts = page.locator('script[type="application/ld+json"]');
    await expect(scripts.first()).toBeAttached();
    const count = await scripts.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("room tabs switch content", async ({ page }) => {
    await page.goto("/");
    await page.locator("#suite-tab-1").click();
    await expect(page.locator("#suite-panel h3")).toContainText("Junior Family Suite");
  });

  test("reservation dialog opens from header", async ({ page }) => {
    await page.goto("/");
    await page.locator(".header-reserve").click();
    await expect(page.locator("dialog[open]")).toBeVisible();
    await page.locator(".modal-close").click();
  });

  test("canonical points to the production domain", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://hotelmaghrib.me");
  });
});

test.describe("Navigation between pages", () => {
  test("rooms index links to all four room detail pages", async ({ page }) => {
    await page.goto("/rooms");
    for (const slug of ["deluxe-double-room", "junior-family-suite", "premium-king-room", "superior-triple-room"]) {
      await expect(page.locator(`a[href="/rooms/${slug}"]`).first()).toBeAttached();
    }
  });

  test("header navigates to the experience page", async ({ page }) => {
    await page.goto("/rooms");
    await Promise.all([
      page.waitForURL("**/experience"),
      page.locator('.desktop-nav a[href="/experience"]').click(),
    ]);
    await expect(page.locator("h1")).toContainText("Halal");
  });
});
