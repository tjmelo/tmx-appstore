import React, { Suspense } from "react";

import { render, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';

import { Cart } from "./Cart";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter } from "react-router-dom";

test('Should render cart component', async () => {
    const { getByText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<div>Testing...</div>}>
                    <Cart />
                </Suspense>
            </BrowserRouter>
        </Provider>
    )

    await waitFor(() => {
        expect(getByText('My cart')).toBeInTheDocument();
    })
})
