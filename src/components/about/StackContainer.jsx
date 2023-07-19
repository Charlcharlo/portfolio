import { techStack } from "../../data/stack";
import { useFlex } from "../context/FlexContext";
import BottomOnly from "../offsets/BottomOnly";
import StackRow from "./StackRow";

export default function StackContainer() {
  const flex = useFlex();

  function renderRows(row, i) {
    return <StackRow data={row} key={i} />;
  }

  return (
    <div>
      <div className="row-between flex-title">
        <h2 className="section-subtitle">Tech Stack</h2>
        {flex && (
          <img
            className="flexed-about-img"
            src={`${window.location.origin}/images/charl-peace.png`}
          />
        )}
      </div>
      <div className="stack-container">
        <div>{techStack.map(renderRows)}</div>
        <BottomOnly id="tech-stack">
          <div className="stack-filler" />
        </BottomOnly>
      </div>
    </div>
  );
}
