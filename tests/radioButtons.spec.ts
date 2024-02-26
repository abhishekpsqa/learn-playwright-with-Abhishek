import { test, expect } from "@playwright/test";

test.beforeEach('navite to test url', async({page})=>{
    await page.goto("http://localhost:4200/");
    await page.getByRole("link", { name: "Forms" }).click();
    await page.getByRole("link", { name: "Form Layouts" }).click();
})

test("testing radio buttons", async ({ page }) => {
    const grid = page.locator("nb-card", { hasText: "Using the Grid" })
    await grid.getByLabel('Option 1').check({force: true})
    await grid.getByLabel('Option 2').check({force: true})
    const radioChecked = await grid.getByLabel('Option 2').isChecked()
    expect(radioChecked).toBeTruthy();
});
