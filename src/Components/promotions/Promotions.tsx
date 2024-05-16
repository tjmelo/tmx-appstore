import React, { lazy, useEffect, useState } from "react";
import axios from "axios";
import { URLPRODUCTS } from "../../constants";

import style from './promotion.module.scss';

const Cards = lazy(() => import("../cards"));

type TCards = {
    key: number,
    id: number,
    image: string,
    promotion: string,
    title: string,
    price: number,
    discount: number
}

export const Promotions = () => {
  const [products, setProducts] = useState([]);

  const toRequestProducts = async () => {
    const getProducts = await axios.get(URLPRODUCTS);
    setProducts(getProducts.data);
  }
  
  useEffect(() => {
      toRequestProducts();
  }, []) 

  const toMapListProducts = (el: TCards) => {
    return (
        <Cards
            key={el.id}
            id={el.id}
            image={el.image}
            promotion={el.promotion}
            title={el.title}
            price={el.price}
            discount={el.discount}
        />
    )
  }

  return (
    <section
      data-testid="cards"
      className={style['container-promotions']}
    >
      {products.map(toMapListProducts)}
    </section>
  );
};
