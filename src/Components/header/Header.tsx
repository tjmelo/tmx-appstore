import React, { lazy } from "react";
import header from "./header.module.scss";

const Search = lazy(() => import("./components/search"));
const Login = lazy(() => import("./components/login"));
const Cart = lazy(() => import("./components/cart"));

interface HeaderProps {}

export const Header: React.VFC<HeaderProps> =
  (): JSX.Element => {
    return (
      <header className={header.header}>
        <Search />
        <Login />
        <Cart />
      </header>
    );
  };
