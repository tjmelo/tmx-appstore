import React, { lazy, useEffect, useState } from "react";
import { getProducts } from "../../service/api";

const Cards = lazy(() => import("../cards"));

export const Promotions = () => {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const prod = await getProducts;
    setProducts(prod.data);
  }, [products.data]);

  return (
    <section
      data-testid="cards"
      className="containerPromotions"
    >
      {products.map((el, idx) => (
        <Cards
          key={idx}
          id={el.id}
          image={el.image}
          promotion={el.promotion}
          title={el.title}
          price={el.price}
          discount={el.discount}
        />
      ))}
    </section>
  );
};
