import { test, Page } from "@playwright/test";

test.use({ navigationTimeout: 40000 }); // Set default navigation timeout for all tests in the spec file

test.skip("tc1", async ({ page }) => {
   await page.goto('https://demo.evershop.io/account/login');

   let l1 = page.locator("input")

   let count = await l1.count();

   console.log("element count on the page :",count);

for(const ele of await l1.all())
{
    //await ele.fill("test");
}

await l1.nth(0).fill("jain.anant4567@gmail.com");
await l1.nth(1).fill("test@123");

await l1.first().fill("jain.anant4567@gmail.com");
await l1.last().fill("test@123");

await page.pause();

});

test.skip("tc2", async ({ page }) => {

// Navigate to the W3Schools checkbox example page
  await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');

  // Locate the first checkbox
  const checkbox1 = page.locator('input[type="checkbox"]').nth(0);

  // Click the checkbox to check it
  await checkbox1.check();
  console.log('Checkbox 1 checked:', await checkbox1.isChecked());

  // Uncheck the checkbox
  await checkbox1.uncheck();
  console.log('Checkbox 1 unchecked:', await checkbox1.isChecked());

})

// Day 15 : Waiting strategies and Timeouts

test.skip ('tc_day15_1', async ({ page }) => {
  test.setTimeout(40000);
  await page.goto('https://demo.evershop.io/account/login', { timeout: 30000 }); // Set timeout for page navigation at the test level

  let l1 = page.locator("input[name='email']");
  await l1.fill("anant"); // auto-wait
});

test.skip("tc_day16_1", async({page})=>{

  await page.goto('https://demo.evershop.io/account/login', { timeout: 30000 }); // Set timeout for page navigation at the test level
  await page.locator("input[name='email']").fill("jain.anant4567@gmail.com"); // auto-wait
  await page.locator("input[name='password']").fill("test@123"); // auto-wait
  await page.locator("button[type='submit']").click(); // auto-wait

  let l1 = page.locator("//a/span[text()='Shop kids']")
  await l1.waitFor({state: "visible", timeout: 50000}); // auto-wait

  await page.goto('https://demo.evershop.io/checkout', { timeout: 30000 }); // Set timeout for page navigation at the test level


  await page.locator("//select[@id='address[country]']").selectOption({label: "India"}); // auto-wait
  //await page.pause();
})


test("tc_day16_2", async({page})=>{

  await page.goto('https://demo.evershop.io/account/login', { timeout: 30000 }); // Set timeout for page navigation at the test level
  await page.locator("input[name='email']").fill("jain.anant4567@gmail.com"); // auto-wait
  await page.locator("input[name='password']").fill("test@123"); // auto-wait
  await page.locator("button[type='submit']").click(); // auto-wait

  let l1 = page.locator("//a/span[text()='Shop kids']")
  await l1.waitFor({state: "visible", timeout: 50000}); // auto-wait

  await page.goto('https://demo.evershop.io/cart', { timeout: 30000 }); // Set timeout for page navigation at the test level

  let columncount = await page.locator("table thead tr td").count();
  console.log("column count is :", columncount);

  let columns = await page.locator("table thead tr td").all();

  let columnNames : string[] = [];

  for(const column of columns)
  {
    let columnName = await column.locator("span").innerText();
    columnNames.push(columnName);
  }

  columnNames.forEach((columnName) => {
    console.log("column name is :", columnName);
  })
  
  await page.pause();
})