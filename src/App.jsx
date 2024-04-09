import Experience from "./components/experience/Experience";
import Explore from "./components/explore/Explore";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Sustanibility from "./components/sustanibility/Sustanibility";
import Video from "./components/videoPage/Video";

function App() {
  return <>
  <div className="main">
    <Header/>
    <Video/>
    <Experience/>
    <Sustanibility/>
    <Explore/>
    <br />
    <Info/>
    <Footer/>
    </div>
  </>
}

export default App;