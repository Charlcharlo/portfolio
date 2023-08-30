import "./BackToTop.css";
import BottomOnly from "../offsets/BottomOnly";

export default function BackToTop({ scrollToTop, visible }) {
  return (
    <>
      <div className={`btt-wrapper ${visible ? "visible" : "invisible"}`}>
        <BottomOnly id="back-to-top">
          <button
            className="back-to-top row-between"
            onClick={scrollToTop}
            title="Back to top"
          >
            <h2 className="section-subtitle">Back to top</h2>
            <img
              className="btt-image"
              src={`${window.location.origin}/portfolio/images/balloon.png`}
            />
          </button>
        </BottomOnly>
      </div>
    </>
  );
}

BackToTop.propTypes;
