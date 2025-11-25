import { test, expect } from '@playwright/test';

test('basic page content', async ({ page }) => {
  // Load a simple blank page and set content locally so no external server is required
  await page.goto('about:blank');
  await page.setContent('<!doctype html><html><body><h1>Hello Playwright</h1></body></html>');
  const h1 = await page.textContent('h1');
  expect(h1).toBe('Hello Playwright');
});
