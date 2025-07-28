import { useState, useEffect } from 'react'
import './App.css'
import getViewer from "viewerjs-webcomponent"

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
