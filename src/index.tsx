import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "./Components/loading";

const TMX = lazy(() => import("./Components/TMX"));
const SideMenu = lazy(() => import("./Components/sideMenu"));

import { store } from "./store/store";
import { Provider } from "react-redux";

import "./style.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <SideMenu />
          <TMX />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
