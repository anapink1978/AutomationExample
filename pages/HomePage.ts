import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  async goto() {
    await super.goto('/');
  }

  async verifyTitle() {
    await expect(this.page).toHaveTitle(/Automation Exercise/);
  }
}
