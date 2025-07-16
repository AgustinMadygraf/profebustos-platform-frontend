/*
Path: vite.config.ts
*/
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        legacy: 'assets/js/main.ts', // tu entry legacy
        app: 'src/main.ts', // futuro entry Vue
      },
    },
  },
});
