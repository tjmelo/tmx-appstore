import React from "react";

import style from "./inputProducts.module.scss";

type InputProductsProps = {
    value: string;
}

export const InputProducts: React.FC<InputProductsProps> = ({ value }): JSX.Element => {
    return (
        <input
            className={style.input}
            onChange={() => {}}
            value={value}
        />
    );
};
