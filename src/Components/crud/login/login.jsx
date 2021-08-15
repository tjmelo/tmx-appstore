import React, { useEffect, useState } from "react";
import login from "../crud.module.css";

import { urlUser } from "../../../service/api";
import { useHistory } from "react-router";

export const Login = () => {
  const link = useHistory();
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch(urlUser, { method: `GET` })
      .then((data) => data.json())
      .then((res) => setUser(res));
  }, []);

  const authentic = (e) => {
    e.preventDefault();
    let data = document.querySelectorAll(`.${login.input}`),
      valid = false;
    // let seachUser = user.find(user => (user.login === data[0].value && user.password === data[1].value));
    data.forEach((el) => {
      if (el.value === "") {
        el.style.border = "1px solid red";
        valid = true;
      }
    });

    if (!valid) {
      let seachUser = user.find(
        (user) =>
          user.login === data[0].value &&
          user.password === data[1].value
      );
      if (seachUser) {
        link.push("/list");
      }
    }
  };

  return (
    <section className={login.area}>
      <h1>Faça login</h1>
      <form action="" className={login.form}>
        <label htmlFor="user">
          <input
            className={login.input}
            placeholder="Usuário"
            name="user"
            type="text"
          />
        </label>
        <label htmlFor="password">
          <input
            className={login.input}
            placeholder="Senha"
            name="password"
            type="text"
          />
        </label>
        <button
          onClick={authentic}
          className={login.button}
        >
          Entrar
        </button>
      </form>
    </section>
  );
};
