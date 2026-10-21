import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("explorer selection, keyboard, filters, history and tour", async ({
  page,
}) => {
  await page.goto("/");
  const node = page.getByRole("button", { name: /02 Semantic Modeling/ });
  await node.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/node=modeling/);
  await expect(page.getByTestId("project-count")).toHaveText("6");
  await page.getByLabel("Filter Dim_District").selectOption("D1");
  await expect(page.getByTestId("project-count")).toHaveText("3");
  await page.getByLabel("Filter Dim_Program").selectOption("G2");
  await expect(page.getByTestId("project-count")).toHaveText("1");
  await page.getByRole("button", { name: "Reset filters" }).click();
  await expect(page.getByTestId("project-count")).toHaveText("6");
  await page.getByRole("button", { name: /01 Data Engineering/ }).click();
  await page.goBack();
  await expect(node).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Follow the data" }).click();
  for (const title of [
    "Source",
    "Validation",
    "Transformation",
    "Modeling",
    "Metrics",
    "Decisions",
  ]) {
    await expect(page.locator("#model-inspector h3")).toHaveText(title);
    if (title !== "Decisions")
      await page.getByRole("button", { name: "Next step" }).click();
  }
  await page.getByRole("button", { name: "Finish tour" }).click();
  await expect(
    page.getByRole("button", { name: "Explore freely" }),
  ).toHaveAttribute("aria-pressed", "true");
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
    await page.getByRole("link", { name: /Back to model/ }).click();
    await expect(page).toHaveURL(/node=.+#model/);
    await expect(page.locator("#model-inspector h3")).toBeVisible();
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
    await page.goto("/?node=modeling#model");
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
  await expect(page.locator("#credentials a")).toHaveCount(3);
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
