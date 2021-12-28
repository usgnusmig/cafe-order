import React, { Fragment } from "react";

import GlobalStyle from "../../GlobalStyle";
import Header from "./Header/Header";
import ArticleSummary from "./Article/Article.Summarry";

const Main = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <ArticleSummary />
    </Fragment>
  );
};

export default Main;
