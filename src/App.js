import React, { Fragment } from "react";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  );
};

export default App;
