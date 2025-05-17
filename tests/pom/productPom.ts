import { Locator, Page } from '@playwright/test';

export default class productPom {

    private sizeType: string;
    private colorType: string;
    private addToCartButton: Locator;
    private quantity: Locator;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        this.colorType = "(//ul[contains(@class,'variant-option-list')])[1]//a[text()='M']");
        this.sizeType = "(//ul[contains(@class,'variant-option-list')])[2]//a[text()='$$']");
        this.quantity = this.page.locator("//input[@name='qty']")
        this.addToCartButton = this.page.locator("//button[@type='button']/span[text()='ADD TO CART']");    
    }

    private createSizeTypeLocator(size: string): Locator {
        let sizeTypeLocator : Locator = this.page.locator(this.sizeType.replace("$$", size));
        return sizeTypeLocator;
    }

    public async selectSizeType(size: string): Promise<productPom> {
       await this.createSizeTypeLocator(size).click();
        return this;
    }

    private createColorTypeLocator(color: string): Locator {
        let colorTypeLocator : Locator = this.page.locator(this.colorType.replace("$$", color));
        return colorTypeLocator;
    }

    public async selectColorType(color: string) : Promise<productPom> {
        await this.createColorTypeLocator(color).click();
        return this;
    }

    public async selectQuantity(quantity: string): Promise<productPom> {
        await this.quantity.fill(quantity);
        return this;
    }
    public async clickAddToCartButton(): Promise<productPom> {
        await this.addToCartButton.click();
        return this;
    }
    public async addToCart(size: string, color: string, quantity: string): Promise<productPom> {
        await this.selectSizeType(size);
        await this.selectColorType(color);
        await this.selectQuantity(quantity);
        await this.clickAddToCartButton();
        return this;
    }


}