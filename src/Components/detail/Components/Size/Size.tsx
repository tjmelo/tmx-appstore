import React from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./size.module.scss";

declare interface SizeProps {
  size: string[],
  changeSize: (e: string) => void,
  verify: string | null | boolean
}

export const Size: React.VFC<SizeProps> = ({
  size,
  changeSize,
  verify
}): JSX.Element => {
  return (
    <div className={`${style.productSize}`}>
      <p>
        <strong>Size:</strong>
      </p>

      {size &&
        size.map((el, idx) => (
          <div className={style.groupOption} key={idx}>
            <input
              className={style.productOption}
              onChange={() => changeSize(el)}
              type="radio"
              name="productSize"
              value={el}
              id={el}
            />
            <label htmlFor={el}>{el}</label>
          </div>
        ))
      }

      { 
        (verify !== null && !!verify !== true ) && (
            <p className={style.messageWarning}>
                <FontAwesomeIcon className={style.icon} icon={faExclamationCircle} />
                Select a size
            </p>
        )
      }

    </div>
  );
};
