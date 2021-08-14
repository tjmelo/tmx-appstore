import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import product from "./product.module.css";

import {
  removeItems,
  updateItems,
  cleanItems,
} from "../../features/product/productSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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

  const addQtde = (id, ref, promotion) => {
    let inputReference = document.querySelectorAll(
      `.${product.unitary} input`
    );
    let val = Number(inputReference[id].value);
    inputReference[id].value <= 98 &&
      (inputReference[id].value = val + 1);
    dataProduct(id, ref, promotion);
  };

  const subQtde = (id, ref, promotion) => {
    let inputReference = document.querySelectorAll(
      `.${product.unitary} input`
    );
    let val = Number(inputReference[id].value);
    inputReference[id].value >= 2 &&
      (inputReference[id].value = val - 1);
    dataProduct(id, ref, promotion);
  };

  const removeItem = (id) => dispatch(removeItems(id));
  const handleQtde = (id, ref) => dataProduct(id, ref);
  const deleteCart = () => dispatch(cleanItems());

  const dataProduct = (id, ref, promotion) => {
    let rVal = document.querySelectorAll(
        `.${product.vreal} span`
      ),
      rDis = document.querySelectorAll(
        `.${product.vdiscount} span`
      ),
      pAmount = document.querySelectorAll(
        `.${product.unitary} input`
      );

    let tReal = document.querySelectorAll(
        `.${product.treal} span`
      ),
      tDiscount = document.querySelectorAll(
        `.${product.tdiscount} span`
      );

    tReal[id].textContent =
      Number(rVal[id].textContent) *
      Number(pAmount[id].value);
    tDiscount[id].textContent =
      Number(rDis[id].textContent) *
      Number(pAmount[id].value);

    let qtdeCalc = Number(pAmount[id].value);
    if (promotion === "1")
      qtdeCalc = Math.ceil(qtdeCalc / 2);

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
            baseCalc:
              Number(rDis[id].textContent) * qtdeCalc,
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

    dispatch(updateItems(obj));
  };

  return (
    <section className={product.area}>
      {/* Title Table */}
      <div className={product.titles}>
        <h2 className={product.titleProd}>Produtos</h2>
        <h2 className={product.titleQtde}>Quantidade</h2>
        <h2 className={product.titleUnity}>Unitário</h2>
        <h2 className={product.titleTotal}>Total</h2>
      </div>
      {/* End Title Table */}

      {referenceItems.map((el, idx) => (
        <div key={idx}>
          <div className={product.content}>
            <div className={product.product}>
              <figure>
                <img
                  src={el.image}
                  title={el.title}
                  alt={el.title}
                />
              </figure>
              <div className={product.productDescription}>
                <h3>{el.title}</h3>
                <p>Cor: {el && el.optionsProduct.color}</p>
                <p>
                  Tamanho: {el && el.optionsProduct.size}
                </p>
              </div>
            </div>
          </div>
          <div className={product.content}>
            <div className={product.unitary}>
              <ul>
                <button
                  className={product.substract}
                  onClick={() =>
                    subQtde(
                      idx,
                      el.optionsProduct.ref,
                      el.promo
                    )
                  }
                  title="Menos"
                >
                  {" "}
                  -{" "}
                </button>
                <input
                  className={product.amount}
                  onChange={() =>
                    handleQtde(
                      idx,
                      el.optionsProduct.ref,
                      el.promo
                    )
                  }
                  value={el.optionsProduct.qtde}
                  maxLength="2"
                />
                <button
                  className={product.add}
                  onClick={() =>
                    addQtde(
                      idx,
                      el.optionsProduct.ref,
                      el.promo
                    )
                  }
                  title="Mais"
                >
                  {" "}
                  +{" "}
                </button>
              </ul>
              <span className={product.remove}>
                {" "}
                <button
                  onClick={() =>
                    removeItem(el.optionsProduct.ref)
                  }
                >
                  remover
                </button>
              </span>
            </div>
          </div>

          <div className={product.content}>
            <div className={product.unitary}>
              <p className={product.vreal}>
                R$ <span>{el.price.toFixed(2)}</span>
              </p>
              <p className={product.vdiscount}>
                R$ <span>{el.discount.toFixed(2)}</span>
              </p>
            </div>
          </div>

          <div className={product.content}>
            <div className={product.total}>
              <p className={product.treal}>
                R${" "}
                <span>
                  {el.optionsProduct.realTotal.toFixed(2)}
                </span>
              </p>
              <p className={product.tdiscount}>
                R${" "}
                <span>
                  {el.optionsProduct.discountTotal.toFixed(
                    2
                  )}
                </span>
              </p>
            </div>
          </div>

          {el.promotion &&
            el.promo === "1" &&
            el.optionsProduct.qtde >= 2 && (
              <p className={product.warningPromotion}>
                {el.promotion}
              </p>
            )}

          {el.promotion &&
            el.promo === "2" &&
            el.optionsProduct.qtde >= 3 && (
              <p className={product.warningPromotion}>
                {el.promotion}
              </p>
            )}
        </div>
      ))}

      {/* Btn Clean Cart */}
      <Link
        onClick={() => deleteCart()}
        className={product.cleanCart}
        to="/empty"
      >
        limpar carrinho
      </Link>
      {/* End Btn Clean Cart */}
    </section>
  );
};
