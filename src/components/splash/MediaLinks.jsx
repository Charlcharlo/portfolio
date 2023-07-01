import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";
import BottomOnly from "../offsets/BottomOnly";

export default function MediaLinks() {
  return (
    <div className="single-offset">
      <BottomOnly id="media-links">
        <div className="row-between">
          <a className="icon-link" href="">
            <GitHub />
          </a>
          <a className="icon-link" href="">
            <LinkedIn />
          </a>
          <div className="filler-block"></div>
        </div>
      </BottomOnly>
    </div>
  );
}
