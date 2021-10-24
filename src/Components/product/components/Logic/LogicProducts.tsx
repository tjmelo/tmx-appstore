import React, {
  useReducer,
  lazy,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { removeItems } from "../../../../features/product/productSlice";

const InputProducts = lazy(
  () => import("./components/input")
);

const ButtonsProducts = lazy(
  () => import("./components/button")
);

const MessagePromotionProducts = lazy(
  () => import("../MessagePromotionProducts")
);

import { logicalProducts } from "../../../../utils/logical-products";

import style from "./logicProducts.module.scss";

declare interface LogicProductsProps {
  reference: any;
  getValues: any;
}

export const LogicProducts: React.VFC<LogicProductsProps> =
  ({ reference, getValues }): JSX.Element => {
    const dispatch = useDispatch();
    let [state, qtde] = useReducer(logicalProducts, {
      qtde: 1,
    });
    const removeItem = (id: any) =>
      dispatch(removeItems(id));

    const calcTotalValue = () => {
      let discount =
        reference.promo === "1"
          ? Math.floor(state.qtde / 2 + (state.qtde % 2)) *
            reference.discount
          : reference.promo === "2"
          ? (state.qtde - Math.floor(state.qtde / 3)) *
            reference.discount
          : state.qtde * reference.discount;

      let total = state.qtde * reference.price;
      return getValues({ discount, total });
    };

    useEffect(() => calcTotalValue(), [state]);

    const [disabled, setDisabled] = useState<boolean>(true);

    useEffect(() => {
      state.qtde > 1
        ? setDisabled(false)
        : setDisabled(true);
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

          <InputProducts value={state.qtde} />

          <ButtonsProducts
            title="Substract"
            simbol="+"
            disabled={false}
            fn={() => qtde({ type: "increment" })}
          />
        </ul>
        <span className={style.remove}>
          {" "}
          <button
            title="Remove this product"
            onClick={() => removeItem(reference.index)}
          >
            remove
          </button>
        </span>
        <MessagePromotionProducts
          qtde={state.qtde}
          reference={reference}
        />
      </div>
    );
  };
