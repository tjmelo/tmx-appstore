import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

import { Loading } from "./loading";
const Banner = lazy(() => import("./banner"));
const Promotions = lazy(() => import("./promotions"));

// import { Filter } from "./filter/filter";
// import { Cart } from "./cart/Cart";
// import { Login } from "./crud/login/login";
// import { Cadastre } from "./crud/cadastre/Cadastre";
// import { Painel } from "./crud/painel/painel";
// import { ListProducts } from "./crud/list/listProducts";

const Router = () => {
  return (
    <Switch>
      <Route
        path="/shoes"
        component={lazy(() => import("./shoes"))}
      />
      <Route
        path="/socks"
        component={lazy(() => import("./socks"))}
      />
      <Route
        path="/detail/:id"
        component={lazy(() => import("./detail"))}
      />
      <Route
        path="/cart"
        component={lazy(() => import("./cart"))}
      />

      <Route
        path="/empty"
        component={lazy(() => import("./empty"))}
      />
      {/* <Route path="/filter/:category" component={Filter} /> */}
      {/* <Route path="/login" component={Login} /> */}
      {/* <Route path="/cadastre" component={Cadastre} /> */}
      {/* <Route path="/painel/:id" component={Painel} /> */}
      {/* <Route path="/list" component={ListProducts} /> */}
      <Route exact path="/">
        <Banner />
        <Promotions />
      </Route>
      <Route exact path="*" component={Loading} />
    </Switch>
  );
};

export { Router as default };
