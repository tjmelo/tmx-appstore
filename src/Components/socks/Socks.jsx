import React, { useEffect, useState } from "react";
import { urlSocks } from "../../service/api";
import { Cards } from "../cards/Cards";

export const Socks = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(urlSocks, { method: `GET` })
      .then((data) => data.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <>
      <h1 className="title">Produtos</h1>
      <h2 className="subTitle">Promoções em destaque</h2>
      <section className="containerPromotions">
        {products.map((el, idx) => (
          <Cards
            key={idx}
            id={el.id}
            promotion={el.promotion}
            image={el.image}
            title={el.title}
            price={el.price}
            discount={el.discount}
          />
        ))}
      </section>
    </>
  );
};
