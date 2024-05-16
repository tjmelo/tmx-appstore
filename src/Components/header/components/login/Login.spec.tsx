import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";

import { Login } from "./Login";

test('Should render Login individual component', () => {
    const { getByText } = render(
        <Login />,
        {wrapper: BrowserRouter}
    )

    expect(getByText('Login')).toBeInTheDocument();
    expect(getByText('|')).toBeInTheDocument();
    expect(getByText('Register')).toBeInTheDocument();
})
