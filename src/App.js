import React, { Fragment, useState } from "react";
import Login from "./components/Login/Login";

import Main from "./components/Main/Main";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const loginHandler = () => {
    setIsLogin(false);
  };

  return (
    <Fragment>
      <Login onLogin={loginHandler} />
      {isLogin && <Main />}
    </Fragment>
  );
};

export default App;
