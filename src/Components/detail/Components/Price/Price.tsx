import React from "react";
import style from "./price.module.scss";

import { FormatCurrency } from "../../../../utils/format-currency";

type PriceProps = {
    price: number;
    discount: number;
}

export const Price: React.FC<PriceProps> = ({ price, discount }): JSX.Element => {
    return (
        <>
            <p className={style.realPrice}>
                R$ {
                    discount
                    && new FormatCurrency(price ? price : 0, 2, 3, ".", ",").format()
                }
            </p>
            <p className={style.discountPrice}>
                R$ { 
                    price 
                    ? new FormatCurrency(discount ? discount : 0, 2, 3, ".", ",").format()
                    : '...'
                }
            </p>
        </>
    );
};
