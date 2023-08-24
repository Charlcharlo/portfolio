import SkillItem from "./SkillItem";

export default function SkillRow({ data, show }) {
  const hidden = {
    visibility: "hidden",
    position: "absolute",
  };

  function renderSkills(data, i) {
    return <SkillItem data={data} key={i} />;
  }

  return (
    <div
      className="skill-row row-between"
      style={!show ? hidden : {}}
      id={`${data.title}-skills`}
    >
      <div className="skills blue">
        <div className="skills-division-title">Fluent</div>
        <div className="row-start">{data.fluent.map(renderSkills)}</div>
      </div>
      <div className="skills green">
        <div className="skills-division-title">Comfortable</div>
        <div className="row-start">{data.comfortable.map(renderSkills)}</div>
      </div>
      <div className="skills yellow">
        <div className="skills-division-title">Beginner</div>
        <div className="row-start">{data.beginner.map(renderSkills)}</div>
      </div>
    </div>
  );
}

SkillRow.propTypes;
