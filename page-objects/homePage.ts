import {Page, Locator, expect} from '@playwright/test'

export class HomePage{
    readonly page:Page;
    private addToCartButton:Locator;
    public cartItems:Locator;
    private removeButton:Locator;

    constructor(page:Page){
        this.page = page;
        this.addToCartButton = this.page.getByText("Add to Cart");
        this.removeButton = this.page.getByText("Remove");
        this.cartItems = this.page.locator(".shopping_cart_badge");
    }

    async addToCart(){
        console.log(expect(await this.addToCartButton.nth(-1).isVisible()))
        if(expect(await this.addToCartButton.nth(-1).isVisible())){
            await this.addToCartButton.nth(-1).click();
        }
        else{
            throw new Error("Add to cart button is not visible");
        }
        
    }
    async removeFromCart(){
        if(expect(await this.removeButton.nth(-1).isVisible())){
            await this.removeButton.nth(-1).click();
        }
        else{
            throw new Error("Remove button is not visible");
        }
        
    }

}