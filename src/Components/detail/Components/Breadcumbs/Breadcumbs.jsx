import React from "react";
import breadcumbs from "./breadcrumbs.module.scss";

export const Breadcrumbs = ({ type, name, category }) => {
  return (
    <div className={breadcumbs.breadcrumbs}>
      <a href="/">Product</a> /{" "}
      <a href={`/${type}`}>{name}</a> /{" "}
      <a href={`/filter/${category}`}>{category}</a>
    </div>
  );
};
