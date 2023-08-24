import DoubleVertical from "../../offsets/DoubleVertical";

export default function TextArea(props) {
  return (
    <div className="message-body col-start">
      <label className="input-label" htmlFor={props.name}>
        {props.label}
      </label>
      <div className="input-wrapper">
        <DoubleVertical id={props.name} noOffset={true}>
          <textarea className="contact-input" name={props.name} />
        </DoubleVertical>
      </div>
    </div>
  );
}

TextArea.propTypes;
