import React from "react";

import style from "./buttonProducts.module.scss";

declare interface ButtonsProductsProps {
  title: string;
  simbol: string;
  disabled: boolean;
  fn: () => any;
}

export const ButtonsProducts: React.VFC<ButtonsProductsProps> =
  ({ title, simbol, disabled, fn }): JSX.Element => {
    return (
      <button
        className={style.substract}
        onClick={fn}
        title={title}
        disabled={disabled}
      >
        {simbol}
      </button>
    );
  };
