import { test, expect } from "@playwright/test";

test.beforeEach('navite to test url', async({page})=>{
    await page.goto("http://localhost:4200/");
    await page.getByRole("link", { name: "Forms" }).click();
    await page.getByRole("link", { name: "Form Layouts" }).click();
})

test("testing dropdown", async ({ page }) => {
    await page.locator('nb-select button').click()
    //return list of drop down
    const options = page.locator('nb-option-list nb-option')
    await expect(options).toHaveText(["Light", "Dark", "Cosmic", "Corporate"])
    //select specific value
    await options.filter({hasText:'Cosmic'}).click();

});
