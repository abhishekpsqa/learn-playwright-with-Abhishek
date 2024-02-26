import {test, expect} from "@playwright/test";
import exp from "constants";


test.beforeEach("Login to SwagLabs", async ({page}) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByRole("textbox",{name:"Username"}).fill("standard_user")
  await page.getByRole("textbox", {name:"Password"}).fill("secret_sauce");
  await page.getByRole("button",{name:"Login"}).click();
  //await page.waitForURL('https://www.saucedemo.com/inventory.html');
  expect(await page.title()).toBe("Swag Labs");
});

test("test hamburger menu", async({page})=>{
    await page.locator("#react-burger-menu-btn").click();
    const allText = await page.locator(".bm-item").allTextContents();
    expect(allText).toEqual(['All Items', 'About', 'Logout', 'Reset App State']);
});

test("add to the cart", async({page})=>{
  const addToCartButton = page.getByText("Add to Cart");
  if(expect(addToCartButton.nth(-1).isVisible())){
    await addToCartButton.nth(1).click();
    await addToCartButton.nth(-1).click();
    const cartItems = await page.locator(".shopping_cart_badge").textContent();
    if(cartItems!==null){
      expect(parseInt(cartItems)).toBe(2);
    }
    return
  }
  return;
});

test("remove from the cart", async({page})=>{
  const addToCartButton = page.getByText("Add to Cart");
  if(expect(addToCartButton.nth(-1).isVisible())){
    await addToCartButton.nth(1).click();
    await addToCartButton.nth(-1).click();
    const cartItems = await page.locator(".shopping_cart_badge").textContent();
    if(cartItems!==null){
      expect(parseInt(cartItems)).toBe(2);
    }
    else{
      throw new Error("Cart is empty after adding items");
    }
    const removeButton = page.getByText("Remove");
    if(expect(removeButton.nth(-1).isVisible())){
      await removeButton.nth(-1).click();
      const cartItems = await page.locator(".shopping_cart_badge").textContent();
      if(cartItems!==null){
        expect(parseInt(cartItems)).toBe(1);
      }
    }
  }
  else{
    return;
  }

  
});