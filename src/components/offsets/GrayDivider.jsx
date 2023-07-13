import { useEffect, useState } from "react";
import { calcOffset } from "../../functions/trig";

export default function GrayDivider(props) {
  const [calculatedHeight, setCalculatedHeight] = useState({});
  useEffect(() => {
    const block = document.getElementById(props.id);
    const width = block.offsetWidth;
    const height = calcOffset(width);
    setCalculatedHeight({
      height: `${height + 40}px`,
    });
  }, [props.id]);
  return (
    <div
      className={`divider ${props.reverse && "divider-reverse"}`}
      id={props.id}
      style={calculatedHeight}
    />
  );
}

GrayDivider.propTypes;
