import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { Color } from "./Color";

const colorProps = {
    color: ['blue, red, green'],
    changeColor: () => true,
    verify: false
}

test('Should render summary informations', () => {
    const { getByText } = render(
        <Color {...colorProps}/>
    )

    expect(getByText('Color:')).toBeInTheDocument();
    expect(getByText('Select a color')).toBeInTheDocument();
})
