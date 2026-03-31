import { test } from '../fixtures/baseTest';

test.describe('UI Tests', () => {
  test('has title', async ({ homePage }) => {
    await test.step('Navigate to home page', async () => {
      await homePage.goto();
    });

    await test.step('Verify page title', async () => {
      await homePage.verifyTitle();
    });
  });

  test('login page elements are visible', async ({ loginPage }) => {
    await test.step('Navigate to login page', async () => {
      await loginPage.goto();
    });

    await test.step('Verify login and signup headings are visible', async () => {
      await loginPage.verifyLoginPageVisible();
    });
  });
});
