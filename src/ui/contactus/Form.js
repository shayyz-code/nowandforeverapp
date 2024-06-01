import styled from "styled-components";
import FormTextInput from "./FormTextInput";
import theme from "../theme";

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
  return (
    <StyledForm>
      <div>
        <FormTextInput label="First Name" />
        <FormTextInput label="Last Name" />
      </div>
      <div>
        <FormTextInput label="Email" />
        <FormTextInput label="Ph No" />
      </div>
      <div>
        <FormTextInput label="Message" isTextArea />
      </div>

      <StyledSubmit type="submit" value="Submit" />
    </StyledForm>
  );
}
