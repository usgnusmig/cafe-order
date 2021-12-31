import React, { useContext } from "react";

import styled from "styled-components";
import Modal from "./Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const CartItemStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

const TotalStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const ActionStyle = styled.div`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;

    :hover,
    :active {
      background-color: #5a1a01;
      border-color: #5a1a01;
    }
  }
`;

const ButtonAlt = styled.div`
  cursor: pointer;
  color: #8a2b06;
`;

const ButtonStyle = styled.button`
  background-color: #8a2b06;
  color: white;
`;

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount}₩`;
  const hasItems = cartCtx.items.length > 0;

  const itemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const itemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <CartItemStyle>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onReomve={itemRemoveHandler.bind(null, item)}
          onAdd={itemAddHandler.bind(null, item)}
        />
      ))}
    </CartItemStyle>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <TotalStyle>
        <span>주문 합계</span>
        <span>{totalAmount}</span>
      </TotalStyle>

      <ActionStyle>
        <ButtonAlt onClick={props.onClose}>닫기</ButtonAlt>
        {hasItems && <ButtonStyle>주문</ButtonStyle>}
      </ActionStyle>
    </Modal>
  );
};

export default Cart;
