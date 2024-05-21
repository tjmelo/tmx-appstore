import React, { useEffect, useState } from "react";
import { URLPRODUCTS } from "../../constants";
import { Cards } from "../cards/Cards";
import axios from "axios";

interface ShoesProps {}

export const Shoes: React.VFC<ShoesProps> =
  (): JSX.Element => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      (async () => {
        const shoes = await axios.get(`${URLPRODUCTS}/?type=Shoes`);
        setProducts(shoes.data);
      })();
    }, []);

    return (
      <>
        <h1 className="title">Products</h1>
        <h2 className="subTitle">Featured Promotions</h2>
        <section
          className="container-promotions"
          data-testid="shoes-promotions"
        >
          {products.map((el: any, idx: number) => (
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
