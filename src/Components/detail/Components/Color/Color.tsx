import React from "react";
import style from "./color.module.scss";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

declare interface ColorProps {
  color: string[],
  changeColor: (e: string) => void,
  verify: string | null | boolean
}

export const Color: React.VFC<ColorProps> = ({
  color,
  changeColor,
  verify
}): JSX.Element => {

  const changed = (value:string) => changeColor(value)

  return (
    <div className={style.color}>
      <p>
        <strong>Color:</strong>
      </p>
      {color &&
        color.map((el: any, idx: any) => (
          <span key={idx}>
            <input
              type="radio"
              name="color"
              onChange={() => changed(el)}
              value={el}
              id={idx}
            />
            <label htmlFor={idx}>{el}</label>
          </span>
        ))}
        {
            (verify !== null && !!verify !== true ) && (
                <p 
                    className={style.messageWarning}>
                    <FontAwesomeIcon className={style.icon} icon={faExclamationCircle} />
                        Select a color
                </p>
            )
        }
    </div>
  );
};
