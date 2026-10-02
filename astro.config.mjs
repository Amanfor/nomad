import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://amanfor.github.io',
  base: '/nomad',
  output: 'static',
  integrations: [react()],
});
