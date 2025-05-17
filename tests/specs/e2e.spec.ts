import test from "@playwright/test";
import LoginPom from "../pom/loginPom";
import HomePom from "../pom/homePom";

test("Login Test", async ({ page }) => {

    let loginPom = new LoginPom(page);

    await loginPom.navigateTo();
    //let homePom : HomePom = await loginPom.submitCredentials("jain.anant4567@gmail.com", "test@123");
    await loginPom.submitCredentials("jain.anant4567@gmail.com", "test@123");
    //await homePom.productLinkClick();

  
  
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