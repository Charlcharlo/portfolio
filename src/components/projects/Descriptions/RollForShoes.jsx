import DoubleVertical from "../../offsets/DoubleVertical";
import DescriptionWrapper from "../DescriptionWrapper";
import GitHubLink from "../Links/GitHubLink";
import SiteLink from "../Links/SiteLink";
import "./rollForShoes.css";

export default function RollForShoes() {
  return (
    <DescriptionWrapper id="roll4shoes-offset">
      <div className="purple-border">
        <DoubleVertical id="purple-border">
          <div className="description-body">
            <div className="shoes-header">
              <h1 className="shoe-title">Roll For Shoes</h1>
            </div>
            <div className="shoes-body">
              <div className="row-start desc-links">
                <GitHubLink />
                <SiteLink />
              </div>
              <h2 className="shoe-subtitle">About</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                omnis vero et impedit, suscipit nisi! Voluptatem repellendus
                eaque velit consequuntur repellat quo voluptas dolorem modi
                sequi. Esse officiis nostrum amet.
              </p>
            </div>
          </div>
        </DoubleVertical>
      </div>
    </DescriptionWrapper>
  );
}
