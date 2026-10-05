import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thenandlabs.com',
  integrations: [sitemap()],
  trailingSlash: 'never',
});
