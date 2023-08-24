import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import FlexProvider from "./components/context/FlexContext";
import ChameleonScroll from "./components/layout/ChameleonScroll";
import Projects from "./components/Projects";
import Splash from "./components/Splash";
import "./styles/App.css";

function App() {
  return (
    <FlexProvider>
      <ChameleonScroll>
        <Splash />
        <AboutMe />
        <Projects />
        <Contact />
      </ChameleonScroll>
    </FlexProvider>
  );
}

export default App;
