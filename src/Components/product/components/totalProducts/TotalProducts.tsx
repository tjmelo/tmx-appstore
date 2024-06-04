import React from "react";
import { FormatCurrency } from "../../../../utils/format-currency";

import style from "./totalProducts.module.scss";

type TotalProductsProps = {
    totals: {
        id: number,
        total: number,
        discount: number
    };
}

export const TotalProducts: React.FC<TotalProductsProps> = ({ totals }): JSX.Element => {
    const toRealPriceReference = () => {
        return totals.total !== totals.discount && (
            <span>R$ {new FormatCurrency(totals.total, 2, 3, ".", ",").format()}</span>
        )
    }

    return (
        <div className={style.content}>
            <div className={style.total}>
                <p className={style.treal}>{ toRealPriceReference() }</p>
                <p className={style.tdiscount}>
                    <span>
                        R$ {totals && new FormatCurrency(totals.discount, 2, 3, ".", ",").format()}
                    </span>
                </p>
            </div>
        </div>
    );
};
