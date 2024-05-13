import React, { Suspense } from "react";
import { render, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'

import { Header } from "./Header";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Should testing header", () => {
  it("Testing render elements header", async() => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<div>Testing...</div>}>
                <Header />
            </Suspense>
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => {
        expect(getByTestId("search")).toBeInTheDocument()
        expect(getByTestId("login")).toBeInTheDocument();
        expect(getByTestId("register")).toBeInTheDocument();
        expect(getByTestId("cart")).toBeInTheDocument();        
    })
  });
});
