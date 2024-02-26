import { test, expect } from "@playwright/test";

test("testing UI elements", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByRole("link", { name: "Forms" }).click(); //default time out is 30 seconds
  await page.getByRole("link", { name: "Form Layouts" }).click();
  const emailField = page.locator("nb-card", { hasText: "Using the Grid" }).getByRole("textbox", { name: "Email" });
  await emailField.fill("test@test.com");
  // -- to clear message
  await emailField.clear();
  //for slow typing use pressSequentially method and delay 500 ms
  await emailField.pressSequentially('test@test.com');
  //extract the types value 
  const typedValue = await emailField.inputValue();
  //generic location
  expect(typedValue).toEqual('test@test.com');
  //locator assertion
  await expect(emailField).toHaveValue('test@test.com');
});
