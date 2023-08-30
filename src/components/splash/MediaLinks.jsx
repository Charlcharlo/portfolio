import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";
import DividerTop from "../layout/DividerTop";

export default function MediaLinks() {
  return (
    <DividerTop id="splash-top">
      <a
        className="icon-link"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Charlcharlo"
      >
        <GitHub />
      </a>
      <a className="icon-link" target="_blank" rel="noreferrer" href="">
        <LinkedIn />
      </a>
    </DividerTop>
  );
}
