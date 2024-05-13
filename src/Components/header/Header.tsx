import React, { lazy, ReactNode } from "react";
import header from "./header.module.scss";

const Search = lazy(() => import("./components/search"));
const Login = lazy(() => import("./components/login"));
const Cart = lazy(() => import("./components/cart"));

type HeaderProps = ReactNode | {}

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
