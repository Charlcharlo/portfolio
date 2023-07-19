import { projectsBottom, projectsTop } from "../../data/projects";
import "../../styles/splash/SplashLinks.css";
import ProjectButton from "./ProjectButton";

export default function MainDisplay(props) {
  function mapTop(link, i) {
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

  function mapBottom(link, i) {
    return (
      <ProjectButton
        key={i}
        data={link}
        index={i}
        id={`bottom-tab-${i}`}
        handleClick={() => props.chooseItem(i + 2)}
      />
    );
  }

  return (
    <div className="project-collection">
      <div className="row-between section-buttons">
        {projectsTop.map(mapTop)}
      </div>
      <div className="row-between section-buttons">
        {projectsBottom.map(mapBottom)}
      </div>
    </div>
  );
}

MainDisplay.propTypes;
