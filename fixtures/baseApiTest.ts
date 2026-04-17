import { test as base, APIRequestContext } from '@playwright/test';

type ApiFixtures = {
  api: APIRequestContext;
  token: string;
};

export const test = base.extend<ApiFixtures>({
  api: async ({ request }, use) => {
    await use(request);
  },

  token: async ({ api }, use) => {
    const response = await api.post('/api/verifyLogin', {
      form: {
        email: process.env.API_USER_EMAIL ?? '',
        password: process.env.API_USER_PASSWORD ?? '',
      },
    });
    const body = await response.json();
    const token: string = body.token ?? '';

    await use(token);
  },
});

export { expect } from '@playwright/test';
