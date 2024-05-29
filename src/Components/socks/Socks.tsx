import React, { useEffect, useState } from "react";
import { URLPRODUCTS } from "../../constants";
import { Cards } from "../cards/Cards";
import axios from "axios";

interface SocksProps {}

export const Socks: React.VFC<SocksProps> =
  (): JSX.Element => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      (async () => {
        const socks = await axios.get(`${URLPRODUCTS}/?type=Sock`);
        setProducts(socks.data);
      })();
    }, []);

    return (
      <>
        <h1 className="title">Produtos</h1>
        <h2 className="subTitle">Promoções em destaque</h2>
        <section
          className="container-promotions"
          data-testid="socks-promotions"
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
