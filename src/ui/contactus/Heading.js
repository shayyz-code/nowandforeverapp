import styled from "styled-components";

const StyledHeading = styled.div`
  h2 {
    font-size: 12px;
  }
`;

export default function Heading() {
  return (
    <StyledHeading>
      <h2>Contact</h2>
      <p>Talk with us to get advice</p>
    </StyledHeading>
  );
}
