import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log("ADD");
  }

  if (action.type === "REMOVE") {
    console.log("REMOVE");
  }

  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultState);

  const addItemHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
