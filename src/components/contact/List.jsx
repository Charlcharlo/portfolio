import { useEffect, useState } from "react";
import { contactLinks } from "../../data/links";
import { calcOffset } from "../../functions/trig";
import ContactLink from "./ContactLink";

export default function List() {
  const [padding, setPadding] = useState({});
  useEffect(() => {
    const refBlock = document.getElementById("contact-top");
    const mainOffset = calcOffset(refBlock.offsetWidth);
    setPadding({
      paddingTop: `${mainOffset + 10}px`,
    });
  }, []);

  function renderLinks(link, i) {
    return <ContactLink data={link} key={i} />;
  }

  return (
    <div className="contact-list" style={padding}>
      {contactLinks.map(renderLinks)}
    </div>
  );
}
