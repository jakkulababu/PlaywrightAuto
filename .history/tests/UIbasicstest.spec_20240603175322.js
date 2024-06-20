const { test, expect } = require("@playwright/test");
const { text } = require("stream/consumers");
// const { expect } = require("../playwright.config");

test.only("Login to learning portal and validating home content", async ({
  browser,
  page,
}) => {
  //   Chrome - plug-in / cookies

  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const username = page.locator("#username");
  const password = page.locator("#password");
  const loginButton = page.locator("#signInBtn");
  const listOfPhones = await page.locator(".card-body a");

  await username.fill("rahulshettyacademy");
  await password.fill("learning");
  await loginButton.click();

  // await expect(listOfPhones.first()).toHaveText('iphone X');
  // await expect(listOfPhones.nth(1)).toHaveText('Samsung Note 8');

  // console.log(await listOfPhones.first().textContent());
  // console.log(await listOfPhones.nth(1).textContent());

  // await page.waitForLoadState('networkidle');
  await await page.locator(".card-body a").first().waitFor();
  const allTypePhone = await listOfPhones.allTextContents();

  console.log(allTypePhone);
  console.log(await listOfPhones.count());
});

// test("Page playwright test", async ({ browser, page }) => {
//   await page.goto("https://www.google.co.in");
//   console.log(await page.title());
//   await expect(page).toHaveTitle("Google");
// });

test("UI Control test", async ({ browser, page }) => {
  //   Chrome - plug-in / cookies

  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const username = page.locator("#username");
  const password = page.locator("#password");
  // const loginButton = page.locator("#signInBtn");
  const dropDown = await page.locator("select.form-control");
  await dropDown.selectOption("Consultant");

  const radioOption = await page.locator(".radiotextsty");
  radioOption.last().click();

  await page.locator("#okayBtn").click();
  expect(await radioOption.last()).toBeChecked();

  await page.locator("#terms").click();
  expect(await page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();

  await page.pause();

  // await username.fill("rahulshettyacademy");
  // await password.fill("learning");
});

test("UI new page test", async ({ browser }) => {
  //   Chrome - plug-in / cookies

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator("[href*='documents-request']");
  const username = page.locator("#username");
  
  const [newPage] =  await Promise.all([
    
    context.waitForEvent('page'),
    documentLink.click(),
    // await page.locator("[href*='documents-request']").click(),

  ])
  
  const text = await newPage.locator(".im-para.red").textContent();
  const arrrText = text.split('@')
  const domain =arrrText[1].split(" ")[0];
  console.log(domain);
  await page.pause();
  await page.locator("#username").type(domain);
  await page.pause();
  console.log( await page.locator("#username").textContent());
  
});
