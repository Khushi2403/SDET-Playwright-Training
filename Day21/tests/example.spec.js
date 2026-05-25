// @ts-check
import { test, expect } from '@playwright/test';
import { log } from 'node:console';

test.describe('jio mart test', () => {
  test.use({ storageState: 'auth.json' });
  test('search for fruits', async ({ page }) => {
    await page.goto('https://www.jiomart.com/sections/low-price-mumbai');

    // Click on the search input and type "fruits"
     const input = page.locator('input[type="text"]').first();
    await input.click();
    await input.fill('fruits');
    await input.press('Enter');
     await expect(page).toHaveURL(/fruits/i);
  });

  test('profile', async ({ page }) => {
    await page.goto('https://www.jiomart.com/profile');

    const profileName = page.getByTestId("JDSText-text").nth(0);
    console.log(await profileName.textContent());
    await expect(profileName).toHaveText("khushi agrawal");
  });
});