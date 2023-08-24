import SubmitButtons from "./form/SubmitButtons";
import TextArea from "./form/TextArea";
import TextInput from "./form/TextInput";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Form(props) {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    props.setWidgetIn(true);
    props.setDone(false);

    emailjs
      .sendForm(
        "service_dpnz8zj",
        "template_rxbjb23",
        form.current,
        "qLL16_E2dma8v8qGa"
      )
      .then(
        (result) => {
          e.target.reset();
          props.setDone(true);
          console.log(result.text);
          setTimeout(props.close, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <form className="col-start contact-form" ref={form} onSubmit={sendEmail}>
        <TextInput name="your-name" label="Your Name" />
        <TextInput name="your-email" label="Your Email Adress" />
        <TextArea name="message-body" label="Message Body" />
        <SubmitButtons />
      </form>
    </>
  );
}

Form.propTypes;
