const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
 
test.only('@Web Client App login', async ({ page }) => {
   
   //Locators


   //Test Data
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const homeText = "HOME";

   
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   await expect(page.getByRole('button', { name: 'HOME' })).toHaveText(homeText);
   const title = await page.getByRole('button', { name: 'HOME' }).textContent();
   console.log(title);
   // await page.locator('#sidebar').toHaveText(homeText);
   // const titles = await page.locator(".card-body b").allTextContents();
   // console.log(titles); 
 
})