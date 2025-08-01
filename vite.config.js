import { defineConfig } from 'vite';
import path from 'path';
import cssInjectedByJs from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [cssInjectedByJs()], // 自动注入 CSS 到 JS
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.js'),
      formats: ['es', 'cjs', 'umd'], // 生成 ESM、CJS、UMD
      name: 'ViewerjsWebcomponentGlobal',
      fileName: (format) => {
        if (format === 'es') return 'index.es.js';
        if (format === 'cjs') return 'index.cjs.js';
        if (format === 'umd') return 'browser.js'; // 浏览器专用
      },
    },
  },
});