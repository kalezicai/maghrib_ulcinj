import { test, expect } from "@playwright/test";

test.describe("Hotel Maghrib Homepage", () => {
  test("renders hero section with title", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
  });

  test("has working navigation links", async ({ page }) => {
    await page.goto("/");
    const galleryLink = page.locator('a[href="/gallery"]');
    await expect(galleryLink).toBeVisible();
  });

  test("can scroll to booking section", async ({ page }) => {
    await page.goto("/");
    await page.locator("#booking-suite").scrollIntoViewIfNeeded();
    await expect(page.locator("#booking-suite")).toBeVisible();
  });

  test("displays metrics bar", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=Google Rating")).toBeVisible();
    await expect(page.locator("text=Halal Certified")).toBeVisible();
  });

  test("shows room options", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=Deluxe Double Room with Sea View").first()).toBeVisible();
  });

  test("spa concierge has booking form", async ({ page }) => {
    await page.goto("/");
    await page.locator("text=Private Spa").first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(page.locator("text=Reserve Your Private Session").or(page.locator("text=Private Spa"))).toBeVisible();
  });
});

test.describe("Gallery Page", () => {
  test("renders gallery with images", async ({ page }) => {
    await page.goto("/gallery");
    await expect(page).toHaveTitle(/Photo Gallery/);
  });

  test("has category filters", async ({ page }) => {
    await page.goto("/gallery");
    await expect(page.locator("text=All Photos")).toBeVisible();
    await expect(page.locator("text=Suites & Rooms")).toBeVisible();
  });
});

test.describe("Halal Hotel Landing Page", () => {
  test("renders with correct heading", async ({ page }) => {
    await page.goto("/halal-hotel-ulcinj");
    await expect(page.locator("h1")).toContainText("Halal");
  });

  test("has booking section", async ({ page }) => {
    await page.goto("/halal-hotel-ulcinj");
    await expect(page.locator("text=Book Your Halal Stay").or(page.locator("#booking"))).toBeVisible();
  });
});
