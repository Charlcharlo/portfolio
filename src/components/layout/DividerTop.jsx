import BottomOnly from "../offsets/BottomOnly";

export default function DividerTop({ children }) {
  return (
    <div className="single-offset">
      <BottomOnly id="contact-top">
        <div className="row-between">
          {children}
          <div className="filler-block" />
        </div>
      </BottomOnly>
    </div>
  );
}

DividerTop.propTypes;
