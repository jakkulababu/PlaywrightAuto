const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = page.locator("#userEmail");
    this.passworLocator = page.locator("#userPassword");
    this.signInButton = page.locator("[value='Login']");
    this.homeText = page.getByRole("button", { name: "HOME" });
    this.orders = page.getByRole("button", { name: "ORDERS" });
  }
  async goTo() {
    await this.page.goto("https://rahulshettyacademy.com/client");
  }

  async validLogin(username, password) {
    await this.userName.type(username);
    await this.passworLocator.type(password);
    await this.signInButton.click();
  }
  async validateHomeText(hText) {
    try {
      await expect(this.homeText).toHaveText(hText);
    } catch (error) {
      if (error instanceof playwright.errors.TimeoutError)
        console.log("Timeout!");
    }
  }
}
module.exports = { LoginPage };
