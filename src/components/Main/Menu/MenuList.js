import React, { useContext } from "react";
import styled from "styled-components";
import ButtonForm from "./ButtonForm";
import CartContext from "../../../store/cart-context";

const MenuStyle = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  h3 {
    margin: 0 0 0.25rem 0;
  }

  h5 {
    font-size: 0.8rem;
  }
`;

const PriceStyle = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #005000;
  font-size: 1.25;
`;

const MenuList = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.menu,
      amount: amount,
      price: props.price,
    });
    console.log(cartCtx);
  };
  return (
    <MenuStyle>
      <div>
        <h3>{props.menu}</h3>
        <h5>{props.description}</h5>
        <PriceStyle>{`${props.price}₩`}</PriceStyle>
      </div>

      <div>
        <ButtonForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </MenuStyle>
  );
};

export default MenuList;
