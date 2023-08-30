import "./ThisSite.css";
import DividerBottom from "../../layout/DividerBottom";
import DescriptionWrapper from "../DescriptionWrapper";
import GitHub from "../../Icons/GitHub";
import DoubleVertical from "../../offsets/DoubleVertical";

export default function ThisSite() {
  return (
    <DescriptionWrapper id="this-site">
      <div className="portfolio-body">
        <h1 className="strong-title">This Site</h1>
        <div className="button-wrapper">
          <DoubleVertical id="this-site-gh">
            <a className="portfolio-link">
              <div className="row-between button-contents submit">
                <p>GitHub</p>
                <GitHub />
              </div>
            </a>
          </DoubleVertical>
        </div>
        <DividerBottom id="site-desc-one" />
        <h2 className="section-subtitle">About</h2>
        <p className="paragraph">
          For my portfolio, I wanted to make a site that would stand out from
          the rest, so I opted for a colourful design scheme and used clip paths
          as angles are not something you often see in web design. For my color
          pallet I chose to go with a square as this would give me a decent
          range of colors that have good harmony with each other. I used the
          same color scheme when creating the images for the site so that
          nothing would look out of place.
        </p>
        <p className="paragraph">
          I chose to break up the overall template of the page for the project
          descriptions you see in this page. I wanted each of them to represent
          the design of the website while still meshing with the color pallet of
          this portfolio site, so I borrowed fonts and layout from each of the
          projects’ own design and tweaked the colors slightly so that they
          wouldn’t clash.
        </p>
        <h2 className="section-subtitle">Design Process</h2>
        <p className="paragraph">
          Initially, I was excited to implement clip-paths because CSS has
          recently added trigonometric functions to its library, and I thought I
          could take advantage of this to ensure that all of my clip paths had
          the same angles and would slot into each other quite neatly. However,
          upon using these tools I noticed there were a few flaws in the way
          that these functions interacted with CSS units and conventions.
        </p>
        <p className="paragraph">
          My plan was to use trigonometry to devise the offset of the clip-path
          based on the width of each element and the angle I waned everything to
          be at. However, when it came to testing this approach I learned that
          it is very difficult to get the width of a block as a value in CSS.
          Whenever I put in my equation, it would calculate the offset based on
          the height of the block as that is where the inputs were happening.
          The only way my plan would work in pure CSS is if I used view width or
          fixed values for the width of each element. I didn’t like this
          approach as it would make rendering the clip-paths on mobile very
          difficult as I would have to use a large amount of media queries to
          make each element fit on different device sizes.
        </p>
        <p className="paragraph">
          The solution then was to use dynamic rendering in React to set the
          clip-path as each component rendered. Each time you see a slant on
          this page, it is because of a custom component that gets its own width
          on load and calculates the clip path based on that. This is achieved
          with a UseEffect hook which runs on mount and whenever the width of
          the document changes, as this would affect the width of many of the
          elements on the page. Another thing the code in this hook calculates
          is the vertical offset of each component, moving them up as neeed so
          that the gap between elements is smaller and so that elements rendered
          side-by-side would all follow the same line.
        </p>
        <p className="paragraph">
          It took a lot of work and there were numerous edge cases to deal with,
          but in the end I believe that the overall effect is worth it, creating
          a striking and unique website design.
        </p>
      </div>
    </DescriptionWrapper>
  );
}
