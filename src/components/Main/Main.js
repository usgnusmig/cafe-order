import React, { Fragment } from "react";

import ArticleSummary from "./Article/Article.Summarry";
import Items from "./Items/Items";

const Main = () => {
  return (
    <Fragment>
      <ArticleSummary />
      <Items />
    </Fragment>
  );
};

export default Main;
