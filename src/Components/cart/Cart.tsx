import React, { lazy, ReactNode, useState } from "react";
import { subtotal, totalDiscount } from "./values";
import cart from "./cart.module.scss";

const Abstract = lazy(() => import("../abstract"));
const Product = lazy(() => import("../product"));

type CartProps = ReactNode | unknown

export const Cart: React.FC<CartProps> = (): JSX.Element => {
    const [qtdePay, setQtdePay] = useState<number>(0);
    const [qtdeDiscount, setQtdeDiscount] = useState<number>(0);

    const orderPay: Array<object> = [], orderDiscount: Array<object> = [];

    const getGeneralValues = (values: object) => {
        return (
            setQtdePay(subtotal(values, orderPay)),
            setQtdeDiscount(totalDiscount(values, orderDiscount))
        );
    };

    return (
        <section className={cart.area}>
            <h1 className={cart.title}>My cart</h1>
            <div className={cart.content}>
                <Product values={getGeneralValues} />
                <Abstract subtotal={qtdePay} discount={qtdeDiscount} />
            </div>
        </section>
    );
};
