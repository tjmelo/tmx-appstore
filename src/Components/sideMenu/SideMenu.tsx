import React from "react";

import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons/faStore";
import { faSocks } from "@fortawesome/free-solid-svg-icons/faSocks";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons/faShoePrints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ItemMenu } from "./ItemMenu";

import style from "./sideMenu.module.scss";

export const SideMenu = () => {
  return (
    <nav className={style.sidebar}>
      <ul>
        <li
          className={style.logo}
          title="TMX Store"
          data-testid="test-logo"
        >
          <FontAwesomeIcon icon={faGem} />
          <span>TMX Store</span>
        </li>
        <ItemMenu test="test-home" icon={faStore}/>
        <ItemMenu type="shoes" test="test-shoes" icon={faShoePrints}/>
        <ItemMenu type="socks" test="test-socks" icon={faSocks}/>
      </ul>
    </nav>
  );
};
