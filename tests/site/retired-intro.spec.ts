import { expect, test } from '@playwright/test';

test('retired introduction redirects to About and leaves public listings', async ({ page }) => {
  await page.goto('/writing/hello');
  await expect(page).toHaveURL('http://127.0.0.1:4322/about');

  for (const path of ['/', '/writing', '/notes']) {
    await page.goto(path);
    await expect(page.locator('a[href="/writing/hello"]')).toHaveCount(0);
  }

  for (const path of ['/rss.xml', '/sitemap-0.xml']) {
    const response = await page.request.get(path);
    expect(response.ok()).toBeTruthy();
    expect(await response.text()).not.toContain('/writing/hello');
  }
});
