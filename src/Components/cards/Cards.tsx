import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FormatCurrency } from "../../utils/format-currency";

import style from "./cards.module.scss";

type CardsProps = {
    id: number;
    promotion: string;
    image: string;
    title: string;
    price: number;
    discount: number;
};

export const Cards: React.FC<CardsProps> = ({
    id,
    promotion,
    image,
    title,
    price,
    discount,
}): JSX.Element => {
    const setURLTitle = title?.replaceAll(" ", "-").toLocaleLowerCase();
    const toCacheChoosedItem = () => localStorage.setItem("INTEREST_ITEM", `${id}`);

    return (
        <Link to={`/detail/${setURLTitle}`} className={style.card} onClick={toCacheChoosedItem}>
            {promotion && (
                <div className={style.promotion}>
                    <p>promotion available</p>
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
                <span>R$ {new FormatCurrency(price, 2, 3, ".", ",").format()}</span>
                <p>R$ {new FormatCurrency(discount, 2, 3, ".", ",").format()}</p>
            </div>
            <button data-testid="tobuy" className={`btn ${style.cardbtn}`}>
                <FontAwesomeIcon icon={faShoppingCart} />
                Buy
            </button>
        </Link>
    );
};
