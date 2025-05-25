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

    const filePath = Path.join(process.cwd() + "/tests/testdata/e2e.json");

    const testdata = readJsonDataForTestCase(filePath, "TC1");

    const loginData : LoginDataLayer =  testdata["login"];

    const loginInputDaoInstance: LoginInputDao = new LoginInputDao(loginData);

    // Json --> JS Object --> LoginDataLayer for compliance check --> DAO layer - InputDAO 

    let homePom : HomePom = await loginPom.submitCredentials(loginInputDaoInstance);

    await homePom.productLinkClick();

})