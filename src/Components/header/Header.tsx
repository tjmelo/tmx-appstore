import React, { lazy, ReactElement } from "react";
import header from "./header.module.scss";

const Search = lazy(() => import("./components/search"));
const Login = lazy(() => import("./components/login"));
const Cart = lazy(() => import("./components/cart"));

type HeaderProps = ReactElement | unknown

export const Header: React.FC<HeaderProps> =
  (): JSX.Element => {
    return (
      <header className={header.header}>
        <Search />
        <Login />
        <Cart />
      </header>
    );
  };
