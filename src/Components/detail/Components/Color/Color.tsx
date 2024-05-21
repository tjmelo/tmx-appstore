import React from "react";
import style from "./color.module.scss";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ColorProps = {
    color: any;
    changeColor: (e: string) => void;
    verify: string | null | boolean;
};

export const Color: React.FC<ColorProps> = ({ color, changeColor, verify }): JSX.Element => {
    const toChanged = (value: string) => changeColor(value);

    const toSequenceColor = (el: string, idx: string) => (
        <span key={idx}>
            <input
                type="radio"
                name="color"
                onChange={() => toChanged(el)}
                value={el}
                id={idx} />
            <label htmlFor={idx}>{el}</label>
        </span>
    )

    return (
        <div className={style.color}>
            <p>
                <strong>Color:</strong>
            </p>
            {color && color.map(toSequenceColor)}
            {(verify !== null && !verify ) && (
                <p className={style.messageWarning}>
                    <FontAwesomeIcon className={style.icon} icon={faExclamationCircle} />
                    Select a color
                </p>
            )}
        </div>
    );
};
