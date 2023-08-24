import "../../styles/projects/description.css";
import DividerBottom from "../layout/DividerBottom";
import FreeSolar from "./Descriptions/FreeSolar";
import Pokedex from "./Descriptions/Pokedex";
import RollForShoes from "./Descriptions/RollForShoes";
import ThisSite from "./Descriptions/ThisSite";

export default function ProjectDescription(props) {
  return (
    <div
      className="description-wrapper"
      id="project-description"
      style={props.offset}
    >
      {props.id === "pokedex" ? (
        <Pokedex />
      ) : props.id === "roll4shoes" ? (
        <RollForShoes />
      ) : props.id === "freeSolar" ? (
        <FreeSolar />
      ) : props.id === "portfolio" ? (
        <ThisSite />
      ) : (
        <div className="description-body" />
      )}
      <DividerBottom id="projects-bottom" />
    </div>
  );
}

ProjectDescription.propTypes;
