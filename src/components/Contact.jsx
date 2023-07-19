import { useEffect, useState } from "react";
import { calcOffset } from "../functions/trig";
import "../styles/contact/contact.css";
import TextInput from "./contact/form/TextInput";
import BottomOnly from "./offsets/BottomOnly";
import DoubleVertical from "./offsets/DoubleVertical";
import TopOnly from "./offsets/TopOnly";

export default function Contact() {
  const [mainOffset, setMainOffset] = useState({});

  useEffect(() => {
    const refBlock = document.getElementById("contact-top");
    const mainOffset = calcOffset(refBlock.offsetWidth);
    setMainOffset({ bottom: `calc(${mainOffset}px - 20px)` });
  }, []);

  return (
    <div className="full-page col-start" id="contact">
      <div className="single-offset">
        <BottomOnly id="contact-top">
          <div className="row-between">
            <div className="filler-block" />
          </div>
        </BottomOnly>
      </div>
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
            <div className="contact-list"></div>
            <div className="contact-form">
              <TextInput id="your-name" />
              <TextInput id="your-email" />
            </div>
          </div>
        </DoubleVertical>
      </div>
      <div className="single-offset">
        <TopOnly id="contact-top">
          <div className="row-between">
            <div className="filler-block" />
          </div>
        </TopOnly>
      </div>
    </div>
  );
}
