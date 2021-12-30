import React, { Fragment } from "react";

import ArticleSummary from "./Article/Article.Summarry";
import Menu from "./Menu/Menu";

const Main = () => {
  return (
    <Fragment>
      <ArticleSummary />
      <Menu />
    </Fragment>
  );
};

export default Main;
