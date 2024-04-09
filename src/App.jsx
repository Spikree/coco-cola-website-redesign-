import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sustanibility from "./components/sustanibility/Sustanibility";
import Video from "./components/videoPage/Video";

function App() {
  return <>
  <div className="main">
    <Header/>
    <Video/>
    <Experience/>
    <Sustanibility/>
    <Footer/>
    </div>
  </>
}

export default App;