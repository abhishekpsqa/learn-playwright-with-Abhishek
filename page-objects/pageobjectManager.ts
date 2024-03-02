import {test as base} from "@playwright/test";
import { HamburgerMenu } from "./hamBurgerPage";
import { HomePage } from "./homePage";
import { LoginPage } from "./loginPage";

type pageObjects = {
    hamBurgerMenu: HamburgerMenu;
    homePage:HomePage;
    loginPage: LoginPage
}


export const test = base.extend<pageObjects>({
    hamBurgerMenu: async({page}, use)=>{
        const hamBurgerMenu = new HamburgerMenu(page);
        use(hamBurgerMenu);
    },

    homePage: async({page}, use)=>{
        const homePage = new HomePage(page);
        use(homePage);
    },

    loginPage: async({page}, use)=>{
        const loginPage = new LoginPage(page);
        use(loginPage);
    }
})

export const expect = test.expect;