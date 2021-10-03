import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";

export const MessagePromotionProducts = ({
  reference,
  style,
}) => {
  let renderMessage = null;

  if (reference.promotion) {
    if (reference.promo === "1") {
      if (reference.optionsProduct.qtde >= 2) {
        renderMessage = (
          <p className={style.warningPromotion}>
            <FontAwesomeIcon icon={faExclamationCircle} />
            {reference.promotion}
          </p>
        );
      }
    }
    if (reference.promo === "2") {
      if (reference.optionsProduct.qtde >= 3) {
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
