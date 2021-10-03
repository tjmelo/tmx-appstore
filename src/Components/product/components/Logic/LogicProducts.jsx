import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateItems,
  removeItems,
} from "../../../../features/product/productSlice";
import {
  ButtonsProducts,
  InputProducts,
} from "./components";
import { dataProduct } from "../../../../utils/data-products";
import { ProductContext } from "../../../../context/ProductContext";

export const LogicProducts = ({
  style,
  reference,
  idx,
}) => {
  const dispatch = useDispatch();
  let [valInput, setValInput] = useState(1);
  const productReference = useContext(ProductContext);
  const removeItem = (id) => dispatch(removeItems(id));
  const subQtde = (id, ref, promotion) => {
    valInput >= 2 && setValInput(Number((valInput -= 1)));
    dispatch(
      updateItems(
        dataProduct(
          id,
          ref,
          promotion,
          style,
          productReference
        )
      )
    );
  };

  const addQtde = (id, ref, promotion) => {
    valInput <= 98 && setValInput(Number((valInput += 1)));
    dispatch(
      updateItems(
        dataProduct(
          id,
          ref,
          promotion,
          style,
          productReference
        )
      )
    );
  };

  return (
    <div className={style.content}>
      <div className={style.unitary}>
        <ul>
          <ButtonsProducts
            title="Menos"
            simbol="-"
            style={style}
            fn={() =>
              subQtde(
                idx,
                reference.optionsProduct.ref,
                reference.promo
              )
            }
          />

          <InputProducts style={style} value={valInput} />

          <ButtonsProducts
            title="Mais"
            simbol="+"
            style={style}
            fn={() =>
              addQtde(
                idx,
                reference.optionsProduct.ref,
                reference.promo
              )
            }
          />
        </ul>
        <span className={style.remove}>
          {" "}
          <button
            onClick={() =>
              removeItem(reference.optionsProduct.ref)
            }
          >
            remover
          </button>
        </span>
      </div>
    </div>
  );
};
