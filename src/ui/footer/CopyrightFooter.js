import styled from "styled-components";

const StyledCopyrightFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0 20px 0;

  @media (max-width: 480px) {
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }
`;

export default function CopyrightFooter() {
  return (
    <StyledCopyrightFooter>
      <p>Copyright &copy; 2024 Now & Forever. All rights reserved.</p>
      <p>Terms & Conditions</p>
    </StyledCopyrightFooter>
  );
}
