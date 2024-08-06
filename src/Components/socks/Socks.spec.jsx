import React from "react";
import '@testing-library/jest-dom';

import { render } from "@testing-library/react";
import { Socks } from "./Socks";
import { BrowserRouter } from "react-router-dom";

describe("Should render socks", () => {
  it("Should render items socks", async () => {
    const { getByText, getByTestId } = render(
        <Socks />, {wrapper: BrowserRouter}
    );

    expect(getByText('Produtos')).toBeInTheDocument();
    expect(getByText('Promoções em destaque')).toBeInTheDocument();
    expect(getByTestId('socks-promotions')).toBeInTheDocument();

  });
});
