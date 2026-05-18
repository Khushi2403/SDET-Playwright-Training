1) Test Annotations in Playwright

Definition : Annotations modify how a test behaves (run, skip, expected fail, timeout behavior) without changing the test logic.

🔹 test.skip()-Skips the test completely. It will not run.

test.skip('Skip this test', async ({ page }) => {
  await page.goto('https://example.com');
});

🔹 test.fixme()-Marks the test as broken/to be fixed. It does not run.

test.fixme('Fix this test later', async ({ page }) => {
  await page.goto('https://example.com');
});

🔹 test.fail()-Marks the test as expected to fail.
If it fails → Playwright marks it Passed.
If it passes → Playwright marks it Failed.

test('Expected failure', async () => {
  test.fail();
  expect(2).toBe(3);
});

🔹 test.slow()-Triples the default timeout for that test.

test('Slow test', async ({ page }) => {
  test.slow();
  await page.goto('https://playwright.dev');
});


2) test.setTimeout()

🔹Definition:Overrides the timeout for a specific test.

test('Custom timeout test', async ({ page }) => {
  test.setTimeout(10000); // 10 seconds
  await page.goto('https://playwright.dev');
});

3) test.step()

🔹Definition:Groups actions into steps for better reporting (useful in reports like Allure).

test('Using steps', async () => {
  await test.step('Step 1: Validate wrong condition', async () => {
    test.fail();
    expect(2).toBe(3);
  });

  await test.step('Step 2: Validate correct condition', async () => {
    expect(2).toBe(2);
  });
});

4) Codegen in Playwright

🔹Definition:Codegen is a Playwright tool that records your browser actions and generates test code automatically.

🔹Command to start codegen
npx playwright codegen https://example.com

🔹Whatever actions you perform in the browser are converted into Playwright code.

🔹Example generated code
await page.goto('https://www.amazon.com/');
await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('gaming');
await page.getByRole('button', { name: 'Submit' }).click();

