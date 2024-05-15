import React, { lazy, ReactNode } from "react";
import TMXStore from "./TMXStore";

const Header = lazy(() => import("./header"));
const Router = lazy(() => import("./Router"));

type TMXProps = ReactNode | unknown

const TMX: React.FC<TMXProps> = () => {
  return (
    <TMXStore>
      <Header />
      <Router />
    </TMXStore>
  );
};

export default TMX;
