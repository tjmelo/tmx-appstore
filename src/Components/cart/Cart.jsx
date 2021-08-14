import React from "react";
import cart from "./cart.module.css";
import { Abstract } from "../abstract/Abstract";
import { Product } from "../product/Product";

export const Cart = () => {
  return (
    <section className={cart.area}>
      <h1 className={cart.title}>Meu carrinho</h1>
      <div className={cart.content}>
        <Product />
        <Abstract />
      </div>
    </section>
  );
};
