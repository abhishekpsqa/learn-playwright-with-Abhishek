import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
  // Set timeout for this hook.
  test.setTimeout(60000);
});

test.beforeEach(async ({ page }, testInfo) => {
  await page.goto("http://uitestingplayground.com/ajax");
  await page.getByText("Button Triggering AJAX Request").click();
  testInfo.setTimeout(testInfo.timeout + 30000);
});

test("click on green button", async ({ page }) => {
  test.setTimeout(2000);
  const successMessage = page.getByText("Data loaded with AJAX get request.");
  await successMessage.click();
});

test("ajax test", async ({ page }) => {
  test.setTimeout(60000);
  const successMessage = page.getByText("Data loaded with AJAX get request.");
  await successMessage.waitFor({ state: "attached" });
  //await successMessage.waitFor({timeout:20000});
  //await page.waitForTimeout(20000);
  const greenText = await successMessage.allTextContents();
  expect(greenText).toContain("Data loaded with AJAX get request.");
});
-test("ajax test with timeout", async ({ page }) => {
  await page.locator(".bg-success").waitFor({ timeout: 20000 });
  const successMessage = page.getByText("Data loaded with AJAX get request.");
  await expect(successMessage).toHaveText("Data loaded with AJAX get request.");
});
