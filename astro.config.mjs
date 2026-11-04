import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://disin8.github.io',
  base: '/odys',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
