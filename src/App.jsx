import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import FlexProvider from "./components/context/FlexContext";
import Projects from "./components/Projects";
import Splash from "./components/Splash";
import "./styles/App.css";

function App() {
  return (
    <FlexProvider>
      <Splash />
      <AboutMe />
      <Projects />
      <Contact />
    </FlexProvider>
  );
}

export default App;
