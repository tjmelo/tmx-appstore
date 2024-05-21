import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";

const TitleProduct = lazy(() => import("./components/titleProducts"));
const CardProducts = lazy(() => import("./components/cardProduct"));

import { cleanItems } from "../../features/product/productSlice";
import style from "./product.module.scss";

type ProductProps = {
    values: object;
}

type TState = {
    product: {
        items: []
    }
}

export const Product: React.FC<ProductProps> = ({ values }): JSX.Element => {
    const link = useNavigate();
    const dispatch = useDispatch();
    const referenceItems = useSelector((state: TState) => state.product.items);
    
    useEffect(() => {
        sessionStorage.setItem("CART", JSON.stringify(referenceItems));
        if (referenceItems.length === 0) link("/empty");
    }, [referenceItems]);
    
    
    const deleteCart = () => dispatch(cleanItems());

    return (
        <section className={style.area}>
            <TitleProduct />
            {
                referenceItems.map((el: {id: number}) => (
                    <CardProducts reference={el} geralValues={values} key={el.id} />
                ))
            }

            <Link onClick={() => deleteCart()} className={style.cleanCart} to="/empty">
                <FontAwesomeIcon icon={faTrashAlt} />
                Clean cart
            </Link>
        </section>
    );
};
