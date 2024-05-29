import React, { ReactElement } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import cart from "./cart.module.scss";

type CartProps = ReactElement | unknown;

type TState = {
    product: {
        items: string;
    };
};

export const Cart: React.FC<CartProps> = () => {
    const referenceItems = useSelector((state: TState) => state.product.items);
    
    return (
        <div className={cart.cart}>
            <Link to="/cart">
                <div className={cart.amount} data-testid="cart">
                    <span className={cart.number}>{referenceItems.length}</span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                My car
            </Link>
        </div>
    );
};
