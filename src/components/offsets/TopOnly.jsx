import { useEffect, useState } from "react";
import { calcOffset } from "../../functions/trig";
import { useFlex, useWidth } from "../context/FlexContext";

export default function TopOnly(props) {
  const [mask, setMask] = useState({});
  const [offset, setOffset] = useState({});
  const flex = useFlex();
  const width = useWidth();

  function calcMask(width) {
    const offset = calcOffset(width);
    return {
      clipPath: `polygon(0 ${offset}px, 100%  0, 100% 100%, 0 100%)`,
    };
  }

  useEffect(() => {
    const block = document.getElementById(props.id);
    const width = block.offsetWidth;
    const mask = calcMask(width);
    setMask(mask);
    const offset = calcOffset(width);
    setOffset({
      marginTop: `-${offset + 10}px`,
    });
  }, [props.id, flex, width, props.index]);

  return (
    <div className="offset-border" id={props.id} style={{ ...mask, ...offset }}>
      <div style={mask}>{props.children}</div>
    </div>
  );
}

TopOnly.propTypes;
