import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { Size } from "./Size";

const colorProps = {
    size: ['40, 42, 44'],
    changeSize: () => true,
    verify: false
}

test('Should render size informations', () => {
    const { getByText } = render(
        <Size {...colorProps}/>
    )

    expect(getByText('Size:')).toBeInTheDocument();
    expect(getByText('Select a size')).toBeInTheDocument();
})
