class LoginPage {

  constructor(page) {
    this.page = page;
    this.userName = page.locator("#userEmail");
    this.passworD = page.locator("#userPassword");
    this.signInButton = page.locator("[value='Login']");
  }
  async goTo(){
    await this.page.goTo("https://rahulshettyacademy.com/client");
  }

  async validLogin(username, password){
    await this.userName.type(username);
    await this.passworD.type(password);
    await this.signInButton.click();
  }
}
module.exports ={LoginPage};
