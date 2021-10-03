import React from "react";

export const QtdeProducts = ({ reference, style }) => {
  return (
    <div className={style.content}>
      <div className={style.unitary}>
        <p className={style.vreal}>
          R$ D<span>{reference.price.toFixed(2)}</span>
        </p>
        <p className={style.vdiscount}>
          R$ <span>{reference.discount.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};
