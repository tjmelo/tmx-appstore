import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Siteware } from "./Components/Siteware";
import { SideMenu } from "./Components/sideMenu/sideMenu";

import { store } from "./store/store";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

import "./style.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SideMenu />
        <Siteware />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
