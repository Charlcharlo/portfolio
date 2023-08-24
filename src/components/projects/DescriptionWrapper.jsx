import DoubleVertical from "../offsets/DoubleVertical";

export default function DescriptionWrapper(props) {
  return (
    <div className="project-description" id={`${props.id}-wrapper`}>
      <DoubleVertical id={props.id}>{props.children}</DoubleVertical>
    </div>
  );
}

DescriptionWrapper.propTypes;
