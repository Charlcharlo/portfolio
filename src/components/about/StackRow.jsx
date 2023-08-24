import { useState } from "react";
import Minus from "../Icons/Minus";
import Plus from "../Icons/Plus";
import SkillRow from "./skillRow";

export default function StackRow({ data }) {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((prev) => {
      return !prev;
    });
  }

  return (
    <div className="stack-row" id={data.title}>
      <button className="stack-title row-between" onClick={toggleShow}>
        {data.title}
        <div className="collapse-buton">{show ? <Minus /> : <Plus />}</div>
      </button>
      <SkillRow data={data} show={show} />
    </div>
  );
}

StackRow.propTypes;
