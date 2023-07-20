import { useState } from "react";
import "../styles/projects/projects.css";
import DividerBottom from "./layout/DividerBottom";
import DividerTop from "./layout/DividerTop";
import FocusDisplay from "./projects/FocusDisplay";
import MainDisplay from "./projects/mainDisplay";

export default function Projects() {
  const [focus, setFocus] = useState(false);
  const [currentProject, setCurrenProject] = useState(null);

  function chooseItem(index) {
    setFocus(true);
    setCurrenProject(index);
  }

  function revertToMain() {
    setFocus(false);
    setCurrenProject(null);
  }

  return (
    <div className="full-page col-start" id="projects">
      <h1 className="strong-title project-title">My Projects</h1>
      <DividerTop />
      {focus ? (
        <FocusDisplay
          chooseItem={chooseItem}
          revert={revertToMain}
          currentProject={currentProject}
        />
      ) : (
        <MainDisplay chooseItem={chooseItem} />
      )}
      <DividerBottom />
    </div>
  );
}
