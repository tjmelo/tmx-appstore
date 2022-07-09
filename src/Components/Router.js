import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Loading } from "./loading";
const Banner = lazy(() => import("./banner"));
const Promotions = lazy(() => import("./promotions"));

// import { Filter } from "./filter/filter";
// import { Cart } from "./cart/Cart";
// import { Login } from "./crud/login/login";
// import { Cadastre } from "./crud/cadastre/Cadastre";
// import { Painel } from "./crud/painel/painel";
// import { ListProducts } from "./crud/list/listProducts";

const Shoes = lazy(() => import("./shoes"))
const Socks = lazy(() => import("./socks"))
const Detail = lazy(() => import("./detail"))
const Cart = lazy(() => import("./cart"))
const Empty = lazy(() => import("./empty"))

const Router = () => {
  return (
    <Routes>
      <Route
        path="/shoes"
        element={<Shoes />}
      />
      <Route
        path="/socks"
        element={<Socks />}
      />
      <Route
        path="/detail/:id"
        element={<Detail />}
      />
      <Route
        path="/cart"
        element={<Cart />}
      />

      <Route
        path="/empty"
        element={<Empty />}
      />
      {/* <Route path="/filter/:category" element={Filter} /> */}
      {/* <Route path="/login" element={Login} /> */}
      {/* <Route path="/cadastre" element={Cadastre} /> */}
      {/* <Route path="/painel/:id" element={Painel} /> */}
      {/* <Route path="/list" element={ListProducts} /> */}
      <Route exact path="/" element={
        <>
          <Banner />
          <Promotions />
        </>} 
      />
      <Route exact path="*" element={Loading} />
    </Routes>
  );
};

export { Router as default };
