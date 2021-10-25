import painel from "./painel.module.css";
import { urlProducts } from "../../../service/api";
import { useParams, useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Painel = () => {
  let { id } = useParams(),
    link = useHistory();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    if (id !== "new") {
      fetch(`${urlProducts}/${id}`, { method: `GET` })
        .then((data) => data.json())
        .then((res) => setProduct(res));
    }
  }, [id]);

  const save = (e) => {
    e.preventDefault();
    let inputs = document.getElementById("form").elements;
    let inputsVal = document.querySelectorAll(`.inpt`),
      valid = false;
    inputsVal.forEach((el) => {
      if (el.value === "") {
        el.style.border = "1px solid red";
        valid = true;
      }
    });

    if (!valid) {
      let data = {
        title: inputs["titulo"].value,
        name: inputs["nome"].value,
        color: inputs["color"].value.split(","),
        size: inputs["size"].value.split(","),
        image: inputs["imagem"].value,
        promo: inputs["promo"].value,
        promotion: inputs["promotion"].value,
        type: inputs["product"].value,
        category: inputs["category"].value,
        price: Number(inputs["price"].value),
        discount: Number(inputs["valDiscount"].value),
      };

      if (id !== "new") {
        fetch(`${urlProducts}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }).then(() => link.push("/list"));
      } else {
        fetch(urlProducts, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }).then(() => link.push("/list"));
      }
    }
  };

  return (
    <section>
      <h1>Gerenciamento de Produtos</h1>
      <Link to="/list">Voltar</Link>
      <form id="form" action="">
        <div className={painel.form}>
          <div className={painel.input}>
            <p>Título do produto:</p>
            <input
              type="text"
              className="inpt"
              name="titulo"
              id="titulo"
              placeholder="Defina o título do produto"
              defaultValue={product.title && product.title}
            />
          </div>

          <div className={painel.input}>
            <p>Nome do produto:</p>
            <input
              type="text"
              className="inpt"
              name="nome"
              placeholder="Insira um nome para o produto"
              defaultValue={product.name && product.name}
            />
          </div>

          <div className={painel.input}>
            <p>Cores disponíveis:</p>
            <input
              type="text"
              className="inpt"
              name="color"
              placeholder="Informe as cores separadas por vírgula"
              defaultValue={
                product.color && product.color.join(",")
              }
            />
          </div>

          <div className={painel.input}>
            <p>Tamanhos disponíveis:</p>
            <input
              type="text"
              className="inpt"
              name="size"
              placeholder="Informe os tamanhos separados por vírgula"
              defaultValue={
                product.size && product.size.join(",")
              }
            />
          </div>

          <div className={painel.input}>
            <p>Imagem do produto:</p>
            <select name="imagem" id="imagem">
              <option
                selected={
                  product.image &&
                  product.image === "/shoes/shoe.jpg"
                }
                value="/shoes/shoe.jpg"
              >
                Imagem de um tênis
              </option>
              <option
                selected={
                  product.image &&
                  product.image === "/socks/sock.jpg"
                }
                value="/socks/sock.jpg"
              >
                Imagem de uma meia
              </option>
            </select>
          </div>

          <div className={painel.input}>
            <p>Qual é o tipo do produto?</p>
            <div className={painel.options}>
              <input
                name="product"
                defaultChecked={
                  product.type && product.type === "Tênis"
                }
                type="radio"
                id="shoes"
                value="Tênis"
              />
              <label htmlFor="shoes">Tênis</label>
            </div>
            <div className={painel.options}>
              <input
                name="product"
                defaultChecked={
                  product.type && product.type === "Meia"
                }
                type="radio"
                id="socks"
                value="Meia"
              />
              <label htmlFor="socks">Meia</label>
            </div>
          </div>

          <div className={painel.input}>
            <p>Qual é a categoria do produto?</p>
            <div className={painel.options}>
              <input
                name="category"
                type="radio"
                defaultChecked={
                  product.category &&
                  product.category === "Masculino"
                }
                id="maculino"
                value="Masculino"
              />
              <label htmlFor="maculino">Masculino</label>
            </div>
            <div className={painel.options}>
              <input
                name="category"
                type="radio"
                defaultChecked={
                  product.category &&
                  product.category === "Feminino"
                }
                id="feminino"
                value="Feminino"
              />
              <label htmlFor="feminino">Feminino</label>
            </div>
            <div className={painel.options}>
              <input
                name="category"
                type="radio"
                defaultChecked={
                  product.category &&
                  product.category === "Unissex"
                }
                id="unissex"
                value="Unissex"
              />
              <label htmlFor="unissex">Unissex</label>
            </div>
          </div>

          <div className={painel.input}>
            <p>Preço:</p>
            <input
              type="number"
              className="inpt"
              name="price"
              placeholder="Informe o preço do produto"
              defaultValue={product.price && product.price}
            />
          </div>

          <div className={painel.input}>
            <p>Valor com desconto aplicado:</p>
            <input
              type="number"
              className="inpt"
              name="valDiscount"
              defaultValue={
                product.discount && product.discount
              }
            />
          </div>

          <div className={painel.textarea}>
            <div className={painel.input}>
              <p>Tipo de promoção:</p>
              <div className={painel.options}>
                <input
                  name="promo"
                  defaultChecked={
                    product.promo && product.promo === "0"
                  }
                  type="radio"
                  id="promo0"
                  value="0"
                />
                <label htmlFor="promo1">Sem desconto</label>
              </div>
              <div className={painel.options}>
                <input
                  name="promo"
                  defaultChecked={
                    product.promo && product.promo === "1"
                  }
                  type="radio"
                  id="promo1"
                  value="1"
                />
                <label htmlFor="promo1">
                  Desconto do tipo 1
                </label>
              </div>
              <div className={painel.options}>
                <input
                  name="promo"
                  defaultChecked={
                    product.promo && product.promo === "2"
                  }
                  type="radio"
                  id="promo2"
                  value="2"
                />
                <label htmlFor="promo2">
                  Desconto do tipo 2
                </label>
              </div>
            </div>

            <input
              type="text"
              name="promotion"
              placeholder="Informe o tipo de promoção aqui, se houver"
              defaultValue={
                product.promotion && product.promotion
              }
            />
          </div>
        </div>

        <button
          onClick={save}
          value="Salvar"
          className={painel.button}
        >
          Salvar
        </button>
      </form>
    </section>
  );
};
