import React, { useEffect, useState } from "react";
import { getShoes } from "../../service/api";
import { Cards } from "../cards/Cards";

export const Shoes = () => {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const shoes = await getShoes;
    setProducts(shoes.data);
  }, [products]);

  return (
    <>
      <h1 className="title">Produtos</h1>
      <h2 className="subTitle">Promoções em destaque</h2>
      <section
        className="containerPromotions"
        data-testid="shoes-promotions"
      >
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
