<!--
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2024-10-24 11:31:27
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2024-10-24 17:04:38
 * @FilePath: \viewerjs-webcomponent\examples\vue-demo\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref, defineCustomElement } from "vue";
import viewerwebcomponents from "../viewer-component";
defineProps({
  msg: String,
});
new viewerwebcomponents()
console.log('viewerwebcomponents', viewerwebcomponents)

const count = ref(0);
customElements.define('viewer-webcomponents', viewerwebcomponents);
</script>

<template>
  <viewer-webcomponents
    options="{toolbar: false}"
    images="['src/assets/tibet-1.jpg', 'src/assets/tibet-2.jpg']"
  >
  </viewer-webcomponents>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
