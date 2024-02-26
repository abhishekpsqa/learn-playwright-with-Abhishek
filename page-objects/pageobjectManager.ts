import {Page} from '@playwright/test';
import {HamburgerMenu} from './hamBurgerPage';
import {LoginPage} from './loginPage';
import { HomePage } from './homePage';

export class PageObjectManager{
    readonly page:Page;
    public hamburgerMenu:HamburgerMenu;
    public loginPage: LoginPage;
    public homePage: HomePage;

    constructor(page:Page){
        this.page = page;
        this.hamburgerMenu = new HamburgerMenu(this.page);
        this.loginPage = new LoginPage(this.page);
        this.homePage = new HomePage(this.page)
    }

    async getHomePage(){
        return this.homePage;
    }

    async getLoginPage(){
        return this.loginPage;
    }

    async getHamburgerMenu(){
        return this.hamburgerMenu;
    }
}