import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  margin-top: 5rem;
  padding-top: 5.5rem;
  padding-bottom: 1.5rem;
`;
const SubHeading = styled.h2`
  line-height: 1.5;
`;
const Line = styled.hr`
  margin: 3rem auto 5.5rem auto;
`;

const Header = () => {
  return (
    <HeaderContainer className="row">
      <div className="col-12 col-lg-6">
        <h1 className="display-1 fw-bold">Hello, I'm Nathan.</h1>
        <SubHeading className="fw-bolder">
          I create meaningful products by understanding users needs and
          solutions, currently a UX Designer at Uber
        </SubHeading>
      </div>
      <Line className="text-muted mx-3"/>
    </HeaderContainer>
  );
};

export default Header;
