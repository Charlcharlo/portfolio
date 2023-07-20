import { useEffect, useState } from "react";
import { calcOffset } from "../functions/trig";
import "../styles/contact/contact.css";
import Form from "./contact/Form";
import List from "./contact/List";
import DividerBottom from "./layout/DividerBottom";
import DividerTop from "./layout/DividerTop";
import DoubleVertical from "./offsets/DoubleVertical";

export default function Contact() {
  const [mainOffset, setMainOffset] = useState({});

  useEffect(() => {
    const refBlock = document.getElementById("contact-top");
    const mainOffset = calcOffset(refBlock.offsetWidth);
    setMainOffset({ bottom: `calc(${mainOffset}px - 20px)` });
  }, []);

  return (
    <div className="full-page col-start" id="contact">
      <DividerTop />
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
            <Form />
          </div>
        </DoubleVertical>
      </div>
      <DividerBottom />
    </div>
  );
}
