import React, { Suspense } from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { Detail } from "./Detail";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

test('Should render summary informations', () => {
    const { getByText, getByTestId } = render(
        <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<div>Testing...</div>}>
                
            </Suspense>
        </BrowserRouter>
      </Provider>)

    expect(getByText('Product')).toBeInTheDocument();
    expect(getByTestId('test-title')).toBeInTheDocument();
    expect(getByTestId('test-images')).toBeInTheDocument();
})
