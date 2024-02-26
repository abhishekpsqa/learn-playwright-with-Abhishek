import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  private username: Locator;
  private password: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = this.page.locator('input[placeholder="Username"]');
    this.password = this.page.locator('input[placeholder="Password"]');
    this.loginButton = this.page.locator('input[type="submit"]');
  }

  async doLogin(username:string, password:string){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  } 

}
