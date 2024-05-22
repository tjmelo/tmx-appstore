import React from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./size.module.scss";

type SizeProps = {
    changeSize: (e: string) => void;
    size: Array<string>;
    verify: string | null | boolean;
}

export const Size: React.FC<SizeProps> = ({ size, changeSize, verify }): JSX.Element => {
    const toSequenceSize = (el: string, idx: number) => (
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
        )

    return (
        <div className={`${style.productSize}`}>
            <p>
                <strong>Size:</strong>
            </p>

            {size &&
                size.map(toSequenceSize)}

                {(verify !== null && !verify ) && (
                <p className={style.messageWarning}>
                    <FontAwesomeIcon className={style.icon} icon={faExclamationCircle} />
                    Select a size
                </p>
            )}
        </div>
    );
};
