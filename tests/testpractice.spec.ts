import {expect, test} from '@playwright/test';
import { isContext } from 'vm';

test.skip('has title', async ({ page }) => {

  let p1 = page.goto('https://playwright.dev/');
  
  let p2 = page.goto('https://youtube.com/');

});

test.skip('tc7', async ({ context }) => {

    // registering a listener for the page event

    context.on('page', async (p) => {
        await p.goto('https://playwright.dev/');
        console.log('Page opened:', p.url());
    });
    
    await context.newPage();

  //   // Assert the new page is created
  // expect(p).toBeTruthy();
    
});

test.skip('tc8', async({ page}) => {
    // Create a new page
    const newPage = await page.context().newPage();

    // Navigate to a URL
    await page.goto('https://secure-qa2.smartdrivesystems.com/login');

    // Assert the new page is created
    expect(newPage).toBeTruthy();

    // // Close the new page
    // await newPage.close();

})