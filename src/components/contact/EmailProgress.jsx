import "../../styles/contact/widget.css";
import Done from "../Icons/Done";
import ProgressLoop from "../Icons/ProgressLoop";
import BottomOnly from "../offsets/BottomOnly";

export default function EmailProgress(props) {
  return (
    <div className="email-widget">
      <BottomOnly id="widget">
        {props.done ? (
          <div className="widget-contents row-between done">
            <p>Sent</p>
            <Done />
          </div>
        ) : (
          <div className="widget-contents row-between">
            <p>Sending</p>
            <ProgressLoop />
          </div>
        )}
      </BottomOnly>
    </div>
  );
}

EmailProgress.propTypes;
