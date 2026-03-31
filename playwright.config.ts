import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const allowedEnvironments = ['prod', 'uat', 'test'] as const;
const rawTestEnv = process.env.TEST_ENV;

if (!rawTestEnv) {
  throw new Error('TEST_ENV is required in .env. Allowed values: prod, uat, test.');
}

const envName = rawTestEnv.toLowerCase();

if (!allowedEnvironments.includes(envName as (typeof allowedEnvironments)[number])) {
  throw new Error(`Invalid TEST_ENV value: "${rawTestEnv}". Allowed values: prod, uat, test.`);
}

const baseUrls: Record<string, string> = {
  prod: process.env.BASE_URL_PROD!,
  uat: process.env.BASE_URL_UAT!,
  test: process.env.BASE_URL_TEST!,
};

const resolvedBaseUrl = baseUrls[envName] ?? baseUrls.test;

if (!resolvedBaseUrl) {
  throw new Error(`Missing base URL for TEST_ENV="${envName}". Set the matching BASE_URL_* in .env.`);
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  timeout: 50 * 1000,
  retries: process.env.CI ? 2 : 0,
  ...(process.env.CI ? { workers: 1 } : {}),
  reporter: 'html',
  use: {
    baseURL: resolvedBaseUrl,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
