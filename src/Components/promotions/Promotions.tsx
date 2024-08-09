import React, { lazy, useEffect, useState } from "react";
import axios from "axios";
import { URLPRODUCTS } from "../../constants";
import { Loading } from "../loading";

const Cards = lazy(() => import("../cards"));

type TCards = {
    key: number;
    id: number;
    image: string;
    promotion: string;
    title: string;
    price: number;
    discount: number;
};

export const Promotions = () => {
    const [products, setProducts] = useState<[]>([]);

    const toRequestProducts = async () => {
        const { data } = await axios.get(`${URLPRODUCTS}/products?key=${process.env.REACT_APP_API_KEY}`);
        setProducts(data.products);
    };

    useEffect(() => { toRequestProducts() }, []);

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
        );
    };

    return (
        <section data-testid="cards" className="container-promotions">
            {
                products.length !== 0 
                ? products.map(toMapListProducts) 
                : <Loading />
            }
        </section>
    );
};
