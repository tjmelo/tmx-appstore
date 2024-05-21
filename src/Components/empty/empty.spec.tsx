import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

import { Empty } from "./empty";

test("Should test render empty component", () => {
    const { getByText } = render(
        <Empty />, 
        {wrapper: BrowserRouter}
    )

    expect(getByText('My cart')).toBeInTheDocument();
    expect(getByText('Your cart is empty!')).toBeInTheDocument();
    expect(getByText('Take advantage of our promotions now!')).toBeInTheDocument();
    expect(getByText('START BUY NOW!')).toBeInTheDocument();
});
