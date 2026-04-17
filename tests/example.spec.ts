import { test } from '../fixtures/baseUITest';
import { users } from '../data/users';

const adminUser = users.find((user) => user.role === 'admin' && user.isActive);

if (!adminUser) {
  throw new Error('Active admin user was not found in data/users.ts');
}

test.describe('UI Tests', () => {
  test('has title', async ({ homePage }) => {
    await test.step('Navigate to home page', async () => {
      await homePage.goto();
    });

    await test.step('Verify page title', async () => {
      await homePage.verifyTitle();
    });
  });

  
  test('login with Admin User details', async ({ loginPage, homePage }) => {
    await test.step('Navigate to login page', async () => {
      await loginPage.goto();
    });

     await test.step('Verify login and signup headings are visible', async () => {
      await loginPage.verifyLoginPageVisible();
    });

    await test.step('Login as admin user', async () => {
      await loginPage.login(adminUser.email, adminUser.password);
    });

    await test.step('Verify admin user is logged in', async () => {
      await homePage.verifyLoggedInAs(adminUser.name);
    });
  });
});
