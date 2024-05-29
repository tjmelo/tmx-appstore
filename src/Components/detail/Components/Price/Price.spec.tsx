import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { Price } from "./Price";

const priceProps = {
    price: 9999,
    discount: 0
}

test('Should render summary informations', () => {
    const { getByText } = render(
        <Price {...priceProps} />
    )

    expect(getByText('R$ 9.999,00')).toBeInTheDocument();
    expect(getByText('R$ 0,00')).toBeInTheDocument();
})
