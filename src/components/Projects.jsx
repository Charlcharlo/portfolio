import { useState } from "react";
import "../styles/projects/projects.css";
import { useFlex } from "./context/FlexContext";
import { useFocus, useSetFocus } from "./context/FocusContext";
import ProjectMenu from "./Icons/ProjectMenu";
import DividerTop from "./layout/DividerTop";
import FocusDisplay from "./projects/FocusDisplay";
import MainDisplay from "./projects/mainDisplay";

export default function Projects() {
  const focus = useFocus();
  const toggleFocus = useSetFocus();
  const [currentProject, setCurrenProject] = useState(null);
  const flex = useFlex();

  function chooseItem(index) {
    !focus && toggleFocus();
    setCurrenProject(index);
  }

  function revertToMain() {
    toggleFocus();
  }

  return (
    <div className="full-page col-start" id="projects">
      <div className="row-between">
        <h1 className="strong-title project-title">My Projects</h1>
        {focus && (
          <button
            className="project-menu-button row-end"
            onClick={revertToMain}
            title="Revert to main menu"
          >
            {!flex && <h3 className="project-menu-title">Menu</h3>}
            <ProjectMenu />
          </button>
        )}
      </div>
      <DividerTop id="projects-top" />
      {focus ? (
        <FocusDisplay chooseItem={chooseItem} currentProject={currentProject} />
      ) : (
        <MainDisplay chooseItem={chooseItem} />
      )}
    </div>
  );
}
