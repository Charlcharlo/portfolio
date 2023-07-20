import DoubleVertical from "../../offsets/DoubleVertical";

export default function TextArea(props) {
  return (
    <div className="message-body col-start">
      <label className="input-label" htmlFor={props.name}>
        Lable
      </label>
      <div className="input-wrapper">
        <DoubleVertical id={props.id} noOffset={true}>
          <textarea className="contact-input" />
        </DoubleVertical>
      </div>
    </div>
  );
}

TextArea.propTypes;
