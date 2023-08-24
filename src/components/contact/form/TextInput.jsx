import DoubleVertical from "../../offsets/DoubleVertical";

export default function TextInput(props) {
  return (
    <div>
      <label className="input-label" htmlFor={props.name}>
        {props.label}
      </label>
      <div className="input-wrapper">
        <DoubleVertical id={props.name} noOffset={true}>
          <input className="contact-input" name={props.name} />
        </DoubleVertical>
      </div>
    </div>
  );
}

TextInput.propTypes;
