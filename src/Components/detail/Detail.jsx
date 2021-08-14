import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import detail from "./detail.module.css";

import { productItems } from "../../features/product/productSlice";

import { urlProducts } from "../api";

export const Detail = () => {
  let link = useHistory();
  let { id } = useParams();
  const dispatch = useDispatch();
  const referenceItens = useSelector(
    (state) => state.product.items
  );

  let chk = false;
  const optionsProduct = {};

  const [product, setProduct] = useState("Loading...");
  useEffect(() => {
    let request = true;
    fetch(`${urlProducts}/${id}`, { method: `GET` })
      .then((data) => data.json())
      .then((res) => (request ? setProduct(res) : 0));
    return () => (request = false);
  }, [id]);

  if (product.color)
    if (product.color.length <= 1) {
      chk = true;
    }

  const validator = (val, obj) => {
    let options = val,
      valid = false;
    let posItems = referenceItens.length;
    for (let opt of options) {
      if (opt.querySelector(`input`).checked === true) {
        obj === "color"
          ? (optionsProduct.color =
              opt.querySelector(`input`).value)
          : (optionsProduct.size =
              opt.querySelector(`input`).value);

        optionsProduct.ref = posItems;
        optionsProduct.id = Number(id);
        optionsProduct.qt = 0;
        optionsProduct.baseCalc = product.discount;
        optionsProduct.qtde = 1;
        optionsProduct.realTotal = product.price;
        optionsProduct.discountTotal = product.discount;
        valid = true;
      }
    }
    if (valid !== true) {
      for (let opt of options) {
        opt.parentNode.classList.add(`${detail.warning}`);
        opt.parentNode
          .querySelector(`.${detail.messageWarning}`)
          .classList.add(`${detail.warningShow}`);
      }
    }
  };

  const resetValues = (val, a = false) => {
    let options = val;
    for (let opt of options) {
      a
        ? opt.classList.remove(`${detail.warning}`)
        : opt.parentNode.classList.remove(
            `${detail.warning}`
          );
      opt.parentNode
        .querySelector(`.${detail.messageWarning}`)
        .classList.remove(`${detail.warningShow}`);
    }
  };
  const resetSize = () =>
    resetValues(
      document.querySelectorAll(`.${detail.groupOption}`)
    );
  const resetColor = () =>
    resetValues(
      document.querySelectorAll(`.${detail.color}`),
      true
    );

  const toBuy = () => {
    validator(
      document.querySelectorAll(`.${detail.color} span`),
      "color"
    );
    validator(
      document.querySelectorAll(`.${detail.groupOption}`),
      "size"
    );
    let { color, size } = optionsProduct;
    if (color && size) {
      let objetoProduto = { ...product, optionsProduct };
      dispatch(productItems(objetoProduto));
      link.push("/cart");
    }
  };

  return (
    <section>
      <h1 className="title">Produtos</h1>
      <div className={detail.breadcrumbs}>
        <a href="/">Produtos</a> /{" "}
        <a href={`/${product.type}`}>{product.name}</a> /{" "}
        <a href={`/filter/${product.category}`}>
          {product.category}
        </a>
      </div>
      <h1>{product.title}</h1>
      <div className={detail.details}>
        <div className={detail.images}>
          <div className={detail.thumbnails}>
            <figure>
              <img
                src={product.image}
                alt={product.title}
                title={product.title}
              />
            </figure>
            <figure>
              <img
                src={product.image}
                alt={product.title}
                title={product.title}
              />
            </figure>
            <figure>
              <img
                src={product.image}
                alt={product.title}
                title={product.title}
              />
            </figure>
            <figure>
              <img
                src={product.image}
                alt={product.title}
                title={product.title}
              />
            </figure>
          </div>
          <div className={detail.view}>
            <img
              src={product.image}
              alt={product.title}
              title={product.title}
            />
          </div>
        </div>
        <div className={detail.info}>
          <p className={detail.realPrice}>
            R$ {Number(product.price).toFixed(2)}
          </p>
          <p className={detail.discountPrice}>
            R$ {Number(product.discount).toFixed(2)}
          </p>
          <div className={detail.color}>
            <p>COR:</p>
            {product.color &&
              product.color.map((el, idx) =>
                chk ? (
                  <span key={idx}>
                    <input
                      type="radio"
                      defaultChecked={chk}
                      name="color"
                      value={el}
                      id={idx}
                    />
                    <label htmlFor={idx}>{el}</label>
                  </span>
                ) : (
                  <span key={idx}>
                    <input
                      type="radio"
                      name="color"
                      onChange={resetColor}
                      value={el}
                      id={idx}
                    />
                    <label htmlFor={idx}>{el}</label>
                  </span>
                )
              )}
            {/* Warning Empty Color */}
            <p className={detail.messageWarning}>
              Selecione uma cor
            </p>
          </div>
          <div className={`${detail.productSize}`}>
            <p>TAMANHO</p>

            {product.size &&
              product.size.map((el, idx) => (
                <div
                  className={detail.groupOption}
                  key={idx}
                >
                  <input
                    className={detail.productOption}
                    onChange={resetSize}
                    type="radio"
                    name="productSize"
                    value={el}
                    id={el}
                  />
                  <label htmlFor={el}>{el}</label>
                </div>
              ))}

            {/* Warning Empty Size */}
            <p className={detail.messageWarning}>
              Selecione um tamanho
            </p>
          </div>

          {product.promotion && (
            <div className={detail.note}>
              <p>
                <strong>
                  Promoção disponível para este produto!
                </strong>
              </p>
              <p>{product.promotion}</p>
            </div>
          )}

          <button className={detail.btnBuy} onClick={toBuy}>
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
};
