import React from "react";
import style from "./inputProducts.module.scss";

declare interface InputProductsProps {
  value: string;
}

export const InputProducts: React.VFC<InputProductsProps> =
  ({ value }): JSX.Element => {
    //   let inputReference = useRef(null);
    return (
      <input
        //   ref={inputReference}
        className={style.input}
        onChange={() => {}}
        value={value}
        // maxLength="2"
      />
    );
  };
