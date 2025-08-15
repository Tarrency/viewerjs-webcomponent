# Viewerjs-Webcomponent
[![NPM version](https://img.shields.io/npm/v/viewerjs-webcomponent.svg?style=flat)](https://www.npmjs.com/package/viewerjs-webcomponent)
![Framework](https://img.shields.io/badge/language-React-brightgreen.svg)
![Framework](https://img.shields.io/badge/language-Vue-brightgreen.svg)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) 

> **Image viewer webcomponent** based on [viewerjs](https://github.com/fengyuanchen/viewerjs).
- It can be imported in **Vue, React and HTML**.
- All the options & methods of viewerjs are avaliable.

## Table of contents
- [Getting started](#getting-started)
- [Options & Methods & Keyboard support of Viewerjs](#options-and-methods-and-keyboard-support-of-viewerjs)
- [License & Contributing & Versioning](#license-and-contributing-and-versioning)

## Getting started

### Installation

```shell
npm install viewerjs-webcomponent
```

#### Component Props
- **options** (Optional)
    - Type: `Object`
    - Viewerjs options.
- **images**
    - Type: `Array`
    - Images Urls.

#### Change Style
> If you want to override the default styles of Viewerjs-WebComponent, you can use the ::part pseudo-element to target and style its internal elements.
```css
<style>
  /* override the default style */
  viewer-webcomponent::part(content) {
    /* code your style here */
    grid-template-columns: repeat(1, 100%)
  }
  /* override the image style*/
  viewer-webcomponent::part(img) {
      height: 50%
    }
</style>
```

#### Example

- Vue
> Skip component parsing in vite.config.js
```js
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // Treat all tag names with dashes as custom elements
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  })],
})
```
> Import and use it in Vue.
```vue
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

      // Vue3
      // const vueViewer = ref(viewer)
      // vueViewer.value.show()
    });
</script>

<template>
    <div class="demo">
        <viewer-webcomponent :options="options" :images="images"></viewer-webcomponent>
    </div>
</template>

<style scoped>
  .demo {
    height: 100vh;
    width: 70vw;
  }
</style>
```

- React
> Skip component parsing in vite.config.js
```jsx
// Skip component parsing
export default defineConfig({
  plugins: [react({
    template: {
      compilerOptions: {
        // Treat all tag names with dashes as custom elements
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  })],
})
```
> Import and use it in React.
```jsx
import { useState, useEffect } from 'react'
import getViewer from "viewerjs-webcomponent"

function App() {
const [options, setOptions] = useState({ toolbar: true, title: false })
const [images, setImages] = useState([
    "src/assets/tibet-1.jpg",
    "src/assets/tibet-2.jpg",
    "src/assets/tibet-3.jpg",
    "src/assets/tibet-4.jpg",
    "src/assets/tibet-8.jpg",
    "src/assets/tibet-9.jpg",
    "src/assets/tibet-7.jpg",
    "src/assets/tibet-6.jpg",
    "src/assets/tibet-5.jpg",
])
const [viewer, setViewer] = useState(null)

useEffect(() => {
    setViewer(getViewer.viewer)
}, [getViewer])
    viewer?.show()

return (
    <>{<viewer-webcomponent images={images} options={JSON.stringify(options)}></viewer-webcomponent>}</>
  )
}

export default App
```
- HTML
```html
  <script src="https://unpkg.com/viewerjs-webcomponent/dist/browser.js"></script>
  
  <viewer-webcomponent 
    options='{"toolbar": true, "title": false}'
    images='["./assets/tibet-1.jpg", "./assets/tibet-2.jpg", "./assets/tibet-3.jpg", "./assets/tibet-4.jpg", "./assets/tibet-5.jpg", "./assets/tibet-6.jpg", "./assets/tibet-7.jpg", "./assets/tibet-8.jpg", "./assets/tibet-9.jpg"]'>
  </viewer-webcomponent>
  
  <script>
    setTimeout(() => {
      const viewer = ViewerjsWebcomponentGlobal.viewer;
      viewer.show();
    });
  </script>
```

## Options and Methods and Keyboard support of Viewerjs
Refer to [viewjs](https://github.com/fengyuanchen/viewerjs?tab=readme-ov-file).

## License and Contributing and Versioning
- License: [MIT](https://opensource.org/licenses/MIT)
- Contributing: [Contributor Code of Conduct](CODE_OF_CONDUCT.md).
- Versioning: [Semantic Versioning guidelines](https://semver.org/).

[⬆ Back To Top](#viewerjs-webcomponent)