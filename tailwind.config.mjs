import baseConfig from './tailwind.config.mjs.js';

export default {
  ...baseConfig,
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
};
