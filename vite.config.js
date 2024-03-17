import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/resturant/',
  build: {
    outDir: 'docs',
  },
});