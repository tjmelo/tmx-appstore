import React, { useEffect, useState } from "react";
import { URLPRODUCTS } from "../../constants";
import { Cards } from "../cards/Cards";
import axios from "axios";

type TCard = {
    id: number,
    promotion: string,
    image: string,
    title: string,
    price: number,
    discount: number
}

export const Socks: React.FC = (): JSX.Element => {
    const [products, setProducts] = useState<[]>([]);

    useEffect(() => {
        (async () => {
            const socks = await axios.get(`${URLPRODUCTS}/?type=Sock`);
            setProducts(socks.data);
        })();
    }, []);

    const toListCards = () => {
        return products.map((el: TCard, idx: number) => (
            <Cards
                key={idx}
                id={el.id}
                promotion={el.promotion}
                image={el.image}
                title={el.title}
                price={el.price}
                discount={el.discount}
            />
        ))
    }

    return (
        <>
            <h1 className="title">Produtos</h1>
            <h2 className="subTitle">Promoções em destaque</h2>
            <section className="container-promotions" data-testid="socks-promotions">
                {toListCards()}
            </section>
        </>
    );
};
