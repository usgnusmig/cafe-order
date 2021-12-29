import React from "react";
import styled from "styled-components";
import ItemList from "./ItemList";

const ITEM_LIST = [
  {
    id: "m1",
    name: "아메리카노",
    description: "에스프레소에 물을 타서 마시는 커피",
    price: 3500,
  },
  {
    id: "m2",
    name: "카페라떼",
    description: "에스프레소에 우유를 타서 마시는 커피",
    price: 4500,
  },
  {
    id: "m3",
    name: "바닐라라떼",
    description: "시그니쳐메뉴",
    price: 5000,
  },
  {
    id: "m4",
    name: "파운드 케이크",
    description: "쑥 또는 얼그레이 선택",
    price: 35000,
  },
];

const ItemsStyle = styled.div`
  padding: 1rem;
  max-width: 50rem;
  width: 90%;
  margin: 2rem auto;
  background-color: #fafafa;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
const Items = () => {
  const itemList = ITEM_LIST.map((item) => (
    <ItemList
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));
  return <ItemsStyle>{itemList}</ItemsStyle>;
};

export default Items;
