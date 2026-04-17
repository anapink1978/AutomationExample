import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private readonly loggedInAsText = this.page.locator('a:has-text("Logged in as")');

  async goto() {
    await super.goto('/');
  }

  async verifyTitle() {
    await expect(this.page).toHaveTitle(/Automation Exercise/);
  }

  async verifyLoggedInAs(name: string) {
    await expect(this.loggedInAsText).toContainText(name);
  }
}
