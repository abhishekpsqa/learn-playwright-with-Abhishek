import { test, expect } from "../page-objects/pageobjectManager";


test.describe("sauceDemo tests", () => {
  test.beforeEach("login to sauceDemo", async ({ page, loginPage }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.waitForLoadState();
    await loginPage.doLogin("standard_user", "secret_sauce");
    expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
  });

  test("add to cart", async ({ homePage }) => {
    await homePage.addToCart();
    await expect(homePage.cartItems).toHaveText("1");
  });

  test("remove from cart", async ({homePage }) => {
    await homePage.addToCart();
    await expect(homePage.cartItems).toHaveText("1");
    await homePage.removeFromCart();
    await expect(homePage.cartItems).not.toBeAttached();
  });
});
