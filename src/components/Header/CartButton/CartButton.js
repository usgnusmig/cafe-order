import React from "react";

import styled from "styled-components";
import Icon from "./Icon";

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
`;

const BadgeStyle = styled.span`
  background-color: #004400;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`;

const CartButton = () => {
  return (
    <ButtonStyle>
      <Icon />
      <span>Cart</span>
      <BadgeStyle>1</BadgeStyle>
    </ButtonStyle>
  );
};

export default CartButton;
