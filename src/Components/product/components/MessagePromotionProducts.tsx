import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";

import style from "../product.module.scss";

type MessagePromotionProductsProps = {
    reference: {
        promotion: string,
        promo: string,
    };
    qtde: number;
}

const MessagePromotionProducts: React.FC<MessagePromotionProductsProps> = ({
    reference,
    qtde,
}) => {
    const toSetMessage = (
        <p className={style['warning-promotion']}>
            <FontAwesomeIcon icon={faExclamationCircle} />
            {reference.promotion}
        </p>
    );

    let returnMessage = null

    if (reference.promotion) {
        if (reference.promo === "1") {
            if (qtde >= 2) returnMessage = toSetMessage
        }
        if (reference.promo === "2") {
            if (qtde >= 3) returnMessage = toSetMessage
        }
    }

    return returnMessage
};

export default MessagePromotionProducts;
