import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import FlexProvider from "./components/context/FlexContext";
import GrayDivider from "./components/offsets/GrayDivider";
import Projects from "./components/Projects";
import Splash from "./components/Splash";
import "./styles/App.css";

function App() {
  return (
    <FlexProvider>
      <Splash />
      <AboutMe />
      <GrayDivider id="gray-top" />
      <Projects />
      <Contact />
    </FlexProvider>
  );
}

export default App;
