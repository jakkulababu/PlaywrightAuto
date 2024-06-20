class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = page.locator("#userEmail");
    this.passworLocator = page.locator("#userPassword");
    this.signInButton = page.locator("[value='Login']");
  }
  async goToPortal() {
    await this.page.goTo("https://rahulshettyacademy.com/client");
  }

  async validLogin(username, password) {
    await this.userName.type(username);
    await this.passworLocator.type(password);
    await this.signInButton.click();
  }
}
module.exports = { LoginPage };
