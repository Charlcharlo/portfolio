import DoubleVertical from "../offsets/DoubleVertical";
import "../../styles/splash/ImageWindow.css";
import ContactIcon from "../Icons/routers/ContactIcon";
import { contactLinks } from "../../data/links";

export default function ImageWindow() {
  function renderLinks(link) {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href={link.link}
        className="invisibutton"
      >
        <ContactIcon name={link.icon} />
      </a>
    );
  }

  return (
    <div className="image-window">
      <DoubleVertical id="image-window">
        <div className="window-contents">
          <img
            src={`${window.location.origin}/portfolio/images/morningside-color-fix.jpg`}
            alt=""
          />
          <div className="window-title col-between">
            <div>
              <h1>Charl Oosthuizen</h1>
              <h2>Web Developer</h2>
            </div>
            <div className="row-end">{contactLinks.map(renderLinks)}</div>
          </div>
        </div>
      </DoubleVertical>
    </div>
  );
}
