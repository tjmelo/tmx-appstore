import React, { lazy, useState } from "react";
import cart from "./cart.module.scss";
import { subtotal, totalDiscount } from "./values";

const Abstract = lazy(() => import("../abstract"));
const Product = lazy(() => import("../product"));

declare interface CartProps {}

export const Cart: React.VFC<CartProps> =
  (): JSX.Element => {
    const [qtdePay, setQtdePay] = useState<number>(0);
    const [qtdeDiscount, setQtdeDiscount] =
      useState<number>(0);
    let orderPay: object[] = [],
      orderDiscount: object[] = [];

    const geralValues = (values: object) => {
      return (
        setQtdePay(subtotal(values, orderPay)),
        setQtdeDiscount(
          totalDiscount(values, orderDiscount)
        )
      );
    };

    return (
      <section className={cart.area}>
        <h1 className={cart.title}>My cart</h1>
        <div className={cart.content}>
          <Product values={geralValues} />
          <Abstract
            subtotal={qtdePay}
            discount={qtdeDiscount}
          />
        </div>
      </section>
    );
  };
