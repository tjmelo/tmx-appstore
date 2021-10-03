import React from "react";
import { TMXStore } from "./TMXStore";
import { Router } from "./Router";
import { Header } from "./header/Header";

export const TMX = () => {
  return (
    <TMXStore>
      <Header />
      <Router />   
    </TMXStore>
  );
};
