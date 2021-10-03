import React from "react";

export const TitleProduct = ({ style }) => {
  return (
    <div className={style.titles}>
      <h2 className={style.titleProd}>Produtos</h2>
      <h2 className={style.titleQtde}>Quantidade</h2>
      <h2 className={style.titleUnity}>Unitário</h2>
      <h2 className={style.titleTotal}>Total</h2>
    </div>
  );
};
