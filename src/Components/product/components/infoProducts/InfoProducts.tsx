import React from "react";
import style from "./infoProducts.module.scss";

declare interface InfoProductProps {
  reference: any;
}

export const InfoProduct: React.VFC<InfoProductProps> = ({
  reference,
}) => {
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
          <p>Color: {reference && reference.colorChoose}</p>
          <p>Size: {reference && reference.sizeChoose}</p>
        </div>
      </div>
    </div>
  );
};
