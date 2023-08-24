import Send from "../../Icons/Send";
import Cancel from "../../Icons/Cancel";
import FormButton from "./FormButton";

export default function SubmitButtons() {
  return (
    <div className="row-end">
      <FormButton id="submit-button" index={0} type="submit">
        <div className="row-between button-contents submit">
          <p>Send</p>
          <Send />
        </div>
      </FormButton>
      <FormButton id="clear-button" index={1} type="reset">
        <div className="row-between button-contents clear">
          <p>Clear</p>
          <Cancel />
        </div>
      </FormButton>
    </div>
  );
}
