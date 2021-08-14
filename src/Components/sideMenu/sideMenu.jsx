import React from "react";
import style from "./sideMenu.module.scss";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faSocks } from "@fortawesome/free-solid-svg-icons";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

export const SideMenu = () => {
  return (
    <nav className={style.sidebar}>
      <ul>
        <li className={style.logo} title="Siteware Store">
          <FontAwesomeIcon icon={faGem} />
        </li>
        <li>
          <Link to="/" className={style.home} title="Home">
            <FontAwesomeIcon icon={faStore} />
          </Link>
        </li>
        <li>
          <Link to="/shoes">
            <FontAwesomeIcon icon={faShoePrints} />
          </Link>
        </li>
        <li>
          <Link to="/socks">
            <FontAwesomeIcon icon={faSocks} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
