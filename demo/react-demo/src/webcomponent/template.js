// 模板文件
// < template id = "viewer-id" >
//     <div id="viewer-image">
//         <div><img src="src/assets/tibet-1.jpg" alt="1" title="1"></div>
//         <div><img src="src/assets/tibet-2.jpg" alt="2" title="2"></div>
//     </div>
// </template >
const styleStr = '<style>' + '.container {'
    + 'display: grid;'
    + 'grid-template-columns: repeat(3, 33.33%);'
    + 'grid-template-rows: 1fr 1fr auto;'
    + 'img {'
    + 'width: 100%;'
    + 'height: 100%;'
    + 'max-height: 100%;'
    + '}'
    + '}'
    + '</style>'

// const slotStr = '<slot name="slotName"></slot>'

// 非shadowdom模式可引入css文件
// const innerTemplate = '<div id="viewer-container" class="container">' + '</div>'
// 开启shadowdom则需要将样式以字符串形式写入模板
const innerTemplate = '<div id="viewer-container" class="container">' + '</div>' + styleStr
// // 加入slot
// const innerTemplate = '<div id="viewer-container" class="container">' + '</div>' + styleStr + slotStr
export default innerTemplate