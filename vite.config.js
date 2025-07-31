import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
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
    // rollupOptions: {
    //   // 移除 external: ['viewerjs']，表示要打包 viewerjs
    //   output: {
    //     // assetFileNames: 'viewer-webcomponent.css', // 输出独立的 CSS 文件
    //   },
    // },
    cssCodeSplit: true, // 生成独立 CSS
  },
});