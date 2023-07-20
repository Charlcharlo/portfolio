import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";
import DividerTop from "../layout/DividerTop";

export default function MediaLinks() {
  return (
    <DividerTop>
      <a className="icon-link" href="">
        <GitHub />
      </a>
      <a className="icon-link" href="">
        <LinkedIn />
      </a>
    </DividerTop>
  );
}
