/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-07-28 17:47:12
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-08-14 11:24:57
 * @FilePath: \viewerjs-webcomponent\demo\vue-demo\src\webcomponent\viewer-webcomponent.js
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

        const optionsStr = this.getAttribute('options')
        if (typeof optionsStr === 'string') {
            this._options = JSON.parse(optionsStr)
        }
        // 初始化 viewer
        this.initializeViewer(this._options)
    }

    // 设置组件的初始化状态
    constructor() {
        super()
        // 创建shadowdom，不创建则注释此两行
        const shadow = this.attachShadow({ mode: 'open' })
        this.shadow = shadow
    }

    // 添加 options 的 setter 来接收 Vue/React 传递的对象
    set options(value) {
        this._options = value
        // 如果组件已经初始化，重新初始化 viewer
        if (this.shadow && this.shadow.getElementById('viewer-container')) {
            this.initializeViewer()
        }
    }

    get options() {
        return this._options
    }

    // 初始化 viewer 的方法
    initializeViewer(initialOptions = {}) {
        const options = { ...initialOptions }

        // 销毁旧的 viewer 实例
        if (this._viewer) {
            this._viewer.destroy()
        }

        // 创建新的 viewer 实例
        this._viewer = new Viewer(this.shadowRoot.getElementById('viewer-container'), options)
        getViewer.viewer = this._viewer
    }

    // 处理webcomponent模板下的图片html
    imageCount(imageArr) {
        const preInnerTemplate = innerTemplate.split('</div>').filter(Boolean)
        if (imageArr && imageArr.length) {
            for (let i = 0; i < imageArr.length; i++) {
                preInnerTemplate.push(`<div><img src="${imageArr[i]}" alt="${i + 1}" title="${i + 1}" part="img"></div>`)
            }
        }
        return preInnerTemplate.join('') + '</div>'
    }
}

// 定义webcomponent组件，向浏览器绑定自定义组件与新创建的类
if (!document.querySelector('viewer-webcomponent')) {
    customElements.define('viewer-webcomponent', ViewerWebComponent)
}

// 创建Proxy全局变量，用于后续暴露viewerjs的api
const getViewer = new Proxy({}, {
    // get(target, prop) {
    //     // console.log(`[get] ${prop}`) // 打印访问日志
    //     return target[prop]
    // },
    // set(target, prop, value) {
    //     // console.log(`[set] ${prop} =`, value) // 打印修改日志
    //     target[prop] = value
    //     return true
    // }
})

export default getViewer
