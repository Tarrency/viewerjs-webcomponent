/*
 * @Author: Tarrency 760216236@qq.com
 * @Date: 2024-10-21 16:34:58
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2024-11-01 18:03:48
 * @FilePath: /vanilla-demo/src/js/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
import innerTemplate from './template.js'
import './template.css'

class ViewerWebComponent extends HTMLElement {
  constructor() {
    super();
    this.init();
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

  init() {
    // const promise = new Promise()
    Promise.resolve().then(() => {
      const template = document.createElement('template')
      template.setAttribute('id', 'viewer-template')
      // template.innerHTML = TEMPLATE
      const imageArr = this.getAttribute('images')
      template.innerHTML = this.imageCount(imageArr.split(','))

      document.body.appendChild(template)

      const content = template.content.cloneNode(true); // 克隆一份
      this.appendChild(content);

      const options = {}
      for (let i of this.attributes) {
        if (!i.name.includes('-') && i.name !== 'images') {
          options[i.name] = eval(i.value)
        }
      }

      // const options = this.getAttribute('options')
      const viewer = new Viewer(document.getElementById('viewer-container'), options);
      this.viewer = viewer
    })
    // setTimeout(() => {
      // const template = document.createElement('template')
      // template.setAttribute('id', 'viewer-template')
      // // template.innerHTML = TEMPLATE
      // const imageArr = this.getAttribute('images')
      // template.innerHTML = this.imageCount(imageArr.split(','))

      // document.body.appendChild(template)

      // const content = template.content.cloneNode(true); // 克隆一份
      // this.appendChild(content);

      // const options = {}
      // for (let i of this.attributes) {
      //   if (!i.name.includes('-') && i.name !== 'images') {
      //     options[i.name] = eval(i.value)
      //   }
      // }

      // // const options = this.getAttribute('options')
      // const viewer = new Viewer(document.getElementById('viewer-container'), options);
      // this.viewer = viewer
      // console.log('this.viewer', this.viewer)
    // })
  }
}

customElements.define('viewer-webcomponent', ViewerWebComponent);
// export default ViewerWebComponent;

let getViewer = (callback) => {
  setTimeout(() => {
    const viewerElement = document.querySelector('viewer-webcomponent')
    const viewer = viewerElement.viewer
    callback(viewer)
  })
}
export default getViewer
