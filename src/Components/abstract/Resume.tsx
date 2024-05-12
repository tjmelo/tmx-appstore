import React from "react";

import { FormatCurrency } from "../../utils/format-currency";
import abstract from "./abstract.module.scss";

type SummaryDetail = {
    title: string,
    param: number,
    header?: boolean
}

export const Resume:React.FC<SummaryDetail> = ({header, title, param})  => {
    if (!header) {
        return (
            <div className={abstract.resume}>
                <p>{title}</p>
                <p className={abstract.number}>
                    R${" "}
                    {new FormatCurrency(param, 2, 3, ".",",").format()}
                </p>
            </div>
        )
    } else {
        return (
            <div className={abstract.total}>
                <h3 className={abstract.index}>{title}</h3>
                <h3 className={abstract.value}>
                    R${" "}
                    {new FormatCurrency(param, 2, 3, ".", ",").format()}
                </h3>
            </div>
        )
    }        
}
