import Languages from "../Icons/routers/Languages";
import BottomOnly from "../offsets/BottomOnly";

export default function SkillDetails(props) {
  return (
    <div
      className={`skill-details ${props.modal && "modal-details"}`}
      style={props.positioning ? props.positioning : {}}
    >
      <BottomOnly id={props.id}>
        <div className="details-header row-between">
          <div className="row-start">
            <Languages name={props.data.icon} />
            <h2>{props.data.name}</h2>
          </div>
        </div>
      </BottomOnly>
    </div>
  );
}

SkillDetails.propTypes;
