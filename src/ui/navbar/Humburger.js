import styled from "styled-components";
import theme from "../theme";

const StyledHumburger = styled.span`
  visibility: hidden;

  @media (max-width: 480px) {
    position: fixed;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    top: 5px;
    right: 5px;
    width: 50px;
    height: 50px;

    span {
      width: 2em;
      height: 3px;
      background: ${({ open }) =>
        !open ? theme.color.default : theme.color.primary};
      margin: 4px;
      transition: 0.3s;
    }

    .bar1 {
      transform: ${({ open }) =>
        open
          ? "translateY(11.25px) rotateZ(45deg)"
          : "translateY(0) rotateZ(0)"};
    }

    .bar2 {
      transition: 0s;
      visibility: ${({ open }) => (open ? "hidden" : "visible")};
    }

    .bar3 {
      transform: ${({ open }) =>
        open
          ? "translateY(-11.25px) rotateZ(-45deg)"
          : "translateY(0) rotateZ(0)"};
    }

    visibility: visible;
  }
`;

export default function Humburger({ open, setOpen }) {
  return (
    <StyledHumburger open={open} onClick={() => setOpen(!open)}>
      <span className="bar1" />
      <span className="bar2" />
      <span className="bar3" />
    </StyledHumburger>
  );
}
