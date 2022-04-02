import { defineConfig } from "vite";

// vite.config.js
export default defineConfig({
  base: '/niivue-vite/',
  assetsInclude: ['**/*.wasm'],
  assetsInlineLimit: '2048' // 2kb
})