/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2024-10-29 16:02:11
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2024-10-29 16:32:47
 * @FilePath: \viewerjs-webcomponent\examples\react-demo\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    template: {
      compilerOptions: {
        // 将所有带短横线的标签名都视为自定义元素
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  })],
})
