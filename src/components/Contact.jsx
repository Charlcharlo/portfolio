import { useEffect, useState } from "react";
import { calcOffset } from "../functions/trig";
import "../styles/contact/contact.css";
import EmailProgress from "./contact/EmailProgress";
import Form from "./contact/Form";
import List from "./contact/List";
import { useWidth } from "./context/FlexContext";
import DividerBottom from "./layout/DividerBottom";
import DividerTop from "./layout/DividerTop";
import DoubleVertical from "./offsets/DoubleVertical";

export default function Contact() {
  const [mainOffset, setMainOffset] = useState({});
  const [widgetIn, setWidgetIn] = useState(false);
  const [done, setDone] = useState(false);
  const width = useWidth();

  useEffect(() => {
    const refBlock = document.getElementById("contact-top");
    const mainOffset = calcOffset(refBlock.offsetWidth);
    setMainOffset({ bottom: `calc(${mainOffset}px - 20px)` });
  }, [width]);

  function closeWidget() {
    setWidgetIn(false);
  }

  return (
    <div className="full-page col-start" id="contact">
      <DividerTop id="contact-top" />
      <img
        className="contact-header-img"
        src={`${window.location.origin}/images/Tins.png`}
      />
      <h1 className="contact-title" style={mainOffset}>
        Get In Touch
      </h1>
      <div className="contact-body" style={mainOffset}>
        <DoubleVertical id="contact-main">
          <div className="contact-contents row-between">
            <List />
            <Form
              setDone={setDone}
              setWidgetIn={setWidgetIn}
              close={closeWidget}
            />
          </div>
        </DoubleVertical>
        {widgetIn && <EmailProgress done={done} />}
      </div>
      <div style={mainOffset}>
        <DividerBottom id="contact-bottom" />
      </div>
    </div>
  );
}
