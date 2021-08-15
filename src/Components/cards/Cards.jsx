import React from "react";
import { Link } from "react-router-dom";
import style from "./cards.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../../utils/format-current";

export const Cards = ({
  id,
  promotion,
  image,
  title,
  price,
  discount,
}) => {
  return (
    <Link to={`/detail/${id}`} className={style.card}>
      {promotion && (
        <div className={style.promotion}>
          <p>Promoção disponível!</p>
        </div>
      )}
      <img
        data-testid="image"
        src={`${process.env.PUBLIC_URL}${image}`}
        alt={title}
        title={title}
      />
      <h3>{title}</h3>
      <div className={style.price} data-testid="price">
        <span>
          R$ {parseFloat(price).format(2, 3, ".", ",")}
        </span>
        <p>
          R$ {parseFloat(discount).format(2, 3, ".", ",")}
        </p>
      </div>
      <button
        data-testid="tobuy"
        className={`btn ${style.cardbtn}`}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        Comprar
      </button>
    </Link>
  );
};
