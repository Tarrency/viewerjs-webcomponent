<script setup>
import { ref, onMounted } from "vue";
import getViewer from "viewerjs-webcomponent";
// import getViewer from "../webcomponent/viewer-webcomponent";

const options = ref({ toolbar: false, title: true });
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
  const viewer = getViewer.viewer;
  viewer.show();

  // 响应式
  // const vueViewer = ref(viewer)
  // vueViewer.value.show()
});
</script>

<template>
  <div class="demo">
    <viewer-webcomponent :.="options" :images="images"></viewer-webcomponent>
  </div>
</template>

<style scoped>
.demo {
  height: 100vh;
  width: 70vw;
}
/* 改写多图片布局样式 */
/* viewer-webcomponent::part(content) {
  grid-template-columns: repeat(1, 100%)
} */
</style>
