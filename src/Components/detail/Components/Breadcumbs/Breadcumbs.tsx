import React from "react";
import breadcumbs from "./breadcrumbs.module.scss";

type TBreadcrumbs = {
    type: string,
    name: string,
    category: string
}

export const Breadcrumbs: React.FC<TBreadcrumbs> = ({ type, name, category }) => {
  return (
    <div className={breadcumbs.breadcrumbs}>
      <a href="/">Product</a> /{" "}
      <a data-testid="test-type-name" href={`/${type}`}>{name}</a> /{" "}
      <a data-testid="test-category" href={`/filter/${category}`}>{category}</a>
    </div>
  );
};
