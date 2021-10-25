export const dataProduct = (
  id,
  ref,
  promotion,
  style,
  referenceItems
) => {
  let rVal = document.querySelectorAll(
      `.${style.vreal} span`
    ),
    rDis = document.querySelectorAll(
      `.${style.vdiscount} span`
    ),
    pAmount = document.querySelectorAll(
      `.${style.unitary} input`
    );

  let tReal = document.querySelectorAll(
      `.${style.treal} span`
    ),
    tDiscount = document.querySelectorAll(
      `.${style.tdiscount} span`
    );

  tReal[id].textContent =
    Number(rVal[id].textContent) *
    Number(pAmount[id].value);
  tDiscount[id].textContent =
    Number(rDis[id].textContent) *
    Number(pAmount[id].value);

  let qtdeCalc = Number(pAmount[id].value);
  if (promotion === "1") qtdeCalc = Math.ceil(qtdeCalc / 2);

  if (promotion === "2") {
    let bs = Math.floor(qtdeCalc / 3);
    qtdeCalc = qtdeCalc - bs;
  }

  const obj = referenceItems.map((elems) => {
    if (elems.optionsProduct.ref === ref) {
      let a = { ...elems.optionsProduct };
      return {
        ...elems,
        optionsProduct: {
          ...a,
          qt: qtdeCalc,
          qtde: Number(pAmount[id].value),
          baseCalc: Number(rDis[id].textContent) * qtdeCalc,
          realTotal:
            Number(rVal[id].textContent) *
            Number(pAmount[id].value),
          discountTotal:
            Number(rDis[id].textContent) *
            Number(pAmount[id].value),
        },
      };
    } else {
      return { ...elems };
    }
  });

  return obj;
};
