/*
 * @Author: Tarrency 760216236@qq.com
 * @Date: 2024-10-21 17:46:08
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2024-10-30 11:15:00
 * @FilePath: /vanilla-demo/src/js/template.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// const innerTemplate =
//   '<ul id="images">' + '<li><img src="src/assets/tibet-1.jpg"></li>' + '</ul>'
const innerTemplate =
  // '<div id="viewer-div">'+ '<ul id="ul-images">' + '<slot name="slotName">这是template中的slot</slot>'+ '</ul>' + '</div>'
  '<slot name="slotName">这是template的slot</slot>' + '<ul id="ul-images">' + '</ul>'
//   const innerTemplate =
//     '<ul id="images">'
//     + '<li><img src="src/assets/tibet-1.jpg"></li>'
//     + '</ul>'
export default innerTemplate
