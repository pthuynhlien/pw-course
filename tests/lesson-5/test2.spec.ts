import { test } from '@playwright/test';

test('Test 2', async ({ page }) => {
  await test.step("Open page", async () => {
    await page.goto('https://material.playwrightvn.com/');
  })

  await test.step("Click on Bài học 2: Product page", async () => {
    await page.locator("//a[contains(text(),'Bài học 2: Product page')]").click();
  })

  await test.step("Add Product 1: 2 items", async () => {
     await page.locator("//button[@data-product-id = '1']").click();
     await page.locator("//button[@data-product-id = '1']").click();
  })

  await test.step("Add Product 2: 3 items", async () => {
    await page.locator("//button[@data-product-id = '2']").click();
    await page.locator("//button[@data-product-id = '2']").click();
    await page.locator("//button[@data-product-id = '2']").click();
  })

  await test.step("Add Product 3: 1 item", async () => {
    await page.locator("//button[@data-product-id = '3']").click();
  })

});