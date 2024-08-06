import React from "react";

import style from "./buttonProducts.module.scss";

type ButtonsProductsProps = {
    title: string;
    simbol: string;
    disabled: boolean;
    fn: () => void;
}

export const ButtonsProducts: React.FC<ButtonsProductsProps> = ({
    title,
    simbol,
    disabled,
    fn,
}): JSX.Element => {
    return (
        <button className={style.substract} onClick={fn} title={title} disabled={disabled}>
            {simbol}
        </button>
    );
};
