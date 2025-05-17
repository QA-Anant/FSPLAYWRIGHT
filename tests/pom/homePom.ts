import { Page, Locator } from '@playwright/test';

export default class homePom {

    private productLink: Locator;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        this.productLink = this.page.locator("//div[contains(@class,'product-list-name')]//a[contains(@href,'nike-react-infinity-run-flyknit-171')]");
    }

    public async productLinkClick() {
        await this.productLink.click();
    }
}