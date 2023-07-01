import Download from "../Icons/Download";
import TopOnly from "../offsets/TopOnly";

export default function CVLink() {
  return (
    <div className="single-offset">
      <TopOnly id="cv-link">
        <div className="row-between">
          <div className="filler-block"></div>
          <a className="icon-link row-center" href="">
            <p>Download CV </p>
            <Download />
          </a>
        </div>
      </TopOnly>
    </div>
  );
}
