import { useState } from "react";
import Languages from "../Icons/routers/Languages";
import SkillDetails from "./SkillDetails";

export default function SkillItem({ data }) {
  const id = `details-${data.icon}`;

  const [detailsX, setDetailsX] = useState(0);
  const [detailsY, setDetailsY] = useState(0);

  function handleMouseMove(e) {
    const docHeight = window.innerHeight;
    const blockHeight = document.getElementById(id).offsetHeight;
    if (e.clientY + blockHeight > docHeight) {
      setDetailsY(e.clientY - blockHeight - 5);
    } else {
      setDetailsY(e.clientY + 5);
    }
    setDetailsX(e.clientX + 5);
  }

  const detailsStyle = {
    top: detailsY,
    left: detailsX,
  };

  return (
    <div>
      <div className="skill-icon" onMouseMoveCapture={handleMouseMove}>
        <Languages name={data.icon} />
      </div>
      <SkillDetails data={data} positioning={detailsStyle} id={id} />
    </div>
  );
}

SkillItem.propTypes;
