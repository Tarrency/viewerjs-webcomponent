import { useState, useEffect } from 'react'
import './App.css'
import getViewer from "viewerjs-webcomponent"
// import getViewer from "./webcomponent/viewer-webcomponent"

function App() {
  const [options, setOptions] = useState({ toolbar: false, title: false })
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
      {<viewer-webcomponent options={JSON.stringify(options)} images={images}></viewer-webcomponent>}
    </>
  )
}

export default App
