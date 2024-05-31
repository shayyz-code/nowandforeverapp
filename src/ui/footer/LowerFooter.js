import styled from "styled-components";
import pathnames from "../links";
import Table from "./Table";

const StyledLowerFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0 20px 0;

  ul {
    list-style: none;
  }

  @media (max-width: 480px) {
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }
`;

export default function LowerFooter() {
  const data = [
    pathnames.slice(0, 4), // removes Contact Us
    ["Cookie Policy", "Privacy Policy", "Booking Policy"],
    ["Contact", "1-855-66-STEEL", "Support @mansory. com"],
    ["Address", "1179 Lance Road Norfolk VA, 23502"],
  ];
  return (
    <StyledLowerFooter>
      {data.map((table, index) => (
        <Table data={table} key={index} />
      ))}
    </StyledLowerFooter>
  );
}
