/*
 * @Author: Tarrency 760216236@qq.com
 * @Date: 2024-10-21 16:34:58
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2024-11-04 11:56:29
 * @FilePath: /vanilla-demo/src/js/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
import innerTemplate from './template.js'
import './template.css'

class ViewerWebComponent extends HTMLElement {
  static get observedAttributes() {
    return ['images']
  }
  attributeChangedCallback(name, oldVal, newVal) {
    // console.log(`Attribute: ${name} changed!`, oldVal, newVal)
    const template = document.createElement('template')
      template.setAttribute('id', 'viewer-template')

      const imageArr = this.getAttribute('images')
      template.innerHTML = this.imageCount(imageArr.split(','))

      document.body.appendChild(template)

      const content = template.content.cloneNode(true); // 克隆一份
      this.appendChild(content);
      
  }
  connectedCallback() {
    const options = {}
      for (let i of this.attributes) {
        if (!i.name.includes('-') && i.name !== 'images') {
          options[i.name] = eval(i.value)
        }
      }

      // const options = this.getAttribute('options')
      const viewer = new Viewer(document.getElementById('viewer-container'), options);
      // this.viewer = viewer
      getViewer.viewer = viewer
  }
  constructor() {
    super();
  }

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

if (!document.querySelector('viewer-webcomponent')) {
  customElements.define('viewer-webcomponent', ViewerWebComponent);
}
// export default ViewerWebComponent;
let getViewer = new Proxy({}, {})
export default getViewer
