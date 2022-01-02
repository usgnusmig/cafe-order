import React from "react";
import styled from "styled-components";
import ButtonForm from "./ButtonForm";

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
  return (
    <MenuStyle>
      <div>
        <h3>{props.menu}</h3>
        <h5>{props.description}</h5>
        <PriceStyle>{`${props.price}₩`}</PriceStyle>
      </div>

      <div>
        <ButtonForm />
      </div>
    </MenuStyle>
  );
};

export default MenuList;
