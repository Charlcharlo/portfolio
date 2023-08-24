import Download from "../Icons/Download";
import DividerBottom from "../layout/DividerBottom";

export default function CVLink() {
  return (
    <DividerBottom id="splash-bottom">
      <a className="icon-link row-center" href="">
        <p>Download CV </p>
        <Download />
      </a>
    </DividerBottom>
  );
}
