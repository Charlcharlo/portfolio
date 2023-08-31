export default function DescImage({ src, caption }) {
  return (
    <div className="desc-img-group">
      <img src={`${window.location.origin}/portfolio/images/${src}`} alt="" />
      <figcaption>{caption}</figcaption>
    </div>
  );
}

DescImage.propTypes;
