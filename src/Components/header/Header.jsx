import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import header from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export const Header = () => {
  const referenceItems = useSelector(
    (state) => state.product.items
  );
  return (
    <header className={header.header}>
      <form
        data-testid="search"
        className={header.search}
        action=""
      >
        <input
          type="search"
          placeholder="O que você está procurando"
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className={header.login}>
        <FontAwesomeIcon icon={faUser} />
        <Link data-testid="login" to="/login">
          Login
        </Link>
        <span>|</span>
        <Link data-testid="register" to="/cadastre">
          Cadastre-se
        </Link>
      </div>
      <div className={header.cart}>
        <Link to="/cart">
          <div className={header.amount} data-testid="cart">
            <span className={header.number}>
              {referenceItems.length}
            </span>
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          Meu carrinho
        </Link>
      </div>
    </header>
  );
};
