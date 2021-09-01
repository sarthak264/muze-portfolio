import React from "react";
import styled from "styled-components";

const Para = styled.p`
  width: 100%;
  font-size: 13px !important;
  @media screen and (min-width:768px){
    width: 60%;
  }
  @media screen and (min-width:991px){
    width: 35%;
  }
`;
const Icon = styled.i`
  font-size: 1.5rem;
  margin-right: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover{
    color: #0d6efd !important;
  }
`;


const Footer = () => {
  return (
    <footer className="footer">
      <hr className="mb-5 text-muted mt-0"/>
      <a href="/" className="text-black text-decoration-none h5 fw-bolder">
        hello@johnmalon.com
      </a>
      <Para className="small text-muted mt-3 mb-4 pe-3">
        On the other hand, we denounce with righteous indignation and dislike
        men.
      </Para>
      <div className="icon-container mb-3 mb-md-5">
        <Icon className="text-muted fab fa-facebook-f"></Icon>
        <Icon className="text-muted fab fa-dribbble"></Icon>
        <Icon className="text-muted fab fa-instagram"></Icon>
      </div>
    </footer>
  );
};

export default Footer;
