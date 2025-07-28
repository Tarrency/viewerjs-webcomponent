/*
 * @Author: Tarrency 760216236@qq.com
 * @Date: 2024-10-21 16:34:58
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2024-11-05 10:33:21
 * @FilePath: /vanilla-demo/src/js/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
import innerTemplate from './template.js'
// 开启shadowdom则无法引入外部css文件，需要在模板js文件中写入css样式
import './template.css'

class ViewerWebComponent extends HTMLElement {
  // 生命周期，元素添加到文档中时调用
  connectedCallback() {
    // 创建webcomponent模板
    const template = document.createElement('template')
    // 获取webcomponent组件props中的images属性，即所有图片url
    const imageArr = this.getAttribute('images')
    // 将处理后的图片html片段插入模板
    template.innerHTML = this.imageCount(imageArr.split(','))

    // 可在devtool中查看模板结构
    // document.body.appendChild(template)

    // 复制模板节点，插入webcomponent组件
    const content = template.content.cloneNode(true)
    this.shadow.appendChild(content)
    // this.appendChild(content)

    // 处理webcomponent组件的props，options属性，对应viewerjs的options，用于进行相关配置
    const options = {}
    for (let i of this.attributes) {
      if (!i.name.includes('-') && i.name !== 'images') {
        options[i.name] = eval(i.value)
      }
    }

    // 将options属性传入viewerjs的实例
    const viewer = new Viewer(this.shadowRoot.getElementById('viewer-container'), options);
    // const viewer = new Viewer(document.getElementById('viewer-container'), options);

    // 保存viewerjs的实例，在Vue/React组件中可直接调用实例中viewerjs的api
    getViewer.viewer = viewer
  }
  // 设置组件的初始化状态
  constructor() {
    super();
    // 创建shadowdom，不创建则注释此两行
    const shadow = this.attachShadow( { mode: 'open' } )
    this.shadow = shadow
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
}

// 定义webcomponent组件，向浏览器绑定自定义组件与新创建的类
if (!document.querySelector('viewer-webcomponent')) {
  customElements.define('viewer-webcomponent', ViewerWebComponent);
}

// 创建Proxy全局变量，用于后续暴露viewerjs的api
let getViewer = new Proxy({}, {})
export default getViewer
