// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/data/site';

// https://astro.build/config
export default defineConfig({
  site: new URL(siteConfig.url).origin,
  base: siteConfig.basePath,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
