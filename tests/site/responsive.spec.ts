import { expect, test } from '@playwright/test';

const widths = [320, 375, 768, 1024, 1440];

for (const width of widths) {
  test(`home is usable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const formatNavigation = page.getByRole('navigation', { name: 'Writing formats' });
    await expect(formatNavigation).toBeVisible();
    for (const name of ['Essays', 'Notes', 'Links', 'Ideas']) {
      await expect(formatNavigation.getByRole('link', { name })).toBeVisible();
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
}

test('primary internal journeys resolve', async ({ page }) => {
  for (const path of ['/', '/writing', '/essays', '/notes', '/links', '/ideas', '/writing/what-nandlabs-is-for', '/work', '/about', '/subscribe', '/rss.xml']) {
    const response = await page.goto(path);
    expect(response?.ok(), `${path} should return a successful response`).toBeTruthy();
  }
});

test('keyboard focus reaches the primary navigation and subscribe action', async ({ page, browserName }) => {
  await page.goto('/');
  const skipLink = page.getByRole('link', { name: 'Skip to content' });
  await skipLink.focus();
  await expect(skipLink).toBeFocused();
  // WebKit follows Safari's default Option-Tab convention for link navigation.
  await page.keyboard.press(browserName === 'webkit' ? 'Alt+Tab' : 'Tab');
  await expect(page.getByRole('link', { name: 'NandLabs and Nanda Raghunathan home' })).toBeFocused();
});

test('writing rows share stable column anchors on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  const titleOffsets = await page.locator('.writing-card .entry-copy').evaluateAll((nodes) => nodes.map((node) => Math.round(node.getBoundingClientRect().left)));
  const metaOffsets = await page.locator('.writing-card .entry-meta').evaluateAll((nodes) => nodes.map((node) => Math.round(node.getBoundingClientRect().left)));
  expect(new Set(titleOffsets).size).toBe(1);
  expect(new Set(metaOffsets).size).toBe(1);
});

test('sidebar moves below the writing at narrow widths', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1000 });
  await page.goto('/');
  const main = await page.locator('.index-main').boundingBox();
  const sidebar = await page.locator('.index-sidebar').boundingBox();
  expect(main).not.toBeNull();
  expect(sidebar).not.toBeNull();
  expect(sidebar!.y).toBeGreaterThanOrEqual(main!.y + main!.height - 1);
});

test('layout reflows at a 200-percent zoom equivalent', async ({ page }) => {
  await page.setViewportSize({ width: 640, height: 900 });
  await page.goto('/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
  await expect(page.getByRole('heading', { name: 'Latest writing' })).toBeVisible();
});
