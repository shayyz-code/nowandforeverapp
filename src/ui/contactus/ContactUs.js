"use client";

import styled from "styled-components";
import Heading from "./Heading";
import Form from "./Form";
import MainLayout from "../MainLayout";
import theme from "../theme";

const StyledContactUs = styled.div`
  background: ${theme.color.sectionBackground};
  padding: 10px 30px 10px 30px;
  margin: 20px 0 20px 0;
  width: 400px;

  @media (max-width: 480px) {
    max-width: 350px;
    background: transparent;
  }
`;
export default function ContactUs({ img }) {
  return (
    <MainLayout img={img}>
      <StyledContactUs>
        <Heading />
        <Form />
      </StyledContactUs>
    </MainLayout>
  );
}
