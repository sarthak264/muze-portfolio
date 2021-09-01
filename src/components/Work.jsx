import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid rgb(211, 216, 223);
  cursor: pointer;
  &:hover h3 {
    color: #0d6efd;
    transition: all 0.2s ease-in-out;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center; 
`;
const SubHeading = styled.h3`
  transition: all 0.2s ease-in-out;
`;

const Work = (props) => {
  return (
    <Container className="mb-4 mb-lg-5 row">
      <div className="col-12 col-lg-8 px-0 order-lg-2">
        <Image src={props.image} alt="card img" />
      </div>
      <div className="col-12 col-lg-4 px-3 px-lg-0 py-3 py-lg-0 ps-lg-5 pb-lg-5 mt-auto order-lg-1">
        <SubHeading className="fw-bolder">{props.heading}</SubHeading>
        <p className="small mt-0 mt-lg-3 text-muted mb-0 mb-lg-3">Branding . UI design</p>
      </div>
    </Container>
  );
};

export default Work;
