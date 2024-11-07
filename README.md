# Viewerjs-Webcomponent
![Framework](https://img.shields.io/badge/language-React-brightgreen.svg)
![Framework](https://img.shields.io/badge/language-Vue-brightgreen.svg)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) 

> Image viewer webcomponent based on [viewerjs](https://github.com/fengyuanchen/viewerjs).
- It can be invoked everywhere, including Vue, React and HTML.
- All the options & methods of viewerjs are avaliable.

## Table of contents
- [Main files](#main-files)
- [Getting started](#getting-started)
- [Options & Methods & Keyboard support of Viewer](#options-and-methods-and-keyboard-support-of-viewer)
- [License & Contributing & Versioning](#license-and-contributing-and-versioning)

## Main files

```text
├── examples
    ├── react-demo
        ├── src
            ├── assets
                ├── tibet-1.jpg
                └── ...
            ├── webcomponent
                ├── template.css
                ├── template.js
                └── viewer-webcomponent.js
            └── App.jsx
    ├── vue-demo
        ├── src
            ├── assets
                ├── tibet-1.jpg
                └── ...
            ├── webcomponent
                ├── template.css
                ├── template.js
                └── viewer-webcomponent.js
            └── components
                └── HelloWorld.vue
└── src  (a html demo using viewerjs-webcomponent)
   ├── assets
      ├── tibet-1.jpg
      └── ...
   ├── webcomponent
      ├── template.css
      ├── template.js
      └── viewer-webcomponent.js
   └── index.html

```

## Getting started

### Installation

```shell
npm install viewerjs
```

### Usage
> [!IMPORTANT]
> Viewerjs-webcomponent is used differently in frameworks and HTML.
- If you are using Vue or React, please copy the webcomponent files in `examples/vue-demo/webcomponent` or `examples/react-demo/webcomponent`. They are the same.
- If you are using HTML, please copy the webcomponent files in `src/webcomponent`. It is a simple webcomponent demo used only in HTML.

#### General
1. Invoke the webcomponent files.

    ```text
    ├── webcomponent
        ├── template.css
        ├── template.js
        └── viewer-webcomponent.js
    ```

2. Import the webcomponent where you use. For details, please see [Example](#Example).
    ```js
        import viewer from '/src/webcomponent/viewer-webcomponent.js'
        viewer.show()
    ```
    ```html
    <viewer-webcomponent options="{toolbar: false}"
        images="['src/assets/tibet-1.jpg', 'src/assets/tibet-2.jpg']">
    </viewer-webcomponent>
    ```
#### Component Props
- **options** (Optional)
    - Type: `Object`
    - Viewerjs options. For details, please see [viewerjs-options](#Example).
    - It should be coded in destructured way while used in frameworks. For details, please see [Example](#Example).
- **Images**
    - Type: `Array`
    - Images Urls.

#### Customizable Details
> You can skip this part if you have no further needs.
- **Template**: Modify the webcomponent template in your way in `template.js`.
    - `template.js`

    ```js
    const styleStr = '<style>' + '.container {'
        + 'display: grid;'
        + 'grid-template-columns: repeat(3, 33.33%);'
        + 'grid-template-rows: 1fr 1fr auto;'
        + 'img {'
        + 'width: 100%;'
        + 'height: 100%;'
        + 'max-height: 100%;'
        + '}'
        + '}'
        + '</style>'
    const innerTemplate = '<div id="viewer-container" class="container">' + '</div>' + styleStr
    ```

- **Shadowdom**: If you want to close the shadowdom mod, close it in `viewer-webcomponent.js` and modify template style in `template.css` and `template.js`.
    - `viewer-webcomponent.js`

    ```js
    // this.shadow.appendChild(content)
    this.appendChild(content)

    // const viewer = new Viewer(this.shadowRoot.getElementById('viewer-container'), options);
    const viewer = new Viewer(document.getElementById('viewer-container'), options);

    constructor() {
        super();
        // const shadow = this.attachShadow( { mode: 'open' } )
        // this.shadow = shadow
    }
    ```

    - `template.css`
    ```css
    .container {
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
        grid-template-rows: 1fr 1fr auto;
        img {
            width: 100%;
            height: 100%;
            max-height: 100%;
        }
    }
    ```

    - `template.js`
    ```js
    const innerTemplate = '<div id="viewer-container" class="container">' + '</div>'
    // const innerTemplate = '<div id="viewer-container" class="container">' + '</div>' + styleStr
    ```

- **Slot**: If you want to add slot, add it in `template.js` and use it.
    - `template.js`
    ```js
    const slotStr = '<slot name="slotName"></slot>'
    // const innerTemplate = '<div id="viewer-container" class="container">' + '</div>' + styleStr
    const innerTemplate = '<div id="viewer-container" class="container">' + '</div>'
     + styleStr + slotStr
    ```

    - `where you use it`
    ```html
    <viewer-webcomponent options="{toolbar: false}"
      images="['src/assets/tibet-1.jpg', 'src/assets/tibet-2.jpg']"> 
        <span slot="slotName">xxx</span>
    </viewer-webcomponent>
    ```
#### Example

- Vue
Skip component parsing
```js
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // 将所有带短横线的标签名都视为自定义元素
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  })],
})
```

```vue
<script setup>
    import { ref, onMounted } from "vue";
    import getViewer from "/src/webcomponent/viewer-webcomponent.js";

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
        <viewer-webcomponent :.="options" :images="images"></viewer-webcomponent>
    </div>
</template>
```

- React
Skip component parsing
```jsx
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
```

```jsx
import { useState, useEffect } from 'react'
import getViewer from '/src/webcomponent/viewer-webcomponent.js'

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
    <>
    {<viewer-webcomponent {...options} images={images}></viewer-webcomponent>}
    </>
)
}

export default App
```

- HTML
```html
<script type="module">
    import viewer from '/src/webcomponent/viewer-webcomponent.js'
    viewer.show()
</script>
<viewer-webcomponent options="{toolbar: false}"
    images="['src/assets/tibet-1.jpg', 'src/assets/tibet-2.jpg']">
</viewer-webcomponent>
```

## Options and Methods and Keyboard support of Viewer
Refer to [viewjs](https://github.com/fengyuanchen/viewerjs?tab=readme-ov-file).

## License and Contributing and Versioning
- License: [MIT](https://opensource.org/licenses/MIT)
- Contributing: [Contributor Code of Conduct](CODE_OF_CONDUCT.md).
- Versioning: [Semantic Versioning guidelines](https://semver.org/).

[⬆ back to top](#viewerjs-webcomponent)