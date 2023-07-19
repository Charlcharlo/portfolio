import { useState } from "react";
import Languages from "../Icons/Languages";
import SkillDetails from "./SkillDetails";

export default function SkillItem({ data }) {
  const id = `details-${data.icon}`;

  const [showDetails, setShowDetails] = useState(false);
  const [detailsX, setDetailsX] = useState(0);
  const [detailsY, setDetailsY] = useState(0);
  // const [displayAbove, setDisplayAbove] = useState(false);

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
    // visibility: showDetails ? "visible" : "hidden",
    top: detailsY,
    left: detailsX,
  };

  return (
    <div>
      <div
        className="skill-icon"
        onMouseEnter={() => {
          setShowDetails(true);
        }}
        onMouseMoveCapture={handleMouseMove}
        onMouseLeave={() => setShowDetails(false)}
      >
        <Languages name={data.icon} />
      </div>
      <SkillDetails data={data} positioning={detailsStyle} id={id} />
    </div>
  );
}

SkillItem.propTypes;
