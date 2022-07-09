import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import cart from "./cart.module.scss";
import { useSelector } from "react-redux";

interface CartProps {}

export const Cart: React.VFC<CartProps> =
  (): JSX.Element => {
    const referenceItems: any = useSelector(
      (state: any) =>
        state.product.items
    );
    return (
      <div className={cart.cart}>
        <Link to="/cart">
          <div className={cart.amount} data-testid="cart">
            <span className={cart.number}>
              {referenceItems.length}
            </span>
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          My car
        </Link>
      </div>
    );
  };
