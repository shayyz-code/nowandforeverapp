"use client";

import styled from "styled-components";

import UpperFooter from "./UpperFooter";
import LowerFooter from "./LowerFooter";
import CopyrightFooter from "./CopyrightFooter";

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: column;
  padding: 20px 100px 20px 100px;

  @media (max-width: 480px) {
    padding: 20px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 20px 50px 20px 50px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <UpperFooter />
      <LowerFooter />
      <CopyrightFooter />
    </StyledFooter>
  );
}
