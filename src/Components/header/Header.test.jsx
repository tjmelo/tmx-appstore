import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./Header";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Testing header", () => {
  it("Testing render elements header", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    expect(getByTestId("search")).toBeInTheDocument();
    expect(getByTestId("login")).toBeInTheDocument();
    expect(getByTestId("register")).toBeInTheDocument();
    expect(getByTestId("cart")).toBeInTheDocument();
  });
});
