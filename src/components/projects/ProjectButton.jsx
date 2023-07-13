import DoubleVertical from "../offsets/DoubleVertical";

export default function ProjectButton(props) {
  return (
    <div className="tab" href={props.data.url}>
      <DoubleVertical id={props.id} index={props.index} sibling={true}>
        <div className="link-contents">
          <img
            src={`${window.location.origin}/images/${props.data.img}`}
            alt=""
          />
          <h2>{props.data.name}</h2>
        </div>
      </DoubleVertical>
    </div>
  );
}

ProjectButton.propTypes;
