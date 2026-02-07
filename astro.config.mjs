import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  prefetch: true,
  site: 'https://pbjcontracting.co.nz', 
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
