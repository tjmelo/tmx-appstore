import React from "react";
import { render } from "@testing-library/react";
import { SideMenu } from "./sideMenu";
import { BrowserRouter } from "react-router-dom";

describe("Should render sidebar menu", () => {
  it("Testing render item TMX Store", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SideMenu />
      </BrowserRouter>
    );
    expect(getByTestId("logo")).toBeInTheDocument();
    expect(getByTestId("home")).toBeInTheDocument();
    expect(getByTestId("shoes")).toBeInTheDocument();
    expect(getByTestId("socks")).toBeInTheDocument();
  });
});
