import React from "react";
import style from "./sideMenu.module.scss";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import {
  faStore,
  faSocks,
  faShoePrints,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

export const SideMenu = () => {
  return (
    <nav className={style.sidebar}>
      <ul>
        <li className={style.logo} title="TMX Store">
          <FontAwesomeIcon icon={faGem} />
          <span>TMX Store</span>
        </li>
        <li>
          <Link to="/" className={style.home} title="Home">
            <FontAwesomeIcon icon={faStore} />
          </Link>
        </li>
        <li>
          <Link to="/shoes" title="Shoes">
            <FontAwesomeIcon icon={faShoePrints} />
          </Link>
        </li>
        <li>
          <Link to="/socks" title="Socks">
            <FontAwesomeIcon icon={faSocks} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
