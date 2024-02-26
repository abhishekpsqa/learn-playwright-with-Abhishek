import {Locator, Page} from "@playwright/test";

export class HamburgerMenu{
    readonly page:Page;
    private hamburgerButton:Locator;
    
    constructor(page:Page){
        this.page = page;
        this.hamburgerButton = page.locator("#react-burger-menu-btn");
    }
    async open(){
        await this.hamburgerButton.click();
    }
}