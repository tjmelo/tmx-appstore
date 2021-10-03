import React from "react";

export const UnitProduct = ({ reference, style }) => {
  return (
    <div className={style.content}>
      <div className={style.total}>
        <p className={style.treal}>
          R${" "}
          <span>
            {reference.optionsProduct.realTotal.toFixed(2)}
          </span>
        </p>
        <p className={style.tdiscount}>
          R${" "}
          <span>
            {reference.optionsProduct.discountTotal.toFixed(
              2
            )}
          </span>
        </p>
      </div>
    </div>
  );
};
