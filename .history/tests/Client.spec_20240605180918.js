const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");

test.only("@Web Client App login", async ({ page }) => {
  //Locators

  //Test Data
  const username = "anshika@gmail.com";
  const password = "Iamking@000";
  const productName = "zara coat 3";
  const homeText = "HOME";

  const loginPage = new LoginPage();
  // const products = page.locator(".card-body");
  loginPage.goTo();
  loginPage.validLogin(username, password);

  await page.waitForLoadState("networkidle");
  await expect(page.getByRole("button", { name: "HOME" })).toHaveText(homeText);
  const title = await page.getByRole("button", { name: "HOME" }).textContent();
  console.log(title);
});
