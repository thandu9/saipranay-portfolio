import { test, expect } from "@playwright/test";
test("signal opening completes, stays dismissed and skips on input", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByTestId("signal-opening")).toHaveCount(0, {
    timeout: 3000,
  });
  await expect(page.locator("#hero-title")).toBeVisible();
  await page.reload();
  await expect(page.getByTestId("signal-opening")).not.toBeVisible();
  await page.evaluate(() => sessionStorage.removeItem("signal-seen"));
  await page.reload();
  await page.keyboard.press("Escape");
  await expect(page.getByTestId("signal-opening")).toHaveCount(0);
  expect(
    await page.evaluate(() => getComputedStyle(document.body).overflow),
  ).not.toBe("hidden");
});
test("reduced motion, ordered credentials and phone/email destinations", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByTestId("signal-opening")).not.toBeVisible();
  const titles = await page.locator("#credentials h3").allTextContents();
  expect(titles).toEqual([
    "Microsoft Certified Fabric Analytics Engineer Associate (DP-600)",
    "VDOT Recognition Award (2025)",
    "SQL Advanced",
    "Generative AI",
  ]);
  await expect(
    page.locator('#contact a[href="tel:+12034557670"]'),
  ).toBeVisible();
  await expect(
    page.locator('#contact a[href="mailto:thandusaipranay@gmail.com"]'),
  ).toHaveCount(2);
  expect(await page.locator("main").innerText()).not.toContain(
    "not independently verified",
  );
  expect(await page.locator("main").innerText()).not.toContain(
    "180+ data layers",
  );
});
test("journey and architecture support keyboard exploration", async ({
  page,
}) => {
  await page.goto("/#experience");
  const tabs = page
    .getByRole("tablist", { name: "Professional journey" })
    .getByRole("tab");
  await tabs.first().focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("#career-story h3")).toHaveText("ASTA CRS");
  await page.keyboard.press("End");
  await expect(page.locator("#career-story h3")).toHaveText("Techmart");
  await page.locator("#stage-0").focus();
  await page.keyboard.press("End");
  await expect(page.locator("#stage-detail h3")).toHaveText(
    "Business Decisions",
  );
  await page.keyboard.press("Home");
  await expect(page.locator("#stage-detail h3")).toHaveText("Sources");
});
test("essential identity and contact remain usable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000/");
  await expect(page.locator("#hero-title")).toBeVisible();
  await expect(
    page.locator('#contact a[href="tel:+12034557670"]'),
  ).toBeVisible();
  await expect(page.locator("#story-1 a")).toHaveAttribute(
    "href",
    "/work/geospatial-pipelines",
  );
  await context.close();
});
