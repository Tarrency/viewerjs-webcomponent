import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.js',
      formats: ['es', 'cjs', 'umd'], // 生成 ESM、CJS、UMD
      name: 'ViewerjsWebcomponentGlobal',
      fileName: (format) => {
        if (format === 'es') return 'index.es.js';
        if (format === 'cjs') return 'index.cjs.js';
        if (format === 'umd') return 'browser.js'; // 浏览器专用
      },
    },
  },
  rollupOptions: {
      external: [], // 确保不意外引入 Node.js 模块
    },
});