/*
 * @Author: Tarrency 760216236@qq.com
 * @Date: 2024-10-21 16:34:58
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2024-10-24 17:36:02
 * @FilePath: /vanilla-demo/src/js/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
// import innerTemplate from './template';

class ViewerWebComponents extends HTMLElement {
  constructor() {
    // super();
    // this.init();
  }
  imageCount(imageArr) {
    const innerTemplate = '<ul id="images">' + '</ul>'
    const preInnerTemplate = innerTemplate.split('</ul>').filter(Boolean)
    if (imageArr && imageArr.length) {
      for (let i = 0; i < imageArr.length; i++) {
        preInnerTemplate.push(`<li><img src="${imageArr[i]}"></li>`)
      }
    }
    return preInnerTemplate.join('') + '</ul>'
  }
  
  static init() {
    const template = document.createElement('template')
    template.setAttribute('id', 'viewer-id')
    // template.innerHTML = TEMPLATE
    const imageArr = this.getAttribute('images')
    template.innerHTML = this.imageCount(eval(imageArr))
  
    document.body.appendChild(template)
  
    const content = template.content.cloneNode(true); // 克隆一份
    this.appendChild(content);
  
    const options = this.getAttribute('options')
    console.log('here', document.getElementById('images'))
    const viewer = new Viewer(document.getElementById('images'), eval(`( ${options} )`));
  }
}

// function imageCount(imageArr) {
//   const innerTemplate = '<ul id="images">' + '</ul>'
//   const preInnerTemplate = innerTemplate.split('</ul>').filter(Boolean)
//   if (imageArr && imageArr.length) {
//     for (let i = 0; i < imageArr.length; i++) {
//       preInnerTemplate.push(`<li><img src="${imageArr[i]}"></li>`)
//     }
//   }
//   return preInnerTemplate.join('') + '</ul>'
// }

// function init() {
//   const template = document.createElement('template')
//   template.setAttribute('id', 'viewer-id')
//   // template.innerHTML = TEMPLATE
//   const imageArr = this.getAttribute('images')
//   template.innerHTML = imageCount(eval(imageArr))

//   document.body.appendChild(template)

//   const content = template.content.cloneNode(true); // 克隆一份
//   this.appendChild(content);

//   const options = this.getAttribute('options')
//   console.log('here', document.getElementById('images'))
//   const viewer = new Viewer(document.getElementById('images'), eval(`( ${options} )`));
// }
// this.init()
// ViewerWebComponents.init()
window.customElements.define('viewer-webcomponents', ViewerWebComponents);
ViewerWebComponents.init()
// init()
console.log('window.customElements', window.customElements)
export default ViewerWebComponents;
