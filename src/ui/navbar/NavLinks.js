import pathnames from "../links";

import styled from "styled-components";
import NavLink from "./NavLink";
import theme from "../theme";
import Humburger from "./Humburger";
import { useState } from "react";

const StyledNavLinks = styled.ul`
  display: flex;
  list-style: none;
  transition: 0.3s;

  @media (max-width: 480px) {
    flex-flow: column;
    background: ${theme.color.primary};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    position: absolute;
    top: 60px;
    right: 0;
    transform: ${({ open }) => (!open ? "translateX(200px)" : "translateX(0)")};
    padding: 15px 0 15px 0;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    border-top: 1px solid ${theme.color.default};
    margin-top: 10px;
  }
`;

export default function NavLinks() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Humburger open={open} setOpen={setOpen} />
      <StyledNavLinks open={open}>
        {pathnames.map(({ name, path }) => (
          <NavLink name={name} path={path} key={path} />
        ))}
      </StyledNavLinks>
    </>
  );
}
