import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly loginToYourAccountHeading = this.page.getByRole('heading', { name: 'Login to your account' });
  private readonly newUserSignupHeading = this.page.getByRole('heading', { name: 'New User Signup!' });
  private readonly loginEmailInput = this.page.locator('[data-qa="login-email"]');
  private readonly loginPasswordInput = this.page.locator('[data-qa="login-password"]');
  private readonly loginButton = this.page.locator('[data-qa="login-button"]');
  private readonly signupNameInput = this.page.locator('[data-qa="signup-name"]');
  private readonly signupEmailInput = this.page.locator('[data-qa="signup-email"]');
  private readonly signupButton = this.page.locator('[data-qa="signup-button"]');
  private readonly loginErrorMessage = this.page.getByText('Your email or password is incorrect!');
  private readonly signupErrorMessage = this.page.getByText('Email Address already exist!');

  async goto() {
    await super.goto('/login');
  }

  async verifyLoginPageVisible() {
    await expect(this.loginToYourAccountHeading).toBeVisible();
    await expect(this.newUserSignupHeading).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }

  async signup(name: string, email: string) {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }

  async verifyLoginErrorVisible() {
    await expect(this.loginErrorMessage).toBeVisible();
  }

  async verifySignupErrorVisible() {
    await expect(this.signupErrorMessage).toBeVisible();
  }
}
