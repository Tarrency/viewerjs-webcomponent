/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2024-10-24 11:31:27
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2024-10-29 15:45:37
 * @FilePath: \viewerjs-webcomponent\examples\vue-demo\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]"
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 将所有带短横线的标签名都视为自定义元素
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })
  ]
})
