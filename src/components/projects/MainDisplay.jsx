import { projects } from "../../data/projects";
import "../../styles/splash/SplashLinks.css";
import DividerBottom from "../layout/DividerBottom";
import ProjectButton from "./ProjectButton";

export default function MainDisplay(props) {
  function renderTabs(link, i) {
    return (
      <ProjectButton
        key={i}
        data={link}
        index={i}
        id={`top-tab-${i}`}
        handleClick={() => props.chooseItem(i)}
      />
    );
  }

  return (
    <>
      <div className="project-collection">
        <div className="row-between projects-main">
          {projects.map(renderTabs)}
        </div>
      </div>
      <DividerBottom id="projects-bottom" />
    </>
  );
}

MainDisplay.propTypes;
