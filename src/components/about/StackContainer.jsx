import { techStack } from "../../data/stack";
import BottomOnly from "../offsets/BottomOnly";
import StackRow from "./StackRow";

export default function StackContainer() {
  function renderRows(row, i) {
    return <StackRow data={row} key={i} />;
  }

  return (
    <div>
      <h2 className="section-subtitle">Tech Stack</h2>
      <div className="stack-container">
        <div>{techStack.map(renderRows)}</div>
        <BottomOnly id="tech-stack">
          <div className="stack-filler" />
        </BottomOnly>
      </div>
    </div>
  );
}
