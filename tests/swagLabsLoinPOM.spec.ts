import { test, Page, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/loginPage";
import { HomePage } from "../page-objects/homePage";

test.describe("sauceDemo tests", async () => {
  test.beforeEach("login to sauceDemo", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.waitForLoadState();
    const loginPage = new LoginPage(page);
    await loginPage.doLogin("standard_user", "secret_sauce");
    expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
  });

  test("add to cart", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.addToCart();
    await expect(homePage.cartItems).toHaveText("1");
  });

  test("remove from cart", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.addToCart();
    await expect(homePage.cartItems).toHaveText("1");
    await homePage.removeFromCart();
    await expect(homePage.cartItems).not.toBeAttached();
  });
});
