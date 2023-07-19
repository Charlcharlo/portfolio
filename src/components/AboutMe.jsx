import "../styles/about/about.css";
import StackContainer from "./about/StackContainer";
import { useFlex } from "./context/FlexContext";

export default function AboutMe() {
  const flex = useFlex();
  return (
    <div className="full-page" id="about-me">
      {!flex && (
        <img
          className="about-img"
          src={`${window.location.origin}/images/charl-peace.png`}
        />
      )}
      <div className="col-start about-details">
        <h1 className="section-title">About Me</h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ab voluptatibus nam corrupti ratione saepe voluptatum cumque
          blanditiis. Pariatur, nisi sit sed amet excepturi quasi quibusdam
          veniam nemo illo similique? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Velit, alias? Odio praesentium labore asperiores a
          rerum? Omnis, doloribus id quod praesentium dicta excepturi quibusdam
          recusandae eos magni, tempora sapiente! Inventore!
        </p>
        <StackContainer />
      </div>
    </div>
  );
}
