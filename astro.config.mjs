import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Desktop (Tauri) and Android (Capacitor) bundle the site at their root, only
// the GitHub Pages site lives under /nomad/. Wrong base = 404 on every chunk
// = a black screen, because the React island is client-only (no SSR fallback).
const embedded = Boolean(process.env.TAURI_DESKTOP || process.env.ANDROID_BUILD);

export default defineConfig({
  site: 'https://amanfor.github.io',
  base: embedded ? '/' : '/nomad',
  output: 'static',
  integrations: [react()],
});
