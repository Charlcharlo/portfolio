import Email from "../Email";
import GitHub from "../GitHub";
import LinkedIn from "../LinkedIn";

export default function ContactIcon({ name }) {
  switch (name) {
    case "gitHub":
      return <GitHub />;

    case "linkedIn":
      return <LinkedIn />;

    case "mail":
      return <Email />;
    default:
      return;
  }
}

ContactIcon.propTypes;
