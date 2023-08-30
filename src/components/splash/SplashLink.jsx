import DoubleVertical from "../offsets/DoubleVertical";

export default function SplashLink(props) {
  return (
    <a className="wipe-button" href={props.data.url}>
      <DoubleVertical
        id={`splash-link-${props.index}`}
        index={props.index}
        sibling={true}
      >
        <div className="link-contents">
          <img
            src={`${window.location.origin}/portfolio/images/${props.data.img}`}
            alt=""
          />
          <h2 className="card-title">{props.data.name}</h2>
        </div>
      </DoubleVertical>
    </a>
  );
}

SplashLink.propTypes;
