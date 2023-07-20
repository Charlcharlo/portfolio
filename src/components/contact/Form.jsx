import SubmitButtons from "./form/SubmitButtons";
import TextArea from "./form/TextArea";
import TextInput from "./form/TextInput";

export default function Form() {
  return (
    <div className="contact-form col-start">
      <TextInput id="your-name" />
      <TextInput id="your-email" />
      <TextArea id="message-body" />
      <SubmitButtons />
    </div>
  );
}
