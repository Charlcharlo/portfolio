import GitHub from "../../Icons/GitHub";

export default function GitHubLink(props) {
  return (
    <a
      className="desc-link row-between"
      rel="noreferrer"
      target="_blank"
      href={props.link}
    >
      <p>GitHub</p>
      <GitHub />
    </a>
  );
}

GitHubLink.propTypes;
