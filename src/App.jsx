import { useRoutes } from "react-router"
import pages from "~react-pages"
import "./styles/main.sass"
import VideoBackground from "./components/video-background/video-background"
import videoURL from "./assets/videos/background.mp4"

function App() {

  return (
    <>
      {useRoutes(pages)}
      <VideoBackground src={videoURL} />
    </>
  )
}

export default App
