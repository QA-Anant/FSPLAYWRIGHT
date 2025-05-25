import { Locator, Page } from "@playwright/test";
import HomePOM from "./homePom";
import LoginInputDao from "../dao/inputDao/loginInputDao";

export default class LoginPom {

    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.locator('input[name="email"]');
        this.passwordInput = this.page.locator('input[name="password"]');
        this.loginButton = this.page.locator('button[type="submit"]');
    }

    // Method to navigate to the page
    async navigateTo() {
       await this.page.goto("account/login");
    }

    // Method to fill in the username
    async fillUsername(username: string) : Promise<LoginPom> {
        await this.usernameInput.waitFor({ state: "visible" });
        await this.usernameInput.hover();
        await this.usernameInput.click({ force: true });
        await this.usernameInput.fill(username);
        return this;
    }
    // Method to fill in the password
    async fillPassword(password: string): Promise<LoginPom> {
        await this.passwordInput.fill(password);
        return this;
    }
    // Method to click the login button
    async clickLoginButton() {
        await this.loginButton.click();
        return new HomePOM(this.page);
    }
    // Method to perform the login action , method that is not designed to use homepom
    // async login(username: string, password: string) {
    //     await this.fillUsername(username);
    //     await this.fillPassword(password);
    //     await this.clickLoginButton();
    // }

    // submitcredentials

    async submitCredentials(LoginInputDao: LoginInputDao) : Promise<HomePOM> {
        await this.fillUsername(LoginInputDao.getUsername());
        await this.fillPassword(LoginInputDao.getPassword());
        return await this.clickLoginButton();
    }


}