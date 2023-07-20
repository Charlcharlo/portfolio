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

  function renderLinks(link) {
    console.log(link);
    return <ContactLink data={link} />;
  }

  return (
    <div className="contact-list" style={padding}>
      {contactLinks.map(renderLinks)}
    </div>
  );
}
