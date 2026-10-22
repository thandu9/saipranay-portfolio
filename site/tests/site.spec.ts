import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("architecture selection, history, schema and technology keyboard", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: /06 Semantic Layer/ }).click();
  await expect(page).toHaveURL(/stage=semantic/);
  await page.getByRole("button", { name: "Open dimensional model" }).click();
  await expect(page.getByTestId("project-count")).toHaveText("6");
  await page.getByLabel("Filter Dim_District").selectOption("D1");
  await expect(page.getByTestId("project-count")).toHaveText("3");
  await page.getByRole("button", { name: "Follow the flow" }).click();
  await expect(page.locator("#stage-detail h3")).toHaveText(
    "Business Decisions",
  );
  await page.goBack();
  await expect(page.locator("#stage-detail h3")).toHaveText("Semantic Layer");
  await page.getByRole("tab").first().focus();
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("tab").nth(1)).toHaveAttribute(
    "aria-selected",
    "true",
  );
});
test("case studies and contextual return", async ({ page }) => {
  for (const slug of [
    "geospatial-pipelines",
    "delivery-intelligence",
    "qualification-analytics",
  ]) {
    await page.goto(`/work/${slug}`);
    await expect(page.locator("h1")).toBeVisible();
    await expect(
      page.getByText("Illustrative synthetic data", { exact: false }).first(),
    ).toBeVisible();
    await page.getByRole("link", { name: /Back to architecture/ }).click();
    await expect(page).toHaveURL(/stage=.+#expertise/);
    await expect(page.locator("#stage-detail h3")).toBeVisible();
  }
});
test("synthetic exception and publication controls", async ({ page }) => {
  await page.goto("/work/geospatial-pipelines");
  await page.getByRole("button", { name: "3. Publish" }).click();
  await expect(page.getByText("Held for review")).toBeVisible();
  await page.goto("/work/qualification-analytics");
  await page.getByRole("button", { name: /S-003/ }).click();
  await expect(
    page.getByRole("heading", { name: "Review affiliation" }),
  ).toBeVisible();
});
test("responsive overflow and screenshots", async ({ page }, info) => {
  for (const width of [320, 390, 768, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/?stage=semantic#expertise");
    await page.getByRole("button", { name: "Open dimensional model" }).click();
    await expect(page.getByTestId("project-count")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBeTruthy();
    if (info.project.name === "chromium") {
      await page.goto("/");
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.screenshot({
        path: `../.tools/screenshots/home-${width}.png`,
        fullPage: true,
      });
    }
  }
});
test("reduced motion, outbound links and accessibility", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("#noise")).toHaveAttribute("data-phase", "clarity");
  await expect(page.locator("#credentials a")).toHaveCount(4);
  for (const link of await page.locator("#credentials a").all()) {
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
  await page.goto("/work/delivery-intelligence");
  const schema = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(schema.violations).toEqual([]);
});
