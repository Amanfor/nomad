import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://amanfor.github.io',
  // Desktop (Tauri) builds serve from the bundle root: TAURI_DESKTOP=1 npm run build
  base: process.env.TAURI_DESKTOP ? '/' : '/nomad',
  output: 'static',
  integrations: [react()],
});
