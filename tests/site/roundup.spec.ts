import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const path = '/writing/links-october-4-17';

for (const width of [320, 375, 768, 1024, 1440]) {
  test(`roundup reflows at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => {
      if (response.url().startsWith('http://127.0.0.1:4322') && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
    });
    const response = await page.goto(path);
    expect(response?.ok()).toBeTruthy();
    await expect(page.getByRole('heading', { name: 'Links: October 4-17', exact: true })).toBeVisible();
    await expect(page.locator('.prose li')).toHaveCount(81);
    await expect(page.locator('.prose a')).toHaveCount(110);
    await expect(page.locator('.prose h2')).toHaveCount(10);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
    const clipped = await page.locator('.prose a, .prose h2').evaluateAll(nodes => nodes.filter(node => {
      const rect = node.getBoundingClientRect();
      return rect.left < 0 || rect.right > document.documentElement.clientWidth + 1;
    }).map(node => node.textContent));
    expect(clipped).toEqual([]);
    expect(errors).toEqual([]);
    await page.screenshot({ path: `test-results/roundup-${test.info().project.name}-${width}.png`, fullPage: true, scale: 'css' });
  });
}

test('roundup has no automated WCAG A/AA violations', async ({ page }) => {
  await page.goto(path);
  const results = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']).analyze();
  expect(results.violations.map(v => `${v.id}: ${v.nodes.map(n => n.target).join(', ')}`)).toEqual([]);
});

test('roundup metadata, feed, and sitemap agree', async ({ page, request }) => {
  await page.goto(path);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://thenandlabs.com${path}`);
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content','article');
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /Links: October 4-17/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Two weeks of links/);
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('.article-dek')).toHaveCount(0);
  const feed = await request.get('/rss.xml');
  expect(await feed.text()).toContain(`https://thenandlabs.com${path}`);
  const sitemap = await request.get('/sitemap-0.xml');
  expect(await sitemap.text()).toContain(`https://thenandlabs.com${path}`);
});

test('roundup remains readable with reduced motion, zoom reflow, and text spacing', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 640, height: 900 });
  await page.goto(path);
  await page.addStyleTag({ content: '.prose {line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}.prose p{margin-bottom:2em!important}' });
  expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
  await expect(page.locator('.prose li').last()).toBeVisible();
});

test('roundup skip link and article links support keyboard focus', async ({ page, browserName }) => {
  await page.goto(path);
  const skip = page.getByRole('link',{name:'Skip to content'});
  await page.keyboard.press(browserName === 'webkit' ? 'Alt+Tab' : 'Tab');
  await expect(skip).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main-content$/);
  const first = page.locator('.prose a').first();
  await first.focus();
  await expect(first).toBeFocused();
  expect(await first.evaluate(node => {
    const style = getComputedStyle(node);
    return style.outlineStyle !== 'none' && parseFloat(style.outlineWidth) > 0;
  })).toBeTruthy();
});

test('roundup does not depend on JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled:false });
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:4322${path}`);
  await expect(page.locator('.prose li')).toHaveCount(81);
  await expect(page.locator('.prose a')).toHaveCount(110);
  await context.close();
});
