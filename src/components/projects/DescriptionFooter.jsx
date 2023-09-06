import { useSetFocus } from "../context/FocusContext";
import ProjectMenu from "../Icons/ProjectMenu";

export default function DescriptionFooter({ children }) {
  const toggleFocus = useSetFocus();
  function revertToMain() {
    const projects = document.getElementById("projects");
    toggleFocus();
    projects.scrollIntoView();
  }

  return (
    <div className="desc-footer">
      <div className="row-center">{children}</div>
      <div className="row-center">
        <button
          className="project-menu-button row-end"
          onClick={revertToMain}
          title="Revert to main menu"
        >
          <h3 className="project-menu-title">Menu</h3>
          <ProjectMenu />
        </button>
      </div>
    </div>
  );
}

DescriptionFooter.propTypes;
