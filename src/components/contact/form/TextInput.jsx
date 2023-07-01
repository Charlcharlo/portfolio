import DoubleVertical from "../../offsets/DoubleVertical";

export default function TextInput(props) {
  return (
    <div>
      <label className="input-label" htmlFor={props.name}>
        Lable
      </label>
      <div className="input-wrapper">
        <DoubleVertical id={props.id} noOffset={true}>
          <input className="contact-input" />
        </DoubleVertical>
      </div>
    </div>
  );
}

TextInput.propTypes;
