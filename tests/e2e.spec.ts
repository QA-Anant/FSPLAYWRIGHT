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

// test.skip("tc_day16_2", async ({ page }) => {
//   // Navigate to the login page
//   await page.goto('https://demo.evershop.io/account/login', { timeout: 30000 });

//   // Fill in login credentials and submit
//   await page.locator("input[name='email']").fill("jain.anant4567@gmail.com");
//   await page.locator("input[name='password']").fill("test@123");
//   await page.locator("button[type='submit']").click();

//   // Wait for the "Shop kids" link to be visible
//   const shopKidsLink = page.locator("a:has-text('Shop kids')");
//   await shopKidsLink.waitFor({ state: "visible" });

//   // Navigate to the cart page
//   await page.goto('https://demo.evershop.io/cart', { timeout: 30000 });

//   // Get column count and names
//   const columnCount = await page.locator("table thead tr th").count();
//   console.log("Column count is:", columnCount);

//   const columnNames: string[] = [];
//   for (let i = 0; i < columnCount; i++) {
//     const columnName = await page.locator(`table thead tr th:nth-child(${i + 1})`).innerText();
//     columnNames.push(columnName);
//   }

//   columnNames.forEach((columnName) => {
//     console.log("Column name is:", columnName);
//   });

//   // Get row count and data
//   const rowCount = await page.locator("table tbody tr").count();
//   console.log("Row count is:", rowCount);

//   const allRowData: string[][] = [];
//   for (let i = 0; i < rowCount; i++) {
//     const row = page.locator(`table tbody tr:nth-child(${i + 1})`);
//     const rowData: string[] = [];

//     // Extract data from each column in the row
//     const itemName = await row.locator("td:nth-child(1) .cart-item-info a").innerText();
//     rowData.push(itemName);

//     const salePrice = await row.locator("td:nth-child(2) .sale-price").innerText();
//     rowData.push(salePrice);

//     const quantity = await row.locator("td:nth-child(3) input").getAttribute("value") ?? "no data";
//     rowData.push(quantity);

//     allRowData.push(rowData);
//   }

//   allRowData.forEach((rowData) => {
//     console.log("Row data is:", rowData);
//   });
// });

test.skip("tc_day17_1_tabs", async({page})=>{

    await page.goto("https://selectorshub.com/xpath-practice-page/");
    await page.locator("//a[contains(@href,'testrigor')])[2]").click();

    let pages = page.context().pages();
    console.log("page count is:", pages.length);

    for(const p of pages)
    {
      let title = await p.title();
      console.log("page title is:", title);
      if(title.includes("Xpath")){
        await p.bringToFront();
        
      }
        await page.pause();
    }
})

test.skip("tc_day17_2_framelocator", async({page})=>{
   await page.goto("https://selectorshub.com/iframe-scenario/");
   const frame1 = page.frameLocator("//iframe[@id='pact1']");
   await frame1.locator("//input[@placeholder='First Crush']").fill("test");
})

test.skip("tc_day18_1_frame",async({page})=>{

  await page.goto("https://selectorshub.com/iframe-scenario/");

  let frame1 = page.frame({url : "https://selectorshub.com/iframe-and-nested-iframe/"});
  //let frame1 = page.frame("//iframe[@id='pact1']");

  if(frame1)
  {
    await frame1.locator("//input[@placeholder='First Crush']").fill("test");
  }

  await page.pause();

})

test.skip("tc_day18_2_nestedFrame",async({page})=>{
  await page.goto("https://selectorshub.com/iframe-scenario/");


  let frame1 = page.frame({name: "pact1"});

  if(frame1)
  {
    
    await frame1.locator("//input[@placeholder='First Crush']").fill("test");

  }
  
  await page.pause();
})

test.skip("tc_day18_3_childFrame",async({page})=>{
  await page.goto("https://selectorshub.com/iframe-scenario/");

  let frame1 = page.frame({name: "pact1"});

  if(frame1)
  {
    //let frame2 = frame1.frameLocator("iframe[id='pact']");
    await frame1.locator("//input[@placeholder='First Crush']").fill("test");
  }

  let childFrame = frame1.childFrames();
  console.log("child frame count is:", childFrame.length);
  await page.pause();
})

