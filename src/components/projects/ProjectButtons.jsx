import { projectsBottom, projectsTop } from "../../data/projects";
import "../../styles/splash/SplashLinks.css";
import ProjectButton from "./ProjectButton";

export default function ProjectButtons() {
  function mapTop(link, i) {
    return <ProjectButton key={i} data={link} index={i} id={`top-tab-${i}`} />;
  }

  function mapBottom(link, i) {
    return (
      <ProjectButton key={i} data={link} index={i} id={`bottom-tab-${i}`} />
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
