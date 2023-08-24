import { useEffect, useState } from "react";
import { calcOffset } from "../../functions/trig";
import { useFlex, useWidth } from "../context/FlexContext";

export default function DoubleVertical(props) {
  const [mask, setMask] = useState({});
  const [offset, setOffset] = useState({});
  const flex = useFlex();
  const width = useWidth();

  function calcMask(width) {
    const offset = calcOffset(width);
    return {
      clipPath: `polygon(0 ${offset}px, 100%  0, 100% calc(100% - ${offset}px), 0 100%)`,
    };
  }

  function offsetSiblings(i, width) {
    const offset = flex ? calcOffset(width) * i : calcOffset(width + 10) * i;
    return {
      marginTop: `-${offset}px`,
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
    } else {
      const offset = calcOffset(width);
      setOffset(
        flex
          ? {
              marginTop: `calc(10px - ${offset}px)`,
            }
          : {
              marginTop: `calc(10px - ${offset}px)`,
              height: `calc(100% + ${offset}px - 10px)`,
            }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, flex, width]);

  return (
    <div
      className="offset-border"
      id={props.id}
      style={props.noOffset ? mask : { ...mask, ...offset }}
    >
      <div style={mask}>{props.children}</div>
    </div>
  );
}

DoubleVertical.propTypes;
