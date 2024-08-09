import React from "react";
import '@testing-library/jest-dom';

import { render } from "@testing-library/react";
import { Promotions } from "./Promotions";
import { BrowserRouter } from "react-router-dom";

describe("Should render promotions", () => {
  it("Should render cards promotions list", async () => {
    const { getByTestId } = render(
        <Promotions />,
        {wrapper: BrowserRouter}
    );
    expect(getByTestId("cards")).toBeInTheDocument();
  });
});
