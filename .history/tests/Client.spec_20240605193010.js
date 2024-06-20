const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");

test.only("Login into Client portal and validate Home content", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);

  //Test Data
  const username = "anshika@gmail.com";
  const password = "Iamking@000";
  const homeText = "HOME";
  const orders = "ORDERS";
  loginPage.goTo();
  loginPage.validLogin(username, password);
  await loginPage.validateHomeText(homeText, orders);

});

//   const title = await page.getByRole("button", { name: "HOME" }).textContent();
//   console.log(title);