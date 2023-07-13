import SkillRow from "./skillRow";

export default function StackRow({ data }) {
  return (
    <div className="stack-row">
      <div className="stack-title">{data.title}</div>
      <SkillRow data={data} />
    </div>
  );
}

StackRow.propTypes;
