import { useState } from "react";
import "../styles/about/about.css";
import StackContainer from "./about/StackContainer";
import { useFlex } from "./context/FlexContext";

export default function AboutMe() {
  const flex = useFlex();
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded((prev) => {
      return !prev;
    });
  }

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
          I believe programming is a form of storytelling. It is a story told by
          the coder to the compiler and by the product to the user. I aim to
          bring that belief into my work every day. Over the course of my
          journey to becoming a coder, I have found a love for the intricacies
          of the creation process and am always looking for ways to make my code
          cleaner and more efficient to help me build interesting websites with
          their own story to tell.
        </p>
        <p className="paragraph">
          In my spare time I’m a tabletop roleplayer, an artist and a lover of
          movies and TV shows. I look at my life, my work and my hobbies as
          being a constant source of new experiences and opportunities to learn
          something, and so I try to approach every day with passion, optimism
          and an open mind.
        </p>
        {expanded && (
          <>
            <p className="paragraph">
              Although I found my chosen career path later in life, I believe
              that everything I’ve experienced up until this point has prepared
              me for a future in the web development industry. I’ve been a
              mechanic, a waiter, an artist and a transcriber. I’ve learned how
              to work in a team and how to be accurate, meticulous, fast and
              disciplined.
            </p>
            <p className="paragraph">
              At university I completed a BSocSci in film studies and
              anthropology. On the surface this may seem like it would add
              little benefit to my work as a programmer, but it taught me how to
              examine and absorb new information as well as to examine my work
              more critically and consider the impact it has on the world around
              me.
            </p>
            <p className="paragraph">
              The core focus in my day to day work is building responsive and
              efficient web apps that grab your attention and are easy to use. I
              am also very mindful of the way I write the code itself because at
              the end of the day, coding is a form of language creation and my
              years of writing essays and transcriptions will always be the
              foundation for the way in which I approach project structure and
              use of proper syntax.
            </p>
          </>
        )}
        <button className="expand-button" onClick={toggleExpanded}>
          {expanded ? "Read Less" : "Read More"}
        </button>
        <StackContainer />
      </div>
    </div>
  );
}
