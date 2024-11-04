/*
 * @Author: Tarrency 760216236@qq.com
 * @Date: 2024-10-21 16:34:58
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2024-11-04 18:20:41
 * @FilePath: /vanilla-demo/src/js/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

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

  imageCount(imageArr) {
    const preInnerTemplate = innerTemplate.split('</div>').filter(Boolean)
    for (let i = 0; i < imageArr.length; i++) {
      preInnerTemplate.push(`<div><img src="${imageArr[i]}"></div>`)
    }
    return preInnerTemplate.join('') + '</div>'
  }

  init() {
      var shadow = this.attachShadow( { mode: 'open' } );
      const template = document.createElement('template')

      const imageArr = this.getAttribute('images')
      template.innerHTML = this.imageCount(eval(imageArr))
      document.body.appendChild(template)
  
      const content = template.content.cloneNode(true)
      // this.appendChild(content)
      shadow.appendChild(content)
  
      const options = this.getAttribute('options')
  
      const viewer = new Viewer(this.shadowRoot.getElementById('viewer-container'), eval(`( ${options} )`));
      this.viewer = viewer
  }
}
customElements.define('viewer-webcomponent', ViewerWebComponent);
const viewerElement = document.querySelector('viewer-webcomponent')
const viewer = viewerElement.viewer
export default viewer
