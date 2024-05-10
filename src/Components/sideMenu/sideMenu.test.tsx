import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { SideMenu } from "./SideMenu";
import { BrowserRouter } from "react-router-dom";

describe("Should render sidebar menu", () => {
  it("Testing render item TMX Store", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SideMenu />
      </BrowserRouter>
    );
    expect(getByTestId("test-logo")).toBeInTheDocument();
    expect(getByTestId("test-home")).toBeInTheDocument();
    expect(getByTestId("test-shoes")).toBeInTheDocument();
    expect(getByTestId("test-socks")).toBeInTheDocument();
  });
});
