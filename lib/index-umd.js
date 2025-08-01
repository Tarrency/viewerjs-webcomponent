import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
import innerTemplate from './template'
// 开启shadowdom则无法引入外部css文件，需要在模板js文件中写入css样式
import './template.css'

class ViewerWebComponent extends HTMLElement {
  constructor() {
    super();
    this.init();
  }

  // 处理webcomponent模板下的图片html
  imageCount(imageArr) {
    const preInnerTemplate = innerTemplate.split('</div>').filter(Boolean)
    if (imageArr && imageArr.length) {
      for (let i = 0; i < imageArr.length; i++) {
        preInnerTemplate.push(`<div><img src="${imageArr[i]}" alt="${i + 1}" title="${i + 1}"></div>`)
      }
    }
    return preInnerTemplate.join('') + '</div>'
  }

  // 初始化webcomponent
  init() {
      // 开启shadowdom
      var shadow = this.attachShadow( { mode: 'open' } )
      // 创建webcomponent模板
      const template = document.createElement('template')
      // 获取webcomponent组件props中的images属性，即所有图片url
      const imageArr = this.getAttribute('images')
      // 将处理后的图片html片段插入模板
      template.innerHTML = this.imageCount(eval(imageArr))

      // 可在devtool中查看模板结构
      document.body.appendChild(template)

      // 复制模板节点，插入webcomponent组件
      const content = template.content.cloneNode(true)
      // this.appendChild(content)
      shadow.appendChild(content)

      // 获取webcomponent组件的props，options属性，对应viewerjs的options属性，用于进行相关配置
      const options = this.getAttribute('options')

      // 将options属性传入viewerjs的实例
      const viewer = new Viewer(this.shadowRoot.getElementById('viewer-container'), eval(`( ${options} )`))
      // 保存viewerjs的实例，在Vue/React组件中可直接调用实例中viewerjs的api
      this.viewer = viewer
  }
}
// 定义webcomponent组件，向浏览器绑定自定义组件与新创建的类
customElements.define('viewer-webcomponent', ViewerWebComponent)

// 输出viewerjs的实例，暴露viewerjs的api，便于在html文件中直接调用
const viewerElement = document.querySelector('viewer-webcomponent')
const viewer = viewerElement.viewer
export default viewer
