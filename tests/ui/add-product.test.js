const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
  await page.goto('https://renettab02-exam.onrender.com/Add-product');
  const form = await page.$('form');
  expect(form).toBeTruthy();
});
