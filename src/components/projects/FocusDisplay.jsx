import { useEffect, useState } from "react";
import { projectsBottom, projectsTop } from "../../data/projects";
import { calcOffset } from "../../functions/trig";
import { useFlex } from "../context/FlexContext";
import ProjectMenu from "../Icons/ProjectMenu";
import DoubleVertical from "../offsets/DoubleVertical";
import ProjectDescription from "./ProjectDescription";

export default function FocusDisplay(props) {
  const [offset, setOffset] = useState({});
  const [menuOffset, setMenuOffset] = useState({});

  const flex = useFlex();

  const allProjects = [...projectsTop, ...projectsBottom];

  function renderNavs(item, i) {
    return (
      <div className="tab small" onClick={() => props.chooseItem(i)}>
        <DoubleVertical id={`small-tab-${i}`} index={i} sibling={true}>
          <div
            className={`link-contents ${
              props.currentProject === i && "selected"
            }`}
          >
            <img src={`${window.location.origin}/images/${item.img}`} alt="" />
            {!flex && <h3>{item.name}</h3>}
          </div>
        </DoubleVertical>
      </div>
    );
  }

  useEffect(() => {
    let block = document.getElementById("project-description");
    setOffset({
      bottom: `${calcOffset(block.offsetWidth)}px`,
    });
    block = document.getElementById("project-menu");
    setMenuOffset({
      bottom: `${calcOffset(block.offsetWidth + 10)}px`,
    });
  }, []);

  return (
    <div className="focus-collection col-start">
      <div className="row-between small-nav">
        <div className="row-between" id="project-menu">
          {allProjects.map(renderNavs)}
        </div>
        <div className="project-menu-button-container" style={menuOffset}>
          <DoubleVertical id="project-menu-button">
            <button className="project-menu-button" onClick={props.revert}>
              <ProjectMenu />
            </button>
          </DoubleVertical>
        </div>
      </div>
      <ProjectDescription offset={offset} />
    </div>
  );
}

FocusDisplay.propTypes;
