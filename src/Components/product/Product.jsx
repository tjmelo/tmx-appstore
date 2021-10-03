import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import product from "./product.module.scss";
import { LogicProducts } from "./components/Logic";
import {
  TitleProduct,
  InfoProduct,
  QtdeProducts,
  UnitProduct,
  MessagePromotionProducts,
} from "./components";
import { ProductContext } from "../../context/ProductContext";

import { cleanItems } from "../../features/product/productSlice";

export const Product = () => {
  let link = useHistory();
  const dispatch = useDispatch();
  const referenceItems = useSelector(
    (state) => state.product.items
  );

  useEffect(() => {
    sessionStorage.setItem(
      "CART",
      JSON.stringify(referenceItems)
    );
    if (referenceItems.length === 0) link.push("/empty");
  }, [referenceItems, link]);

  const deleteCart = () => dispatch(cleanItems());

  return (
    <section className={product.area}>
      <TitleProduct style={product} />

      {referenceItems.map((el, idx) => (
        <div key={idx}>
          <InfoProduct reference={el} style={product} />
          <ProductContext.Provider value={referenceItems}>
            <LogicProducts
              style={product}
              reference={el}
              idx={idx}
            />
          </ProductContext.Provider>
          <QtdeProducts reference={el} style={product} />
          <UnitProduct reference={el} style={product} />
          <MessagePromotionProducts
            reference={el}
            style={product}
          />
        </div>
      ))}

      <Link
        onClick={() => deleteCart()}
        className={product.cleanCart}
        to="/empty"
      >
        limpar carrinho
      </Link>
    </section>
  );
};
