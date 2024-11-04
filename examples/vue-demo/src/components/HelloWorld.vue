<!--
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2024-10-24 11:31:27
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2024-11-04 11:59:52
 * @FilePath: \viewerjs-webcomponent\examples\vue-demo\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref, computed, onMounted } from "vue";
import getViewer from "/src/webcomponent/viewer-component.js";

const options = ref({ toolbar: true, title: false });
const images = ref([
  "src/assets/tibet-1.jpg",
  "src/assets/tibet-2.jpg",
  "src/assets/tibet-3.jpg",
  "src/assets/tibet-4.jpg",
  "src/assets/tibet-8.jpg",
  "src/assets/tibet-9.jpg",
  "src/assets/tibet-7.jpg",
  "src/assets/tibet-6.jpg",
  "src/assets/tibet-5.jpg",
]);
onMounted(() => {
  const viewer = getViewer.viewer
  viewer.show()
  // const vueViewer = ref(viewer)
  // vueViewer.value.show()
})
</script>

<template>
  <div class="demo">
    <viewer-webcomponent :.="options" :images="images"> </viewer-webcomponent>
  </div>
</template>

<style scoped>
.demo {
  height: 100vh;
  width: 70vw;
}
</style>
