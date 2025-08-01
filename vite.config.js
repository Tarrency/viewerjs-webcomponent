import { defineConfig } from 'vite'
import path from 'path'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'

export default defineConfig(({ mode }) => {
    if (mode === 'umd') {
        return {
            plugins: [cssInjectedByJs()],
            build: {
                outDir: 'dist-umd', // UMD 输出到 dist-umd
                lib: {
                    entry: path.resolve(__dirname, 'lib/index-umd.js'),
                    formats: ['umd'],
                    name: 'ViewerjsWebcomponentGlobal',
                    fileName: () => 'browser.js'
                }
            }
        }
    }
    // 默认 ES + CJS
    return {
        plugins: [cssInjectedByJs()],
        build: {
            outDir: 'dist', // ESM/CJS 输出到 dist
            lib: {
                entry: path.resolve(__dirname, 'lib/index.js'),
                formats: ['es', 'cjs'],
                fileName: (format) => {
                    if (format === 'es') return 'index.es.js'
                    if (format === 'cjs') return 'index.cjs.js'
                }
            }
        }
    }
})
