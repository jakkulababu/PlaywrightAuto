const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");

test.only("@Web Client App login", async ({ page }) => {

   const loginPage = new LoginPage(page);

  //Test Data
  const username = "anshika@gmail.com";
  const password = "Iamking@000";
  const homeText = "HOME";

  loginPage.goTo();
  loginPage.validLogin(username, password);

//   await page.waitForLoadState("networkidle");

  await expect(page.getByRole("button", { name: "HOME" })).toHaveText(homeText);
  const title = await page.getByRole("button", { name: "HOME" }).textContent();
  console.log(title);
});
