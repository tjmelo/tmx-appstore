import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import ButtonsProducts from ".";

const dataTest = {
    title: 'Title for test',
    simbol: 'Simbol for test',
    disabled: false,
    fn: () => 'Testing button...',
    
}

test('Should render unit product informations', () => {
    const { getByTitle } = render(
        <ButtonsProducts {...dataTest} />
    )

    expect(getByTitle(dataTest.title)).toBeInTheDocument();
})
