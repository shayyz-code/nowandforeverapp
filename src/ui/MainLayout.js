import Image from "next/image";
import styled from "styled-components";
import theme from "./theme";

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: ${theme.color.mainBackground};
`;

export default function MainLayout({ img, children }) {
  return (
    <StyledContainer>
      <Image
        src={img}
        style={{ width: "100%", height: "auto" }}
        alt={"hero image"}
      />
      {children}
    </StyledContainer>
  );
}
