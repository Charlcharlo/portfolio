import "../styles/projects/projects.css";
import TopOnly from "./offsets/TopOnly";
import FocusDisplay from "./projects/FocusDisplay";
import MainDisplay from "./projects/mainDisplay";

export default function Projects() {
  const focus = false;
  return (
    <div className="full-page" id="projects">
      <h1 className="strong-title project-title">My Projects</h1>
      {focus ? <FocusDisplay /> : <MainDisplay />}
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
