import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Cart } from "./Cart";
import { store } from "../../../../store/store";

test('Should test cart individual component render', () => {
    const { getByText, getByTestId } = render(
        <Provider store={store}>
            <Cart />,
        </Provider>,
        {wrapper: BrowserRouter}
    )

    expect(getByText('My car')).toBeInTheDocument();
    expect(getByTestId('cart')).toBeInTheDocument();
})
