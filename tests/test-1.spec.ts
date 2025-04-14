import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://secure-qa2.smartdrivesystems.com/login');
});