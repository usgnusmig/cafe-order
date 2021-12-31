import React, { Fragment, useState } from "react";

import { createGlobalStyle } from "styled-components";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const GlobalStyle = createGlobalStyle`
  *, *::before, 
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;  
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    background-color: #ffffff;
  }
`;

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [IsCart, setIsCart] = useState(false);
  const loginHandler = () => {
    setIsLogin(false);
  };

  const hideCartHandler = () => {
    setIsCart(false);
  };

  const isCarthandler = () => {
    setIsCart(true);
  };

  return (
    <Fragment>
      <GlobalStyle />
      {IsCart && <Cart onClose={hideCartHandler} />}
      <Header title={"CafeTitle"} onClick={isCarthandler} />
      <Login onLogin={loginHandler} />
      {isLogin && <Main />}
    </Fragment>
  );
};

export default App;
