import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import TotalProducts from ".";

const dataTest = {
    totals: {
        id: 99999,
        total: 99,
        discount: 0
    }
}

test('Should render total products informations', () => {
    const { getByText } = render(
        <TotalProducts {...dataTest} />
    )

    expect(getByText('R$ 99,00')).toBeInTheDocument();
    expect(getByText('R$ 0,00')).toBeInTheDocument();
})
