import React from "react";

import styled from "styled-components";
import Modal from "./Modal";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <p>주문</p>
    </Modal>
  );
};

export default Cart;
