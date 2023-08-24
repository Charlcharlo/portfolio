import BottomOnly from "../offsets/BottomOnly";

export default function DividerTop({ children, id }) {
  return (
    <div className="single-offset">
      <BottomOnly id={id}>
        <div className="row-between">
          {children}
          <div className="filler-block" />
        </div>
      </BottomOnly>
    </div>
  );
}

DividerTop.propTypes;
