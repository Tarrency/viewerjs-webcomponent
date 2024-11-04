/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2024-10-29 16:02:11
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2024-11-04 16:54:14
 * @FilePath: \viewerjs-webcomponent\examples\react-demo\src\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState, useEffect } from 'react'
import './App.css'
import getViewer from '/src/webcomponent/viewer-webcomponent.js'

function App() {
  const [options, setOptions] = useState({ toolbar: true, title: false })
  const [images, setImages] = useState([
    "src/assets/tibet-1.jpg",
    "src/assets/tibet-2.jpg",
    "src/assets/tibet-3.jpg",
    "src/assets/tibet-4.jpg",
    "src/assets/tibet-8.jpg",
    "src/assets/tibet-9.jpg",
    "src/assets/tibet-7.jpg",
    "src/assets/tibet-6.jpg",
    "src/assets/tibet-5.jpg",
  ])
  const [viewer, setViewer] = useState(null)

  useEffect(() => {
    setViewer(getViewer.viewer)
  }, [getViewer])
    viewer?.show()

  return (
    <>
      {<viewer-webcomponent {...options} images={images}> <span slot="slotName">这是真正的slot</span></viewer-webcomponent>}
    </>
  )
}

export default App
