import TopOnly from "../offsets/TopOnly";

export default function DividerBottom({ children, id }) {
  return (
    <div className="single-offset">
      <TopOnly id={id}>
        <div className="row-between">
          <div className="filler-block" />
          {children}
        </div>
      </TopOnly>
    </div>
  );
}

DividerBottom.propTypes;
