import Link from "next/link";
import styled from "styled-components";
import theme from "../theme";

const StyledTable = styled.ul`
  width: 160px;
  list-style: none;
  margin-bottom: 20px;

  li {
    height: 40px;

    a {
      transition: 0.3s;
      &:hover {
        color: ${theme.color.primary};
      }
    }
  }

  @media (max-width: 480px) {
    width: 100px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 110px;
  }
`;

export default function Table({ data }) {
  return (
    <StyledTable>
      {data.map((val, index) => (
        <li key={index}>
          {typeof val == "string" ? (
            val
          ) : (
            <Link href={val.path}>{val.name}</Link>
          )}
        </li>
      ))}
    </StyledTable>
  );
}
