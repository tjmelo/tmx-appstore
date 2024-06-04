import React, { lazy, useEffect, useState } from "react";

const InfoProduct = lazy(() => import("../infoProducts"));
const UnitProducts = lazy(() => import("../unitProducts"));
const TotalProducts = lazy(() => import("../totalProducts"));
const LogicProducts = lazy(() => import("../Logic"));

import style from "./cardProduct.module.scss";

type CardProductsProps = {
    reference: {
        id: number,
        price: number,
        discount: number,
        image: string,
        title: string,
        colorChoose: string,
        sizeChoose: Array<string>
        
    };
    generalValues: CallableFunction
}

export const CardProducts: React.FC<CardProductsProps> = ({
    reference,
    generalValues,
}): JSX.Element => {

    const [values, setValues] = useState<any>(0);

    const getValues = (values: object) => {
        const id = reference.id;
        const concatenatedValues = { id, ...values };
        setValues(concatenatedValues);
    };

    useEffect(() => generalValues(values), [getValues]);

    return (
        <div className={style["detail-products"]} data-testid="box-card-products">
            <InfoProduct reference={reference} />
            <LogicProducts reference={reference} getValues={getValues} />
            <UnitProducts reference={reference} />
            <TotalProducts totals={values} />
        </div>
    );
};
