import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";

import style from "../product.module.scss";

declare interface MessagePromotionProductsProps {
  reference: any;
  qtde: number;
}

const MessagePromotionProducts: React.VFC<MessagePromotionProductsProps> =
  ({ reference, qtde }) => {
    let renderMessage = null;

    if (reference.promotion) {
      if (reference.promo === "1") {
        if (qtde >= 2) {
          renderMessage = (
            <p className={style.warningPromotion}>
              <FontAwesomeIcon icon={faExclamationCircle} />
              {reference.promotion}
            </p>
          );
        }
      }
      if (reference.promo === "2") {
        if (qtde >= 3) {
          renderMessage = (
            <p className={style.warningPromotion}>
              <FontAwesomeIcon icon={faExclamationCircle} />
              {reference.promotion}
            </p>
          );
        }
      }
    }

    return renderMessage;
  };

export default MessagePromotionProducts;
