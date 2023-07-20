import DoubleVertical from "../../offsets/DoubleVertical";

export default function FormButton(props) {
  return (
    <div className="button-wrapper">
      <DoubleVertical id={props.id} sibling={true} index={props.index}>
        <button className="form-button" type={props.type}>
          {props.children}
        </button>
      </DoubleVertical>
    </div>
  );
}

FormButton.propTypes;
