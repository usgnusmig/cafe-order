import React, { Fragment } from "react";
import styled from "styled-components";

import mainImg from "../../assets/06.png";

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #ffffff;
  color: #005000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const MainImage = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
`;

const Image = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
`;

const Header = (props) => {
  return (
    <Fragment>
      <HeaderStyle>{<h1>{props.title}</h1> || <h1>CafeName</h1>}</HeaderStyle>

      <MainImage>
        <Image src={mainImg} alt="L'harmonie" />
      </MainImage>
    </Fragment>
  );
};

export default Header;
