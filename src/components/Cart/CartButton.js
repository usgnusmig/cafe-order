import React, { useState, useContext, useEffect } from "react";

import styled, { keyframes } from "styled-components";
import Icon from "./Icon";
import CartContext from "./cart-context";

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
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <ButtonStyle isBump={btnHighlighted} onClick={props.onClick}>
      <Icon />
      <span>Cart</span>
      <BadgeStyle>{numberOfCartItems}</BadgeStyle>
    </ButtonStyle>
  );
};

export default CartButton;
