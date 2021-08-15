import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SideMenu } from "./sideMenu";
import { BrowserRouter } from "react-router-dom";

describe("Testing sidebar menu", () => {
  it("Testing render item TMX Store", () => {
    const { getByText } = render(
      <BrowserRouter>
        <SideMenu />
      </BrowserRouter>
    );
    fireEvent.click(getByText("TMX Store"));
  });
});
