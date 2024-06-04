import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import TitleProduct from ".";

test('Should render Title of Products', () => {
    const { getByText } = render(<TitleProduct />)

    expect(getByText('Products')).toBeInTheDocument();
    expect(getByText('Quantity')).toBeInTheDocument();
    expect(getByText('Unitary')).toBeInTheDocument();
    expect(getByText('Total')).toBeInTheDocument();
})
