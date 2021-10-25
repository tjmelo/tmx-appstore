import React from "react";
import style from "./unitProducts.module.scss";

import { FormatCurrency } from "../../../../utils/format-currency";

declare interface unitProductsProps {
  reference: any;
}

export const UnitProducts: React.VFC<unitProductsProps> = ({
  reference,
}) => {
  return (
    <div className={style.unitary}>
      <p className={style.vreal}>
        R${" "}
        <span>
          {new FormatCurrency(
            reference.price,
            2,
            3,
            ".",
            ","
          ).format()}
        </span>
      </p>
      <p className={style.vdiscount}>
        R${" "}
        <span>
          {new FormatCurrency(
            reference.discount,
            2,
            3,
            ".",
            ","
          ).format()}
        </span>
      </p>
    </div>
  );
};
