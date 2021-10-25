import React, { lazy, useEffect, useState } from "react";

import style from "./cardProduct.module.scss";

const InfoProduct = lazy(() => import("../infoProducts"));
const UnitProducts = lazy(() => import("../unitProducts"));
const TotalProducts = lazy(
  () => import("../totalProducts")
);

const LogicProducts = lazy(() => import("../Logic"));

declare interface CardProductsProps {
  reference: any;
  geralValues: any;
}

export const CardProducts: React.VFC<CardProductsProps> = ({
  reference,
  geralValues,
}): JSX.Element => {
  const [values, setValues] = useState<{} | number>(0);
  const getValues = (values: object) => {
    const id = reference.id;
    const conc = { id, ...values };
    setValues(conc);
  };
  useEffect(() => geralValues(values), [getValues]);

  return (
    <div className={style.detailProducts}>
      <InfoProduct reference={reference} />
      <LogicProducts
        reference={reference}
        getValues={getValues}
      />
      <UnitProducts reference={reference} />
      <TotalProducts totals={values} />
    </div>
  );
};
