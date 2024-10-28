/*
 * @Author: Tarrency 760216236@qq.com
 * @Date: 2024-10-21 16:34:58
 * @LastEditors: Tarrency 760216236@qq.com
 * @LastEditTime: 2024-10-27 23:52:14
 * @FilePath: /vanilla-demo/src/js/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
// import innerTemplate from './template';

class ViewerWebComponents extends HTMLElement {
  constructor() {
    super();
    this.init();
  }

  imageCount(imageArr) {
    const innerTemplate = '<ul id="viewer-image">' + '</ul>'
    const preInnerTemplate = innerTemplate.split('</ul>').filter(Boolean)
    if (imageArr && imageArr.length) {
      for (let i = 0; i < imageArr.length; i++) {
        preInnerTemplate.push(`<li><img src="${imageArr[i]}"></li>`)
      }
    }
    return preInnerTemplate.join('') + '</ul>'
  }

  init() {
    setTimeout(() => {
      const template = document.createElement('template')
      template.setAttribute('id', 'viewer-id')
      // template.innerHTML = TEMPLATE
      const imageArr = this.getAttribute('images')
      template.innerHTML = this.imageCount(imageArr.split(','))

      document.body.appendChild(template)

      const content = template.content.cloneNode(true); // 克隆一份
      this.appendChild(content);

      const options = {}
      for(let i of this.attributes){
        let arr = String(i).split('=')
        if(!i.name.includes('-')&&i.name!=='images'){
          options[i.name] = eval(i.value)
        }
      }

      // const options = this.getAttribute('options')
      const viewer = new Viewer(document.getElementById('viewer-image'), options);
    })
  }
}

window.customElements.define('viewer-webcomponents', ViewerWebComponents);
export default ViewerWebComponents;
