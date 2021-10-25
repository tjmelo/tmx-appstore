import React, { lazy } from "react";
import TMXStore from "./TMXStore";

const Header = lazy(() => import("./header"));
const Router = lazy(() => import("./Router"));

interface TMXProps {}

const TMX: React.VFC<TMXProps> = () => {
  return (
    <TMXStore>
      <Header />
      <Router />
    </TMXStore>
  );
};

export default TMX;
