import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "./Components/loading";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';

import "./style.scss";

const TMX = lazy(() => import("./Components/TMX"));
const SideMenu = lazy(() => import("./Components/sideMenu"));

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <SideMenu />
          <TMX />
        </Suspense>
      </BrowserRouter>
    </Provider>
);
