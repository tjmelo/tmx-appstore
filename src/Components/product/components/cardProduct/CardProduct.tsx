import React, { lazy, useCallback, useEffect, useState } from "react";
import style from "./cardProduct.module.scss";

const InfoProduct = lazy(() => import("../infoProducts"));
const UnitProducts = lazy(() => import("../unitProducts"));
const TotalProducts = lazy(() => import("../totalProducts"));
const LogicProducts = lazy(() => import("../Logic"));

type CardProductsProps = {
    reference: {
        id: number,
        price: number,
        discount: number,
        image: string,
        title: string,
        colorChoose: string,
        sizeChoose: Array<string>,
        promo: string,
        index: number,
        promotion: string,
    };
    generalValues: CallableFunction
}

export const CardProducts: React.FC<CardProductsProps> = ({
    reference,
    generalValues,
}): JSX.Element => {

    
    const [values, setValues] = useState<any>(0);
    
    const getValues = useCallback((values: object) => {
        const id = reference.id;
        const concatenatedValues = { id, ...values }
        setValues(concatenatedValues);
    }, [reference.id]);

    useEffect(() => {
        generalValues(values)
    });

    return (
        <div className={style["detail-products"]} data-testid="box-card-products">
            <InfoProduct reference={reference} />
            <LogicProducts reference={reference} getValues={getValues} />
            <UnitProducts reference={reference} />
            <TotalProducts totals={values} />
        </div>
    );
};
