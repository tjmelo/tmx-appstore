import React from "react";
import style from "./infoProducts.module.scss";

type InfoProductProps = {
    reference: {
        image: string,
        title: string,
        colorChoose: string,
        sizeChoose: Array<string>
    };
}

export const InfoProduct: React.FC<InfoProductProps> = React.memo(({ reference }) => {
    return (
        <div className={style.content}>
            <div className={style.product}>
                <figure>
                    <img src={reference.image} title={reference.title} alt={reference.title} />
                </figure>
                <div className={style['product-description']}>
                    <h3>{reference.title}</h3>
                    <p>Color: {reference && reference.colorChoose}</p>
                    <p>Size: {reference && reference.sizeChoose}</p>
                </div>
            </div>
        </div>
    );
});

InfoProduct.displayName = 'InfoProduct'
