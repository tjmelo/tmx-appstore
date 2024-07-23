import React from "react";
import '@testing-library/jest-dom';

import { render } from "@testing-library/react";
import { Shoes } from "./Shoes";
import { BrowserRouter } from "react-router-dom";

describe("Should render shoes", () => {
  it("Should render items shoes", async () => {
    const { getByText, getByTestId } = render(
        <Shoes />, {wrapper: BrowserRouter}
    );
    
    expect(getByText('Products')).toBeInTheDocument();
    expect(getByText('Featured Promotions')).toBeInTheDocument();
    expect(getByTestId('shoes-promotions')).toBeInTheDocument();
  });
});