test.skip("tc_day18_4_Framemethods",async({page})=>{

  await page.goto("https://selectorshub.com/iframe-scenario/");
  
  let frame1 = page.frame({name: "pact1"});

  if(frame1)
  {
    
    await frame1.locator("//input[@placeholder='First Crush']").fill("test");
  

  let childFrame = frame1.childFrames();
  console.log("child frame count is:", childFrame.length);
  console.log("child frame url is:", childFrame[0].url());
  console.log("child frame name is:", childFrame[0].name());

  let parentFrame = frame1.parentFrame();
  console.log("parent frame url is:", parentFrame?.url());

  }
  //await page.pause();


})


test.skip("tc_day18_5_framesMethods",async({page})=>{

  await page.goto("https://selectorshub.com/iframe-scenario/");

  // Get all frames in the page context
  
  let frame1 = page.frames();
  console.log("frame count is:", frame1.length);


  if(frame1)
  {
    
    await frame1[3].locator("input[id='glaf']").fill("test");

  }
  await page.pause();

})

test.skip("tc_day18_6_KeyBoardevents",async({page})=>{
  await page.goto("https://demo.evershop.io/account/login");

  //await page.locator("input[name='email']").fill("jain.anant4567@gmail.com");

  await page.locator("input[name='email']").click({button: "left"});
  await page.keyboard.type("jain.anant4567@gmail.com")

  await page.locator(".login-form-inner h1").dblclick();
  await page.keyboard.press("Control+c");

  await page.locator("input[name='email']").click();
  await page.keyboard.press("Control+v");

  await page.pause();

  
})

test.skip("tc_day18_7_mouseEvents",async({page})=>{

  await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

  let f1 =  page.frameLocator("div[rel-title='Photo Manager'] iframe");

  let src = f1.locator("#gallery  li").nth(0);
  let dest = f1.locator("#trash");
  await src.hover();
  await page.mouse.down();  
  await dest.hover();
  await page.mouse.up();

  // let src = await page.locator("#gallery  li").nth(0);
  // let dest = await page.locator("#trash");

  // await src.hover();
  // await page.mouse.down();
  // await dest.hover();
  // await page.mouse.up();
  await page.pause();


})

test.skip("tc_day19_1_javascriptexecution",async({page})=>{
  await page.goto("https://demo.evershop.io/account/login");

  await page.evaluate(
    // (arg1) => {document.querySelector("input[name='email']").value=arg1;},
    // 'jain.anant4567@gmail.com')
    
    // (arg) => {document.querySelector("input[name='email']").value=arg[0];},
    // ['jain.anant4567@gmail.com','test@123'])

     (arg) => {document.querySelector("input[name='email']").value=arg.name;},
     {name :'jain.anant4567@gmail.com', password : 'test@123'})

  await page.pause();  
  })


  test("tc_day19_2_javascriptexecution",async({page})=>{
    await page.goto("https://demo.evershop.io/account/login");
  
      let email = page.locator("input[name='email']");

      await email.evaluate(
        (ele,arg) => {
            ele.value=arg;
        },
        'jain.anant4567@gmail.com');


    await page.pause();  
    })
  

test.skip("tc_day19_3_shadowDom",async({page})=>{

  await page.goto("https://selectorshub.com/xpath-practice-page/");

 // Approach 1

  //await page.locator("input[id='kills"]").fill("test");

  // Approach 2

  // await page.evaluate(() => {
  //   let shadowHost = document.querySelector("div#userName");
  //   let shadowRoot = shadowHost?.shadowRoot;
    
  //   if (shadowRoot) {
  //     let shadowInput = shadowRoot.querySelector("input[id='kils']");
  //     if (shadowInput) {
  //       shadowInput.value = "test";
  //     }
  //   }
  
  // })

  // Approach 3   >>> piercing

  await page.locator("div#userName >>> input[id='kils']").fill("test");


  await page.pause();

  // Exercise for you 
  // Sh -> Sr -> Sh -> Sr -> Element  
})


test("tc_day19_4_scrolling",async({page})=>{

  await page.goto("https://demo.evershop.io/account/login");
  await page.locator("input[name='email']").fill("jain.anant4567@gmail.com");
  await page.locator("input[name='password']").fill("test@123");
  await page.locator("button[type='submit']").click();
  
  // Scroll using page.locator strategy

  // Scroll using spacebar to the bottom of the page
  //await page.keyboard.press("Space");

  // Scroll using mouse wheel
  // await page.mouse.wheel(0, 5000); // Scroll down by 1000 pixels

  // 

  // Scroll using javascript execution

  await page.evaluate(() => {
    window.scrollBy(0, 5000); // Scroll down by 1000 pixels
  });
  
  await page.pause();

})

