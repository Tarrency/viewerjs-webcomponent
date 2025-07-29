import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.js',
      formats: ['es', 'cjs'], // 同时生成两种格式
      fileName: (format) => `index.${format}.js`
    },
  }
});