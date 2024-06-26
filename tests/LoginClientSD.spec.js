const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");

test.only("Login into Client portal and validate Home content", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);

  //Test Data
  const username = "jakkulababu@gmail.com";
  const password = "Babu@12345";
  const homeText = "HOMETEST";
  const orders = "ORDERS";
  loginPage.goTo();
  loginPage.validLogin(username, password);
  await loginPage.validateHomeText(homeText, orders);
});

//   const title = await page.getByRole("button", { name: "HOME" }).textContent();
//   console.log(title);
