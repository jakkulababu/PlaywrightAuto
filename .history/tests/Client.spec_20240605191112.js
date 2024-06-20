const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");

test.only("Login into Client portal and validate Home content", async ({ page }) => {

   const loginPage = new LoginPage(page);
   // await page.goto("https://rahulshettyacademy.com/client");
   
   //Test Data
   const username = "anshika@gmail.com";
   const password = "Iamking@000";
   const homeText = "HOME";
   loginPage.goTo();
   loginPage.validLogin(username,password);
   await loginPage.validateHomeText(homeText);
   
//   await page.waitForLoadState("networkidle");

//   await expect(page.getByRole("button", { name: "HOME" })).toHaveText(homeText);
//   const title = await page.getByRole("button", { name: "HOME" }).textContent();
//   console.log(title);
});
