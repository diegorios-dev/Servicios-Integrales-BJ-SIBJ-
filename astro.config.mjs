// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://diegorios-dev.github.io',
  base: '/Servicios-Integrales-BJ-SIBJ-',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
