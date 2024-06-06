import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import InputProducts from ".";

const dataTest = {
    value: 'Testing value...'
    
}

test('Should render unit product informations', () => {
    const { getByDisplayValue } = render(
        <InputProducts {...dataTest} />
    )

    expect(getByDisplayValue(dataTest.value)).toBeInTheDocument();
})
