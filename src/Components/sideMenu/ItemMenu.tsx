import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type TIcon = {
    icon: IconDefinition,
    type: string,
    test: string
}

export const ItemMenu = ({icon, type, test}: TIcon) => {
    return (
        <li>
          <Link
            to={`/${type}`}
            title={`${type[0].toUpperCase()}${type.slice(1)}`}
            data-testid={test}
          >
            <FontAwesomeIcon icon={icon} />
          </Link>
        </li>
    )
}