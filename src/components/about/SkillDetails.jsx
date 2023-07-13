import Languages from "../Icons/Languages";
import BottomOnly from "../offsets/BottomOnly";

export default function SkillDetails(props) {
  return (
    <div className="skill-details" style={props.positioning}>
      <BottomOnly id={props.id}>
        <div className="details-header row-start">
          <Languages name={props.data.icon} />
          <h2>{props.data.name}</h2>
        </div>
        <div className="details-body">
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            delectus facere laudantium, assumenda dolorem nostrum consectetur
            aperiam saepe velit perspiciatis numquam tempora minus. Dolorem
            deleniti eligendi rem! Cupiditate, est facilis.
          </p>
        </div>
      </BottomOnly>
    </div>
  );
}

SkillDetails.propTypes;
