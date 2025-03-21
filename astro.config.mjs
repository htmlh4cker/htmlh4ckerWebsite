// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://htmlh4cker.github.io',
  base: '/htmlh4ckerWebsite',
  vite: {
    plugins: [
      tailwindcss({
        plugins: [
          require('tailwindcss-animated')
        ]
      })
    ]
  }
});
