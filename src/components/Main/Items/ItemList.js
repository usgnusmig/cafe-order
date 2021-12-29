import React from "react";
import styled from "styled-components";

const ItemStyle = styled.li`
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

const ItemList = ({ name, description, price }) => {
  return (
    <ItemStyle>
      <div>
        <h3>{name}</h3>
        <h5>{description}</h5>
        <PriceStyle>{`${price}₩`}</PriceStyle>
      </div>

      <div>
        <button>버튼</button>
      </div>
    </ItemStyle>
  );
};

export default ItemList;