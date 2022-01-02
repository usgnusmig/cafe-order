import React from "react";

import styled from "styled-components";
import Modal from "./Modal";

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
    font-weight: bold;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid #005000;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;

    :hover,
    :active {
      color: #ffffff;
      background-color: #005000;
      border-color: #005000;
    }
  }
`;

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <TotalStyle>
        <span>주문 합계</span>
        <span>0</span>
      </TotalStyle>

      <ActionStyle>
        <button onClick={props.onClose}>닫기</button>
        <button>주문</button>
      </ActionStyle>
    </Modal>
  );
};

export default Cart;
