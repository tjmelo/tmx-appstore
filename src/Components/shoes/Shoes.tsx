import React, { useEffect, useState } from "react";
import { URLPRODUCTS } from "../../constants";
import { Cards } from "../cards/Cards";
import axios from "axios";

type TCardShoes = {
    key: number,
    id: number,
    promotion: string,
    image: string,
    title: string,
    price: number,
    discount: number,
}

export const Shoes: React.FC= (): JSX.Element => {
    const [products, setProducts] = useState<[]>([]);

    useEffect(() => {
        (async () => {
            const shoes = await axios.get(`${URLPRODUCTS}/?type=Shoes`);
            setProducts(shoes.data);
        })();
    }, []);

    const toListCardItems = () => {
        return products.map((el: TCardShoes, idx: number) => (
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
            <h1 className="title">Products</h1>
            <h2 className="subTitle">Featured Promotions</h2>
            <section className="container-promotions" data-testid="shoes-promotions">
                {toListCardItems()}
            </section>
        </>
    );
};
