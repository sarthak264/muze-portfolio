import React from "react";
import styled from "styled-components";
import { useState } from "react";

const MenuContainer = styled.div`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #3485fd;
  color: white;
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 767px) {
    height: auto;
  }
`;
const Container = styled.div`
  @media screen and (min-width: 1119px){
    max-width: 1140px;
  }
`
const List = styled.ul`
  font-size: 3.5rem;
  font-weight: 700;
  list-style: none;
  margin-bottom: 2.5rem;
  @media screen and (max-width: 767px) {
    font-size: 2rem;
    margin-top: 2.5rem;
  }
`;
const Item = styled.a`
  color: white;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: white;
    padding-left: 1rem;
  }
  @media screen and (max-width: 767px) {
    line-height: 1.8;
  }
`;
const Line = styled.hr`
  margin-bottom: 2.8rem;
`;
const Icon = styled.i`
  font-size: 2rem;
  margin-right: 2.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: white;
`;
const Email = styled.h3`
  width: auto;
  display: inline-block;
`;
const Navbtn = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  background-color: #0d6efd;
  padding: 1.5rem;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
  :hover {
    background-color: #024dbc;
  }
`;

const Menu = () => {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <>
    <Navbtn onClick={toggleMenu}>
        {!menu && (
          <svg
            className="menu-icon"
            data-name="icons/tabler/hamburger"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 16 16"
          >
            <rect
              data-name="Icons/Tabler/Hamburger background"
              width="16"
              height="16"
              fill="none"
            />
            <path
              d="M15.314,8H.686A.661.661,0,0,1,0,7.368a.653.653,0,0,1,.593-.625l.093-.006H15.314A.661.661,0,0,1,16,7.368a.653.653,0,0,1-.593.626Zm0-6.737H.686A.661.661,0,0,1,0,.632.654.654,0,0,1,.593.005L.686,0H15.314A.661.661,0,0,1,16,.632a.653.653,0,0,1-.593.625Z"
              transform="translate(0 4)"
              fill="#ffffff"
            />
          </svg>
        )}
        {menu && (
          <svg
            className="menu-close"
            data-name="icons/tabler/close"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 16 16"
          >
            <rect
              data-name="Icons/Tabler/Close background"
              width="16"
              height="16"
              fill="none"
            />
            <path
              d="M.82.1l.058.05L6,5.272,11.122.151A.514.514,0,0,1,11.9.82l-.05.058L6.728,6l5.122,5.122a.514.514,0,0,1-.67.777l-.058-.05L6,6.728.878,11.849A.514.514,0,0,1,.1,11.18l.05-.058L5.272,6,.151.878A.514.514,0,0,1,.75.057Z"
              transform="translate(2 2)"
              fill="#ffffff"
            />
          </svg>
        )}
      </Navbtn>
    <MenuContainer className={!menu ? 'menu':'menu show'}>
      <Container className="container">
        <List className="ps-0">
          <li>
            <Item href="/">Home</Item>
          </li>
          <li>
            <Item href="/">About</Item>
          </li>
          <li>
            <Item href="/">Portfolio</Item>
          </li>
          <li>
            <Item href="/">Clients</Item>
          </li>
          <li>
            <Item href="/">Buy Now</Item>
          </li>
        </List>
        <Line />
        <div className="row mb-5 mb-md-0">
          <div className="col-12 col-sm-6 mb-4 mb-md-0">
            <Icon className="fab fa-facebook-f"></Icon>
            <Icon className="fab fa-dribbble"></Icon>
            <Icon className="fab fa-instagram"></Icon>
          </div>
          <div className="col-12 col-sm-6 d-flex justify-content-sm-end">
            <Email className="mb-0 fw-bolder">hello@johnmalon.com</Email>
          </div>
        </div>
      </Container>
    </MenuContainer>
    </>
  );
};

export default Menu;
