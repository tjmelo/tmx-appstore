import React, { lazy, useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import style from "./product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";

import { cleanItems } from "../../features/product/productSlice";

const TitleProduct = lazy(
  () => import("./components/titleProducts")
);

const CardProducts = lazy(
  () => import("./components/cardProduct")
);

declare interface ProductProps {
  values: any;
}

export const Product: React.VFC<ProductProps> = ({
  values,
}): JSX.Element => {
  let link: any = useNavigate();
  const dispatch = useDispatch();
  const referenceItems: any = useSelector(
    (state: any) =>
      state.product.items
  );

  useEffect(() => {
    sessionStorage.setItem(
      "CART",
      JSON.stringify(referenceItems)
    );
    if (referenceItems.length === 0) link.push("/empty");
  }, [referenceItems]);

  const deleteCart = () => dispatch(cleanItems());

  return (
    <section className={style.area}>
      <TitleProduct />
      {referenceItems?.map((el: object, idx: number) => (
        <CardProducts
          reference={el}
          geralValues={values}
          key={idx}
        />
      ))}

      <Link
        onClick={() => deleteCart()}
        className={style.cleanCart}
        to="/empty"
      >
        <FontAwesomeIcon icon={faTrashAlt} />
        Clean cart
      </Link>
    </section>
  );
};
