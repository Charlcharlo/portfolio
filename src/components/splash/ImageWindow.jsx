import DoubleVertical from "../offsets/DoubleVertical";
import "../../styles/splash/ImageWindow.css";
import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";
import Email from "../Icons/Email";

export default function ImageWindow() {
  return (
    <div className="image-window">
      <DoubleVertical id="image-window">
        <div className="window-contents">
          <img
            src={`${window.location.origin}/images/morningside-color-fix.jpg`}
            alt=""
          />
          <div className="window-title col-between">
            <div>
              <h1>Charl Oosthuizen</h1>
              <h2>Web Developer</h2>
            </div>
            <div className="row-end">
              <a className="invisibutton">
                <GitHub />
              </a>
              <a className="invisibutton">
                <LinkedIn />
              </a>
              <a className="invisibutton">
                <Email />
              </a>
            </div>
          </div>
        </div>
      </DoubleVertical>
    </div>
  );
}
