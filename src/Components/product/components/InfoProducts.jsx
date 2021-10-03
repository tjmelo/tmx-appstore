import React from "react";

export const InfoProduct = ({ reference, style }) => {
  return (
    <div className={style.content}>
      <div className={style.product}>
        <figure>
          <img
            src={reference.image}
            title={reference.title}
            alt={reference.title}
          />
        </figure>
        <div className={style.productDescription}>
          <h3>{reference.title}</h3>
          <p>
            Cor:{" "}
            {reference && reference.optionsProduct.color}
          </p>
          <p>
            Tamanho:{" "}
            {reference && reference.optionsProduct.size}
          </p>
        </div>
      </div>
    </div>
  );
};
