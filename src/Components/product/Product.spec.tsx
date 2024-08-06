import React, { Suspense } from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import Product from ".";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const dataTest = {
    values: () => 'Testing products...',
    
}

test('Should render product informations', () => {
    const { getByText } = render(
        <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<div>Testing...</div>}>
                <Product {...dataTest} />
            </Suspense>
        </BrowserRouter>
      </Provider>
    )

    expect(getByText('Clean cart')).toBeInTheDocument();
})
