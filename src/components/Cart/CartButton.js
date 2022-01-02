import React from "react";

import styled, { keyframes } from "styled-components";
import Icon from "./Icon";

const BumpKeyfraems = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

const Bump = styled.div`
  animation: ${BumpKeyfraems} 300ms ease-out;
`;

const ButtonStyle = styled.button`
  cursor: pointer;
  border: none;
  background-color: #005000;
  color: #ffffff;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
  ${({ isBump }) => {
    return isBump ? `animation: ${Bump} 300ms ease-out;` : null;
  }}
`;

const BadgeStyle = styled.span`
  background-color: #004400;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`;

const CartButton = (props) => {
  return (
    <ButtonStyle onClick={props.onClick}>
      <Icon />
      <span>Cart</span>
      <BadgeStyle>0</BadgeStyle>
    </ButtonStyle>
  );
};

export default CartButton;
