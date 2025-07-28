<script setup>
import { ref, onMounted } from "vue";
import getViewer from "viewerjs-webcomponent";

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
  const viewer = getViewer.viewer;
  viewer.show();

  // 响应式
  // const vueViewer = ref(viewer)
  // vueViewer.value.show()
});
</script>

<template>
  <div class="demo">
    <viewer-webcomponent :.="options" :images="images"> <span slot="slotName">这是真正的slot</span> </viewer-webcomponent>
  </div>
</template>

<style scoped>
.demo {
  height: 100vh;
  width: 70vw;
}
</style>
