import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlProducts } from "../../../service/api";
import list from "../crud.module.css";

export const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    fetch(urlProducts, { method: `GET` })
      .then((data) => data.json())
      .then((res) => setProducts(res));
  }, [status]);

  const del = (id) => {
    fetch(`${urlProducts}/${id}`, {
      method: "DELETE",
    }).then(() => console.log("Item removido"));
    setStatus(!status);
  };

  return (
    <section>
      <Link
        className={`${list.button} ${list.add}`}
        to="/painel/new"
      >
        Adicionar novo produto
      </Link>
      {products.map((el, idx) => (
        <div className={list.boxList} key={idx}>
          <div className={list.listUni}>
            <figure>
              <img src={`${process.env.PUBLIC_URL}/${el.image}`} alt="" />
            </figure>
            <p className={list.info}>{el.title}</p>
            <p>{el.category}</p>
            <p>R$ {el.discount.toFixed(2)}</p>
            {el.promotion && (
              <p className={list.promotion}>
                Produto em promoção
              </p>
            )}
          </div>
          <div className={list.listLinks}>
            <button onClick={() => del(el.id)}>
              Deletar
            </button>
            <Link to={`/painel/${el.id}`}>Editar</Link>
          </div>
        </div>
      ))}
    </section>
  );
};
