<!--
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2024-10-24 11:31:27
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2024-10-28 16:57:54
 * @FilePath: \viewerjs-webcomponent\examples\vue-demo\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from "vue";

const options = ref({ toolbar: false, title: false });
const images = ref(['src/assets/tibet-1.jpg, src/assets/tibet-2.jpg']);
</script>

<template>
  <viewer-webcomponents :.="options" :images="images"> </viewer-webcomponents>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
