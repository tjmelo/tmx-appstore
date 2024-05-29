import React from "react";
import style from "./unitProducts.module.scss";

import { FormatCurrency } from "../../../../utils/format-currency";

type unitProductsProps = {
    reference: {
        price: number,
        discount: number
    }
}

export const UnitProducts: React.FC<unitProductsProps> = ({ reference }) => {

    const toRealPriceReference = () => {
        return reference.price !== reference.discount && (
            <span>R$ {new FormatCurrency(reference.price, 2, 3, ".", ",").format()}</span>
        )
    }

    return (
        <div className={style.unitary}>
            <p className={style.vreal}>{ toRealPriceReference() }</p>
            <p className={style.vdiscount}>
                <span>R$ {new FormatCurrency(reference.discount, 2, 3, ".", ",").format()}</span>
            </p>
        </div>
    );
};
