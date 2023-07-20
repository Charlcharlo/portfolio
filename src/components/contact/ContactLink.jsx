import ContactIcon from "../Icons/routers/ContactIcon";

export default function ContactLink({ data }) {
  return (
    <a className="contact-link row-start" href={data.link}>
      <ContactIcon name={data.icon} />
      <h2>{data.name}</h2>
    </a>
  );
}

ContactLink.propTypes;
