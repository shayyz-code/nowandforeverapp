import styled from "styled-components";

import logo from "$/logo-no-background.png";
import Image from "next/image";

const StyledUpperFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid black;
  padding: 20px 0 40px 0;

  p {
    max-width: 320px;
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    flex-flow: column;
    justify-content: center;
    align-items: center;

    p {
      margin-left: 0;
      margin-top: 20px;
      max-width: 350px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }
`;

export default function UpperFooter() {
  return (
    <StyledUpperFooter>
      <Image src={logo} alt="logo" width={200} />
      <p>
        Dorem ipsum dolor sit amet,consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, acaliquet odio mattis.
      </p>
    </StyledUpperFooter>
  );
}
