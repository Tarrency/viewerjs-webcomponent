# Viewerjs-Webcomponent

> Image viewer webcomponent based on [viewerjs](https://fengyuanchen.github.io/viewerjs).
> It can be invoked everywhere, including Vue, React and HTML.

## Table of contents
- [Main](#main)
- [Getting started](#getting-started)

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
            └── App.jsx  (a react file to invoke viewer-webcomponent)
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
                └── HelloWorld.vue  (a vue file to invoke viewer-webcomponent)
└── src  (a html demo using viewerjs-webcomponent)
   ├── assets
      ├── tibet-1.jpg
      └── ...
   ├── webcomponent
      ├── template.css
      ├── template.js
      └── viewer-webcomponent.js
   └── index.html  (a html file to invoke viewer-webcomponent)

```

## Getting started

### Installation

```shell
npm install viewerjs
```

### Usage
> [!IMPORTANT]
> Viewerjs-webcomponent is used differently in frames and html.
- If you are using Vue or React, please copy the webcomponent files in examples/vue-demo/webcomponent or examples/react-demo/webcomponent. They are the same.
- If you are using HTML, please copy the webcomponent files in src/webcomponent. It is a simple webcomponent demo used only in HTML.

#### manual
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

3. **(Skippable)** Modify the webcomponent template in your way in template.js.
    - template.js

    ```js
    const styleStr = '<style>' + '.container {'
        + 'display: grid;'
        + ' grid-template-columns: repeat(3, 33.33%);'
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

4. **(Skippable)** If you want to close the shadowdom mod, close it in viewer-webcomponent.js and modify template style in template.css and template.js.
    - viewer-webcomponent.js

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

    - template.css
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

    - template.js
    ```js
    const innerTemplate = '<div id="viewer-container" class="container">' + '</div>'
    // const innerTemplate = '<div id="viewer-container" class="container">' + '</div>' + styleStr
    ```

5. **(Skippable)** If you want to add slot, add it in template.js and use it.
    - template.js
    ```js
    const slotStr = '<br/>' + '<slot name="slotName"></slot>' + '<br/>'
    // const innerTemplate = '<div id="viewer-container" class="container">' + '</div>' + styleStr
    const innerTemplate = '<div id="viewer-container" class="container">' + '</div>' + styleStr + slotStr
    ```

    - where you use it
    ```html
    <viewer-webcomponent :.="options" :images="images"> <span slot="slotName">xxx</span> </viewer-webcomponent>
    ```
#### Example

- Vue
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
            <viewer-webcomponent :.="options" :images="images"> <span slot="slotName">这是真正的slot</span> </viewer-webcomponent>
        </div>
    </template>
    ```

    - React
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
        {<viewer-webcomponent {...options} images={images}> <span slot="slotName">这是真正的slot</span></viewer-webcomponent>}
        </>
    )
    }

    export default App
    ```

    - HTML
    ```html
    <body>
        <script type="module">
            import viewer from '/src/webcomponent/viewer-webcomponent.js'
            viewer.show()
        </script>
        <viewer-webcomponent options="{toolbar: false}"
            images="['src/assets/tibet-1.jpg', 'src/assets/tibet-2.jpg', 'src/assets/tibet-3.jpg', 'src/assets/tibet-4.jpg', 'src/assets/tibet-5.jpg', 'src/assets/tibet-6.jpg', 'src/assets/tibet-7.jpg', 'src/assets/tibet-8.jpg', 'src/assets/tibet-9.jpg']">
            <span slot="slotName">这是真正的slot</slot>
        </viewer-webcomponent>
    </body>
    ```