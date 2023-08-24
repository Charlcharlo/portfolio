import { useEffect, useRef, useState } from "react";
import BackToTop from "./BackToTop";
import "./ChameleonScroll.css";

export default function ChameleonScroll({ children }) {
  const [color, setColor] = useState("yellow");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const chamRef = useRef();

  function handleScroll(event) {
    const changePoint = event.target.scrollTop;
    if (changePoint < lastScrollTop) {
      setVisible(changePoint > 800);
    } else {
      setVisible(false);
    }
    setLastScrollTop(changePoint <= 0 ? 0 : changePoint);
    setScrollPosition(changePoint);
  }

  function scrollToTop() {
    chamRef.current.scrollTo(0, 0);
  }

  useEffect(() => {
    const splashHeight = document
      .getElementById("splash")
      .getBoundingClientRect().top;
    const aboutHeight = document
      .getElementById("about-me")
      .getBoundingClientRect().top;
    const projectsHeight = document
      .getElementById("projects")
      .getBoundingClientRect().top;
    const contactHeight = document
      .getElementById("contact")
      .getBoundingClientRect().top;
    const changePoint = scrollPosition + window.innerHeight / 2;
    if (changePoint >= contactHeight + scrollPosition) {
      setColor("green");
    } else if (changePoint > projectsHeight + scrollPosition) {
      setColor("blue");
    } else if (changePoint > aboutHeight + scrollPosition) {
      setColor("red");
    } else if (changePoint > splashHeight + scrollPosition) {
      setColor("yellow");
    }
  }, [scrollPosition]);

  return (
    <div
      className={`cham-scroll ${color}`}
      onScroll={handleScroll}
      ref={chamRef}
    >
      {children}
      <BackToTop visible={visible} scrollToTop={scrollToTop} />
    </div>
  );
}

ChameleonScroll.propTypes;
