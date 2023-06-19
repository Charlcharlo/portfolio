import DoubleVertical from "../offsets/DoubleVertical";

export default function SplashLink(props) {
  return (
    <a className="wipe-button" href={props.href}>
      <DoubleVertical
        id={`splash-link-${props.index}`}
        index={props.index}
        sibling={true}
      >
        <div className="link-contents">
          <h2 className="card-title">{props.title}</h2>
        </div>
      </DoubleVertical>
    </a>
  );
}

SplashLink.propTypes;
