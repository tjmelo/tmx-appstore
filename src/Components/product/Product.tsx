import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { cleanItems } from "../../features/product/productSlice";
import { CART } from "../../constants";

import style from "./product.module.scss";

const TitleProduct = lazy(() => import("./components/titleProducts"));
const CardProducts = lazy(() => import("./components/cardProduct"));


type ProductProps = {
    values: CallableFunction;
}

type TState = {
    product: {
        items: []
    }
}

type TReference = {
    id: number,
    price: number,
    discount: number,
    image: string,
    title: string,
    colorChoose: string,
    sizeChoose: Array<string>,
    promo: string,
    index: number,
    promotion: string,
}

export const Product: React.FC<ProductProps> = ({ values }): JSX.Element => {
    const link = useNavigate();
    const dispatch = useDispatch();
    const referenceItems = useSelector((state: TState) => state.product.items);
    
    useEffect(() => {
        sessionStorage.setItem(CART, JSON.stringify(referenceItems));
        if (referenceItems.length === 0) link("/empty");
    }, [referenceItems, link]);
    
    const deleteCart = () => dispatch(cleanItems());

    const toListCardProducts = (el: TReference) => (
        <CardProducts reference={el} generalValues={values} key={el.id} />
    )

    return (
        <section className={style.area}>
            <TitleProduct />
            {referenceItems.map(toListCardProducts)}
            <Link onClick={deleteCart} className={style.cleanCart} to="/empty">
                <FontAwesomeIcon icon={faTrashAlt} />
                Clean cart
            </Link>
        </section>
    );
};
