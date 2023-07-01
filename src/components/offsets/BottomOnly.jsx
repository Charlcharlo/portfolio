import { useEffect, useState } from "react";
import { calcOffset } from "../../functions/trig";
import { useFlex } from "../context/FlexContext";

export default function BottomOnly(props) {
  const [mask, setMask] = useState({});
  const flex = useFlex();

  function calcMask(width) {
    const offset = calcOffset(width);
    return {
      clipPath: `polygon(0 0, 100%  0, 100% calc(100% - ${offset}px), 0 100%)`,
    };
  }

  useEffect(() => {
    const block = document.getElementById(props.id);
    const width = block.offsetWidth;
    const mask = calcMask(width);
    setMask(mask);
  }, [props.id, flex]);

  return (
    <div className="offset-border" id={props.id} style={{ ...mask }}>
      <div style={mask}>{props.children}</div>
    </div>
  );
}

BottomOnly.propTypes;
