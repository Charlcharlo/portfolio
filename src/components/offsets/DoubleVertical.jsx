import { useEffect, useState } from "react";

export default function DoubleVertical(props) {
  const [mask, setMask] = useState({});
  const [offset, setOffset] = useState({});
  const angle = 0.0261799;

  function calcMask(width) {
    const offset = Math.tan(angle) * width;
    const offsetPx = `${offset}px`;
    return {
      clipPath: `polygon(0 ${offsetPx}, 100%  0, 100% calc(100% - ${offsetPx}), 0 100%)`,
    };
  }

  function offsetSiblings(i, width) {
    const offset = -1 * (Math.tan(angle) * (width + 10) * i);
    const offsetPx = `${offset}px`;
    return {
      marginTop: offsetPx,
    };
  }

  useEffect(() => {
    const block = document.getElementById(props.id);
    const width = block.offsetWidth;
    const mask = calcMask(width);
    setMask(mask);
    if (props.sibling) {
      const offset = offsetSiblings(props.index, width);
      setOffset(offset);
    }
  }, [props]);

  return (
    <div className="offset-border" id={props.id} style={{ ...mask, ...offset }}>
      <div style={mask}>{props.children}</div>
    </div>
  );
}

DoubleVertical.propTypes;
