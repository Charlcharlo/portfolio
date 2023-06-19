import DoubleVertical from "../offsets/DoubleVertical";
import "../../styles/splash/ImageWindow.css";

export default function ImageWindow() {
  return (
    <div className="image-window">
      <DoubleVertical id="image-window">
        <div className="window-contents">
          <img
            src={`${window.location.origin}/images/morningside-color-fix.jpg`}
            alt=""
          />
        </div>
      </DoubleVertical>
    </div>
  );
}
