
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
import TEMPLATE from './template';

class ViewerWebComponent extends HTMLElement {
  constructor(imageArr = [], options = {}) {
    super();
    this.imageArr = imageArr
    this.options = options
    this.init();

    // content.querySelector('img').setAttribute('src', this.getAttribute('image'));
    // content.querySelector('.container>.name').innerText = this.getAttribute('name');
    // content.querySelector('.container>.email').innerText = this.getAttribute('email');
    // this.appendChild(content);
  }
  init() {
    const template = document.createElement('template')
    template.setAttribute('id', 'viewer-id')
    template.innerHTML = TEMPLATE
    document.body.appendChild(template)

    const content = template.content.cloneNode(true); // 克隆一份
    this.appendChild(content);

    const viewer = new Viewer(document.getElementById('images'));
    if(this.options){
      viewer.setDefault(options)
    }
  }
}

window.customElements.define('viewer-webcomponent', ViewerWebComponent);
export default ViewerWebComponent;
