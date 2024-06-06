import React, { Suspense } from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import LogicProducts from ".";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../../../store/store";

const dataTest = {
    reference: {
        promotion: 'Message promotion test',
        promo: '1',
        discount: 0,
        price: 9999,
        index: 9999
    },
    getValues: () => true
}

test('Should render unit product informations', () => {
    const { getByText, getByTitle } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<div>Testing...</div>}>
                    <LogicProducts {...dataTest} />
                </Suspense>
            </BrowserRouter>
        </Provider>)

    expect(getByText('remove')).toBeInTheDocument();
    expect(getByTitle('Remove this product')).toBeInTheDocument();
})
