import styled from "styled-components";

const ItemStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 1rem 0;
  margin: 1rem 0;

  h2 {
    margin: 0 0 0.5rem 0;
    color: #363636;
  }

  button {
    font: inhert;
    font-weight: bold;
    font-size: 1.25rem;
    color: #8a2b06;
    border: 1px solid #8a2b06;
    width: 3rem;
    text-align: center;
    border-radius: 6px;
    background-color: transparnt;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;
    :hover,
    :active {
      background-color: #8a2b06;
      color: #ffffff;
    }
  }
`;

const SummaryStyle = styled.div`
  display: flex;
  width: 10rem;
  justify-content: space-between;
  align-items: center;
`;

const PriceStyle = styled.span`
  font-weight: bold;
  color: #8a2b06;
`;

const AmountStyle = styled.span`
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  color: #363636;
`;

const ActionStyle = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CartItem = (props) => {
  const price = `${props.price}₩`;

  return (
    <ItemStyle>
      <div>
        <h2>{props.name}</h2>
        <SummaryStyle>
          <PriceStyle>{price}</PriceStyle>
          <AmountStyle>x {props.amount}</AmountStyle>
        </SummaryStyle>
      </div>
      <div>
        <ActionStyle>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </ActionStyle>
      </div>
    </ItemStyle>
  );
};

export default CartItem;
