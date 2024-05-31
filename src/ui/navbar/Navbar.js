"use client";

import styled from "styled-components";
import NavLinks from "./NavLinks";
import Image from "next/image";
import logo from "$/logo-no-background.png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 10px;

  @media (min-width: 481px) and (max-width: 768px) {
    flex-flow: column;
    align-items: center;
    height: 90px;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Image src={logo} alt="logo" width={100} style={{ marginLeft: "20px" }} />
      <NavLinks />
    </Nav>
  );
}
