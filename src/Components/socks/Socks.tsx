import axios from "axios";
import React, { useEffect, useState } from "react";
import { URLPRODUCTS } from "../../constants";
import { Cards } from "../cards/Cards";
import { Loading } from "../loading";

type TCardSocks = {
    id: number,
    promotion: string,
    image: string,
    title: string,
    price: number,
    discount: number
}

export const Socks: React.FC = (): JSX.Element => {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${URLPRODUCTS}/socks?key=${process.env.REACT_APP_API_KEY}`);
            setProducts(data.socks);
        })();
    }, []);

    const toListCardItems = (el: TCardSocks, idx: number) => (
        <Cards
            key={idx}
            id={el.id}
            promotion={el.promotion}
            image={el.image}
            title={el.title}
            price={el.price}
            discount={el.discount}
        />
    )

    return (
        <>
            <h1 className="title">Produtos</h1>
            <h2 className="subTitle">Promoções em destaque</h2>
            <section className="container-promotions" data-testid="socks-promotions">
                {
                    products.length !== 0 
                    ? products.map(toListCardItems) 
                    : <Loading />
                }
            </section>
        </>
    );
};
