const { test, expect } = require('@playwright/test');
 
test.only('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const homeText = "'Home | Search'";
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   let title = await page.locator('#sidebar').getByText();///.toHaveText(homeText);
   console.log(title);
   // await page.locator('#sidebar').toHaveText(homeText);
   // const titles = await page.locator(".card-body b").allTextContents();
   // console.log(titles); 
 
})