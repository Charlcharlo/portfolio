import { useState } from "react";
import "../styles/projects/projects.css";
import BottomOnly from "./offsets/BottomOnly";
import TopOnly from "./offsets/TopOnly";
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
      <div className="single-offset">
        <BottomOnly id="contact-top">
          <div className="row-between">
            <div className="filler-block" />
          </div>
        </BottomOnly>
      </div>
      {focus ? (
        <FocusDisplay
          chooseItem={chooseItem}
          revert={revertToMain}
          currentProject={currentProject}
        />
      ) : (
        <MainDisplay chooseItem={chooseItem} />
      )}
      <div className="single-offset">
        <TopOnly id="contact-top">
          <div className="row-between">
            <div className="filler-block" />
          </div>
        </TopOnly>
      </div>
    </div>
  );
}
