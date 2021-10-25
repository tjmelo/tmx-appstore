import React from "react";
import { render } from "@testing-library/react";
import { Cards } from "./Cards";
import { BrowserRouter } from "react-router-dom";

describe("Should render card product", () => {
  it("Should rendering information card produts", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Cards />
      </BrowserRouter>
    );
    expect(getByTestId("tobuy")).toBeInTheDocument();
    expect(getByTestId("price")).toBeInTheDocument();
    expect(getByTestId("image")).toBeInTheDocument();
  });
});
