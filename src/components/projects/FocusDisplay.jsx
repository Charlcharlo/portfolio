import { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import { calcOffset } from "../../functions/trig";
import { useFlex, useWidth } from "../context/FlexContext";
import DoubleVertical from "../offsets/DoubleVertical";
import ProjectDescription from "./ProjectDescription";

export default function FocusDisplay(props) {
  const [offset, setOffset] = useState({});

  const flex = useFlex();
  const width = useWidth();

  useEffect(() => {
    const block = document.getElementById("project-description");
    const offset = calcOffset(block.offsetWidth);
    setOffset({
      top: `-${offset}px`,
    });
  }, [flex, width]);

  function renderNavs(item, i) {
    return (
      <div className="tab small" onClick={() => props.chooseItem(i)}>
        <DoubleVertical id={`small-tab-${i}`} index={i} sibling={true}>
          <div
            className={`link-contents ${
              props.currentProject === i && "selected"
            }`}
          >
            <img
              src={`${window.location.origin}/portfolio/images/${item.img}`}
              alt=""
            />
            {!flex && <h3>{item.name}</h3>}
          </div>
        </DoubleVertical>
      </div>
    );
  }

  return (
    <div className="focus-collection col-start">
      <div className="row-between small-nav">
        <div className="row-between" id="project-menu">
          {projects.map(renderNavs)}
        </div>
      </div>
      <ProjectDescription
        id={projects[props.currentProject].id}
        offset={offset}
      />
    </div>
  );
}

FocusDisplay.propTypes;
