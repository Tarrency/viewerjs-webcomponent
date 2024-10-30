/*
 * @Author: Tarrency 760216236@qq.com
 * @Date: 2024-10-21 16:34:58
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2024-10-30 16:07:30
 * @FilePath: /vanilla-demo/src/js/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
import innerTemplate from './template';

class ViewerWebComponent extends HTMLElement {
  constructor() {
    super();
    this.init();
  }

  imageCount(imageArr) {
    const preInnerTemplate = innerTemplate.split('</ul>').filter(Boolean)
    for (let i = 0; i < imageArr.length; i++) {
      preInnerTemplate.push(`<li><img src="${imageArr[i]}"></li>`)
    }
    return preInnerTemplate.join('') + '</ul>'
  }

  init() {
    // setTimeout(() => {
      var shadow = this.attachShadow( { mode: 'open' } );
      const template = document.createElement('template')
      // template.setAttribute('id', 'viewer-id')
      // template.innerHTML = TEMPLATE
      const imageArr = this.getAttribute('images')
      template.innerHTML = this.imageCount(eval(imageArr))
      document.body.appendChild(template)
  
      const content = template.content.cloneNode(true); // 克隆一份
      // this.appendChild(content)
      shadow.appendChild(content)
  
      const options = this.getAttribute('options')
  
      const viewer = new Viewer(this.shadowRoot.getElementById('ul-images'), eval(`( ${options} )`));
      this.viewer = viewer
      // viewer.show()
    // })
  }
}
window.customElements.define('viewer-webcomponent', ViewerWebComponent);
const viewerElement = document.querySelector('viewer-webcomponent')
const viewer = viewerElement.viewer
export default viewer
