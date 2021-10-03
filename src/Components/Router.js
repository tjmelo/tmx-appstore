import React from 'react';
import { Switch, Route } from "react-router-dom";

import { Banner } from "./banner/Banner";
import { Promotions } from "./promotions/Promotions";
import { Shoes } from "./shoes/Shoes";
import { Socks } from "./socks/Socks";
import { Filter } from "./filter/filter";
import { Cart } from "./cart/Cart";
import { Empty } from "./empty/empty";
import { Login } from "./crud/login/login";
import { Cadastre } from "./crud/cadastre/Cadastre";
import { Painel } from "./crud/painel/painel";
import { Detail } from "./detail/Detail";
import { ListProducts } from "./crud/list/listProducts";

export const Router = () => {
    return(
        <Switch>
            <Route path="/shoes" component={Shoes} />
            <Route path="/socks" component={Socks} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/cart" component={Cart} />
            <Route path="/empty" component={Empty} />
            <Route
                path="/filter/:category"
                component={Filter}
            />
            <Route path="/login" component={Login} />
            <Route path="/cadastre" component={Cadastre} />
            <Route path="/painel/:id" component={Painel} />
            <Route path="/list" component={ListProducts} />
            <Route exact path="/">
            <Banner />
            <Promotions />
            </Route>
      </Switch>
    )
}