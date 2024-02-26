import { test, expect } from "@playwright/test";

test.beforeEach("navite to test url", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByRole("link", { name: "Forms" }).click();
  await page.getByRole("link", { name: "Form Layouts" }).click();
});

test("testing checkboxes", async ({ page }) => {
  const grid = page.locator("nb-card", { hasText: "Basic form" });
  await grid.getByRole("checkbox", { name: "Check me out" }).check({ force: true });
  await grid.getByRole("checkbox", { name: "Check me out" }).uncheck({ force: true });
});

test("select multiple checkboxes", async ({ page }) => {
  await page.getByRole("link", { name: "Modal" }).click();
  await page.getByRole("link", { name: "Toastr" }).click();
  const allCheckboxes = await page.getByRole('checkbox').all();
  for (const checkbox of allCheckboxes) {
    await checkbox.check({force: true});
  }
});
