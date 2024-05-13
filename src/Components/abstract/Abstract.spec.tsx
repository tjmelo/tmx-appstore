import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { Abstract } from "./Abstract";
import { BrowserRouter } from "react-router-dom";

const dataTest = {
    qtdePay: 1000,
    qtdeDiscount: 3000
}

test('Should render summary informations', () => {
    const { getByText } = render(
        <Abstract 
            subtotal={dataTest.qtdePay}
            discount={dataTest.qtdeDiscount}
        />, 
        {wrapper: BrowserRouter}
    )
    expect(getByText('Summary')).toBeInTheDocument();
    expect(getByText('Subtotal:')).toBeInTheDocument();
    expect(getByText('Discount:')).toBeInTheDocument();
    expect(getByText('Total:')).toBeInTheDocument();
    expect(getByText('Keep buying')).toBeInTheDocument();
    expect(getByText('Finish order')).toBeInTheDocument();
})
