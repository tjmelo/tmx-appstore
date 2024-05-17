import React from "react";
import loading from "./loading.module.scss";

export const Loading = (): JSX.Element => {
  return (
    <div className={loading.loading}>
      <img src="/loading.gif" />
    </div>
  );
};
