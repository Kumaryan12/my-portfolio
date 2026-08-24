import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sites } from '@openai/sites-vite-plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sites()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
