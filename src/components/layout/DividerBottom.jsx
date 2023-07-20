import TopOnly from "../offsets/TopOnly";

export default function DividerBottom({ children }) {
  return (
    <div className="single-offset">
      <TopOnly id="contact-top">
        <div className="row-between">
          <div className="filler-block" />
          {children}
        </div>
      </TopOnly>
    </div>
  );
}

DividerBottom.propTypes;
