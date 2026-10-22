import { test, expect } from "@playwright/test";
test("hero actions and contact navigation", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(
    page.getByRole("img", { name: /Saipranay Thandu/ }),
  ).toBeVisible();
  await page
    .getByRole("link", { name: "Discover the work", exact: true })
    .click();
  await expect(page).toHaveURL(/#work/);
  await page.getByRole("link", { name: "Expertise", exact: true }).click();
  await expect(page).toHaveURL(/#expertise/);
  await page.getByRole("link", { name: "Contact", exact: true }).click();
  await expect(
    page.locator("#contact").getByRole("link", { name: /Email Saipranay/ }),
  ).toHaveAttribute("href", "mailto:thandusaipranay@gmail.com");
  expect(errors).toEqual([]);
});
test("project narratives, stage controls and case links", async ({ page }) => {
  await page.goto("/#work");
  const story = page.locator("#story-1");
  await story.getByRole("button", { name: "03 Publish" }).click();
  await expect(
    story.getByRole("button", { name: "03 Publish" }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(story.getByText(/Publish accepted records/)).toBeVisible();
  await page
    .locator("#story-2")
    .getByRole("link", { name: "Investigate delivery" })
    .click();
  await expect(page).toHaveURL(/work\/delivery-intelligence/);
});
test("motion prototype completes and skip stays settled", async ({ page }) => {
  await page.goto("/explorations/noise");
  const scene = page.locator("#noise");
  await scene.scrollIntoViewIfNeeded();
  await page
    .getByRole("button", { name: "Replay data transformation" })
    .click();
  await expect(scene).toHaveAttribute("data-phase", "noise");
  await expect(scene).toHaveAttribute("data-phase", "clarity", {
    timeout: 6000,
  });
  await page
    .getByRole("button", { name: "Replay data transformation" })
    .click();
  await page.getByRole("button", { name: "Skip animation" }).click();
  await expect(scene).toHaveAttribute("data-phase", "clarity");
  await page.waitForTimeout(3300);
  await expect(scene).toHaveAttribute("data-phase", "clarity");
});
test("reduced motion starts and remains in completed state", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/explorations/noise");
  await expect(page.locator("#noise")).toHaveAttribute("data-phase", "clarity");
  await page
    .getByRole("button", { name: "Replay data transformation" })
    .click();
  await expect(page.locator("#noise")).toHaveAttribute("data-phase", "clarity");
  await expect(
    page.getByRole("button", { name: "Skip animation" }),
  ).toHaveCount(0);
});
test("all case pages and stories remain within narrow viewports", async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      "/",
      "/work/geospatial-pipelines",
      "/work/delivery-intelligence",
      "/work/qualification-analytics",
    ]) {
      await page.goto(path);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBeTruthy();
    }
  }
});
test("wide fact table is discoverable and keyboard scrollable", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/work/delivery-intelligence");
  const table = page.getByRole("region", {
    name: "Project delivery facts; scroll horizontally for all columns",
  });
  await expect(
    page.getByText("Scroll horizontally to inspect all eight fields."),
  ).toBeVisible();
  await table.focus();
  await page.keyboard.press("ArrowRight");
  await expect
    .poll(() => table.evaluate((e) => e.scrollLeft))
    .toBeGreaterThan(0);
});
