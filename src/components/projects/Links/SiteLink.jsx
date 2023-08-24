import Globe from "../../Icons/Globe";

export default function SiteLink(props) {
  return (
    <a
      className="desc-link row-between"
      rel="noreferrer"
      target="_blank"
      href={props.link}
    >
      <p>View Site</p>
      <Globe />
    </a>
  );
}

SiteLink.propTypes;
