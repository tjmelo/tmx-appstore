import React, { Suspense } from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import Info, { TInfo } from "./Info";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const infoProps: TInfo = {
    product: [],
    element: {
        type: "",
        name: "",
        category: "",
        title: "",
        image: "",
        price: 0,
        discount: 0,
        color: [],
        size: [],
        promotion: "promotion" //if true, show message prommotion avaliable
    }
}

test('Should render summary informations', () => {
    const { getByText, getByTestId } = render(
        <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<div>Testing...</div>}>
                <Info {...infoProps}/>
            </Suspense>
        </BrowserRouter>
      </Provider>)

    expect(getByTestId('test-information')).toBeInTheDocument();
    expect(getByText('Promotion available for this product!')).toBeInTheDocument();
    expect(getByText('Buy')).toBeInTheDocument();
})
