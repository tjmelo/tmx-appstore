import React from "react";
import { Link } from "react-router-dom";

import { Resume } from "./Resume";

import abstract from "./abstract.module.scss";
import { CartSvg } from "../../svgs";

type AbstractProps = {
  subtotal: number;
  discount: number;
}


export const Abstract: React.FC<AbstractProps> = React.memo(({subtotal, discount}): JSX.Element => {
    return (
      <section className={abstract.area}>
        <h2 className={abstract.title}>Summary</h2>
        <div className={abstract.box}>
          <Resume title="Subtotal:" param={subtotal} />
          <Resume title="Discount:" param={discount} />
          <Resume header title="Total:" param={subtotal} />
        </div>
  
        <Link to="/" className={abstract.btnContinue}>
          <CartSvg />
          Keep buying
        </Link>
        
        <button className={abstract.btnFinal}>
          Finish order
        </button>
      </section>
    );
});

Abstract.displayName = 'Abstract';
