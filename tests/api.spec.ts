import { test, expect } from '@playwright/test';

test.describe('Automation Exercise API', () => {
  test('products list endpoint returns products', async ({ request }) => {
    let payload: any;

    await test.step('Send GET /api/productsList', async () => {
      const response = await request.get('/api/productsList');
      expect(response.ok()).toBeTruthy();
      payload = await response.json();
    });

    await test.step('Validate products response schema', async () => {
      expect(payload.responseCode).toBe(200);
      expect(Array.isArray(payload.products)).toBeTruthy();
      expect(payload.products.length).toBeGreaterThan(0);

      const firstProduct = payload.products[0];
      expect(firstProduct).toHaveProperty('id');
      expect(firstProduct).toHaveProperty('name');
      expect(firstProduct).toHaveProperty('price');
    });
  });

  test('brands list endpoint returns brands', async ({ request }) => {
    let payload: any;

    await test.step('Send GET /api/brandsList', async () => {
      const response = await request.get('/api/brandsList');
      expect(response.ok()).toBeTruthy();
      payload = await response.json();
    });

    await test.step('Validate brands response schema', async () => {
      expect(payload.responseCode).toBe(200);
      expect(Array.isArray(payload.brands)).toBeTruthy();
      expect(payload.brands.length).toBeGreaterThan(0);

      const firstBrand = payload.brands[0];
      expect(firstBrand).toHaveProperty('id');
      expect(firstBrand).toHaveProperty('brand');
    });
  });
});
