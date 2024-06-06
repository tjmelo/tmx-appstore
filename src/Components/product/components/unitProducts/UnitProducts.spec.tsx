import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import UnitProducts from ".";

const dataTest = {
    reference: {
        price: 99,
        discount: 0
    }
}

test('Should render unit product informations', () => {
    const { getByText } = render(
        <UnitProducts {...dataTest} />
    )

    expect(getByText('R$ 99,00')).toBeInTheDocument();
    expect(getByText('R$ 0,00')).toBeInTheDocument();
})
