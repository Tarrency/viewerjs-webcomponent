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
        let options = {}

        // 优先使用 options 属性
        const optionsAttr = this.getAttribute('options')
        if (optionsAttr) {
            try {
                // 尝试解析 JSON 字符串
                options = JSON.parse(optionsAttr)
            } catch (e) {
                console.warn('Failed to parse options attribute as JSON:', e)
                // 如果解析失败，尝试作为全局变量名获取
                if (typeof window[optionsAttr] === 'object') {
                    options = window[optionsAttr]
                }
            }
        } else {
            // 如果没有 options 属性，则从其他属性构建配置
            for (const i of this.attributes) {
                if (!i.name.includes('-') && i.name !== 'images' && i.name !== 'options') {
                    // 尝试解析为 JSON，如果失败则作为字符串处理
                    try {
                        options[i.name] = JSON.parse(i.value)
                    } catch (e) {
                        // 对于布尔值特殊处理
                        if (i.value === 'true') {
                            options[i.name] = true
                        } else if (i.value === 'false') {
                            options[i.name] = false
                        } else if (!isNaN(i.value)) {
                            options[i.name] = Number(i.value)
                        } else {
                            options[i.name] = i.value
                        }
                    }
                }
            }
        }

        // 检查是否有直接传递的 options 对象（通过 Vue/React 绑定）
        if (this._options && typeof this._options === 'object') {
            options = { ...options, ...this._options }
        }

        // 初始化 viewer
        this.initializeViewer(options)
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
        let options = { ...initialOptions }

        // 优先使用直接传递的 options 对象
        if (this._options && typeof this._options === 'object') {
            options = { ...options, ...this._options }
        } else {
            // 回退到属性解析
            const optionsAttr = this.getAttribute('options')
            if (optionsAttr) {
                try {
                    const parsedOptions = JSON.parse(optionsAttr)
                    options = { ...options, ...parsedOptions }
                } catch (e) {
                    console.warn('Failed to parse options attribute as JSON:', e)
                    if (typeof window[optionsAttr] === 'object') {
                        options = { ...options, ...window[optionsAttr] }
                    }
                }
            }
        }

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
    get(target, prop) {
        // console.log(`[get] ${prop}`) // 打印访问日志
        return target[prop]
    },
    set(target, prop, value) {
        // console.log(`[set] ${prop} =`, value) // 打印修改日志
        target[prop] = value
        return true
    }
})

export default getViewer
