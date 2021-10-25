import React from "react";
import "../../../../utils/format-currency";
import { FormatCurrency } from "../../../../utils/format-currency";

import style from "./totalProducts.module.scss";

declare interface TotalProductsProps {
  totals: any;
}

export const TotalProducts: React.VFC<TotalProductsProps> =
  ({ totals }): JSX.Element => {
    return (
      <div className={style.content}>
        <div className={style.total}>
          <p className={style.treal}>
            R${" "}
            <span>
              {totals &&
                new FormatCurrency(
                  totals.total,
                  2,
                  3,
                  ".",
                  ","
                ).format()}
            </span>
          </p>
          <p className={style.tdiscount}>
            R${" "}
            <span>
              {totals &&
                new FormatCurrency(
                  totals.discount,
                  2,
                  3,
                  ".",
                  ","
                ).format()}
            </span>
          </p>
        </div>
      </div>
    );
  };
