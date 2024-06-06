import React from "react";
import style from "./titleProducts.module.scss";

export const TitleProduct: React.FC = () => {
    return (
        <div className={style.titles}>
            <h2 className={style.titleProd}>Products</h2>
            <h2 className={style.titleQtde}>Quantity</h2>
            <h2 className={style.titleUnity}>Unitary</h2>
            <h2 className={style.titleTotal}>Total</h2>
        </div>
    );
};
