import test from "@playwright/test";
import LoginPom from "../pom/loginPom";
import HomePom from "../pom/homePom";
import { readJsonDataForTestCase } from "../utils/fileUtil";
import * as Path from 'path';
import { LoginDataLayer } from "../dataControllerLayer/loginDataLayer";
import LoginInputDao from "../dao/inputDao/loginInputDao";

test("Login Test", async ({ page }) => {

    let loginPom = new LoginPom(page);

    await loginPom.navigateTo();

    const filePath = Path.join(process.cwd() + "/tests/testdata/testData.json");

    const testdata = readJsonDataForTestCase(filePath, "TC1");

    const loginData : LoginDataLayer =  testdata["login"];

    const loginInputDaoInstance: LoginInputDao = new LoginInputDao(loginData);

    // Json --> JS Object --> LoginDataLayer for compliance check --> DAO layer - InputDAO 

    await loginPom.submitCredentials(loginInputDaoInstance);

    // let homePom : HomePom = await loginPom.submitCredentials(loginInputDaoInstance);
    // await homePom.productLinkClick();

  
  
    //==========================================Rough code to test the login functionality=====================================
    //await (await (await(await loginPom.fillUsername("jain.anant4567@gmail.com")).fillPassword("test@123")).clickLoginButton());
    

    // await loginPom.fillPassword("test@123");
    // await loginPom.clickLoginButton();

    // await homePom.productLinkClick();
    

    // Fill in the email and password fields
    // await page.locator('input[name="email"]').fill("jain.anant4567@gmail.com");
    // await page.locator('input[name="password"]').fill("test@123"); 
    // // Click the login button
    // await page.locator('button[type="submit"]').click();

    // await page.locator("//div[contains(@class,'product-list-name')]//a[contains(@href,'nike-react-infinity-run-flyknit-171')]").click();
})