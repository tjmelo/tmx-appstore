import React, { useReducer, lazy, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const InputProducts = lazy(() => import("./components/input"));
const ButtonsProducts = lazy(() => import("./components/button"));
const MessagePromotionProducts = lazy(() => import("../MessagePromotionProducts"));

import { removeItems } from "../../../../features/product/productSlice";
import { logicalProducts } from "../../../../utils/logical-products";

import style from "./logicProducts.module.scss";

type LogicProductsProps = {
    reference: {
        promotion: string,
        promo: string,
        discount: number,
        price: number,
        index: number
    };
    getValues: CallableFunction;
}

export const LogicProducts: React.FC<LogicProductsProps> = ({
    reference, 
    getValues,
}): JSX.Element => {
    const dispatch = useDispatch(); 
    
    const [state, qtde] = useReducer(logicalProducts, {
        qtde: 1,
    });

    const removeItem = (id: number) => dispatch(removeItems(id));

    const calcTotalValue = () => {
        const discount = reference.promo === "1"
            ? Math.floor(state.qtde / 2 + (state.qtde % 2)) * reference.discount
            : reference.promo === "2"
                ? (state.qtde - Math.floor(state.qtde / 3)) * reference.discount
                : state.qtde * reference.discount;

        const total = state.qtde * reference.price;
        return getValues({ discount, total });
    };

    useEffect(() => calcTotalValue(), [state]);

    const [disabled, setDisabled] = useState<boolean>(true);

    useEffect(() => {
        state.qtde > 1 ? setDisabled(false) : setDisabled(true);
    }, [state]);

    return (
        <div className={style.content}>
            <ul>
                <ButtonsProducts
                    title="Add"
                    simbol="-"
                    disabled={disabled}
                    fn={() => qtde({ type: "decrement" })}
                />

                <InputProducts value={`${state.qtde}`} />

                <ButtonsProducts
                    title="Substract"
                    simbol="+"
                    disabled={false}
                    fn={() => qtde({ type: "increment" })}
                />
            </ul>
            <span className={style.remove}>
                <button title="Remove this product" onClick={() => removeItem(reference.index)}>
                    remove
                </button>
            </span>
            <MessagePromotionProducts qtde={state.qtde} reference={reference} />
        </div>
    );
};
