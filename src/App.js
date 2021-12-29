import React, { Fragment, useState } from "react";

import Login from "./components/Login/Login";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const loginHandler = () => {
    setIsLogin(false);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Header title={"CafeTitle"} />
      <Login onLogin={loginHandler} />
      {isLogin && <Main />}
    </Fragment>
  );
};

export default App;
