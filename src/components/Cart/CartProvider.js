import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const prevCartItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );

    const prevCartItem = state.item[prevCartItemIndex];

    let updatedItems;

    if (prevCartItem) {
      const updatedItem = {
        ...prevCartItem,
        amount: prevCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      updatedItems[prevCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const prevCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const prevItem = state.item[prevCartItemIndex];
    const updatedTotalAmount = state.totalAmount - prevItem.price;
    let updatedItems;

    if (prevItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...prevItem, amount: prevItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[prevCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultState;
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
