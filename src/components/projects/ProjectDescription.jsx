import "../../styles/projects/description.css";
import DoubleVertical from "../offsets/DoubleVertical";

export default function ProjectDescription(props) {
  return (
    <div
      className="project-description"
      id="project-description"
      style={props.offset}
    >
      <DoubleVertical id="description-offset">
        <div className={`description-body`}>
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            excepturi quas, eligendi voluptate hic temporibus a inventore? Esse,
            quis, fugiat sequi assumenda id neque molestias illum eligendi
            accusantium quas numquam?
          </p>
        </div>
      </DoubleVertical>
    </div>
  );
}

ProjectDescription.propTypes;
