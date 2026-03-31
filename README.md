# AutomationExample

Playwright + TypeScript test automation project with:
- UI tests using page objects and fixtures
- API tests using Playwright request context
- Environment-based `baseURL` selection via `.env`

## Prerequisites

- Node.js 18+
- npm

## Installation

```bash
npm install
npx playwright install
```

## Environment Configuration

Create a `.env` file from `.env.example` 

Notes:
- `TEST_ENV` is required.
- Allowed values are `prod`, `uat`, or `test`.
- The matching `BASE_URL_*` value for the selected `TEST_ENV` must be provided.

## Running Tests

```bash
# Run all tests
npm test

# Run with UI mode (uses xvfb automatically in headless Linux)
npm run test:ui

# Run headed mode
npm run test:headed

# Open latest HTML report
npm run report
```

## Test Data

Reusable datasets are stored in the `data/` folder:
- `data/loginUsers.ts`: login-focused scenarios with expected result (`success` / `failure`)
- `data/users.ts`: generic user profiles with role and active status


## Project Structure

```text
fixtures/           # Custom Playwright fixtures (baseTest)
data/               # Reusable test data sets
utils/              # Shared helper utilities for tests
pages/              # Page Object Model classes
tests/              # UI and API test specs
playwright.config.ts
tsconfig.json
.env.example
```