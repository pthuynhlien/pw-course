import { test } from '@playwright/test';

test('Test 1', async ({ page }) => {
  await test.step("Open page", async () => {
    await page.goto('https://material.playwrightvn.com/');
  })

  await test.step("Click on Bài học 1: Register Page", async () => {
    await page.locator("//a[contains(text(),'Bài học 1: Register Page (có đủ các element)')]").click();
  })

  await test.step("Input information into fields", async () => {
    await page.locator("//input[@id='username']").fill("K15-Class");
    await page.locator("//input[@id='email']").fill("k15test@gmail.com");
    await page.locator("//input[@id='female']").check();
    await page.locator("//input[@id='reading']").check(); 
    await page.locator("//option[@value='technology']").click();
    await page.locator("//select[@id='country']").selectOption({
      value: "canada"
    });
    await page.locator("//input[@id='profile']").setInputFiles("tests/data/file_example_PNG_500kB.png");
    await page.locator("//input[@id='dob']").fill("1995-01-01");
    await page.locator("//textarea[@id='bio']").fill("Test");
    await page.locator("//div[@class='tooltip']").hover();
    await page.locator("//input[@id='newsletter']").check();
  })

  await test.step("Click on Register button", async () => {
    await page.locator("//button[normalize-space()='Register']").click();
  })
});