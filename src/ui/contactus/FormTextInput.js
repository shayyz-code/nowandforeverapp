import styled from "styled-components";
import theme from "../theme";

const StyledLabel = styled.label`
  font-size: ${theme.fontSize.textInputLabel};
`;

const StyledFormTextInput = styled.input`
  display: flex;
  background: ${theme.color.textInputBackground};
  color: ${theme.color.textInputColor};
  font-size: ${theme.fontSize.textInput};
  padding: 5px;
  width: 150px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const StyledFormTextArea = styled.textarea`
  display: flex;
  background: ${theme.color.textInputBackground};
  color: ${theme.color.textInputColor};
  font-size: ${theme.fontSize.textInput};
  padding: 5px;
  width: 340px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export default function FormTextInput({ isTextArea, label, val, setVal }) {
  return (
    <StyledLabel>
      {label}
      {!isTextArea ? (
        <StyledFormTextInput
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <StyledFormTextArea onChange={(e) => setVal(e.target.value)}>
          {val}
        </StyledFormTextArea>
      )}
    </StyledLabel>
  );
}
