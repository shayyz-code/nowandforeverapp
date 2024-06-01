import styled from "styled-components";
import FormTextInput from "./FormTextInput";
import theme from "../theme";
import { useState } from "react";

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;

  div {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    div {
      display: block;
    }
  }
`;

const StyledSubmit = styled.input`
  display: block;
  width: 120px;
  height: 50px;
  background: ${theme.color.submitInputBackground};
  border: none;
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;
`;

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phNo, setPhNo] = useState("");
  const [message, setMessage] = useState("");

  return (
    <StyledForm>
      <div>
        <FormTextInput
          label="First Name"
          val={firstName}
          setVal={setFirstName}
        />
        <FormTextInput label="Last Name" val={lastName} setVal={setLastName} />
      </div>
      <div>
        <FormTextInput label="Email" val={email} setVal={setEmail} />
        <FormTextInput label="Ph No" val={phNo} setVal={setPhNo} />
      </div>
      <div>
        <FormTextInput
          label="Message"
          isTextArea
          val={message}
          setVal={setMessage}
        />
      </div>

      <StyledSubmit type="submit" value="Submit" />
    </StyledForm>
  );
}
