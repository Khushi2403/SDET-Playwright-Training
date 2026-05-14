1. What is Playwright?
🔹Playwright is a Node.js framework used for:
🔹UI Automation
🔹Cross-browser testing
🔹Fast and reliable E2E tests

2. Project Initialization
npm init playwright@latest

3. Run tests:
npx playwright test

4. Basic Test Structure
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});

5. page.goto():Used to navigate to a URL.

await page.goto('https://www.saucedemo.com/');

6. Locators in Playwright:getByRole (Recommended)

🔹await page.getByRole('link', { name: 'Login' }).click();
getByText

🔹await page.getByText('Contact Us').click();
locator (XPath/CSS)

🔹const heading = page.locator('//h1');

7. Assertions with expect
🔹await expect(page).toHaveTitle('Swag Labs');
🔹await expect(page).toHaveURL(/inventory/);
🔹await expect(page.getByText('Products')).toBeVisible();

8. Click Actions
🔹await page.getByRole('button', { name: 'Add to cart' }).click();

9.  Handling Multiple Elements with first() / nth()
🔹await page.getByText(/Contact Us/i).first().click();
🔹await page.getByRole('link').nth(1).click();

10. Auto Waiting Feature

🔹Playwright automatically waits for elements:
await page.getByText('Submit').click(); // waits automatically

11. Cross Browser Testing
🔹By default tests run on:

Chromium
Firefox
WebKit


12. Test Folder Structure

🔹All test files are placed inside:

tests/
   example.spec.js
   agrasen.spec.js

🔹Run specific file:
npx playwright test tests/agrasen.spec.js


🔹Example Real Test (SauceDemo)
import { test, expect } from '@playwright/test';

test('login and verify products page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Products')).toBeVisible();
});

