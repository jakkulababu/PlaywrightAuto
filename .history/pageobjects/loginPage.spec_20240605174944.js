class LoginPage {

  constructor(page) {
    this.page = page;
    this.userName = page.locator("#userEmail");
    this.password = page.locator("#userPassword");
    this.signInButton = page.locator("[value='Login']");
  }
  async goTo(){
    await this.page.goTo("https://rahulshettyacademy.com/client");
  }
}
