import React from "react";
import { render } from "@testing-library/react";
import { Cards } from "./Cards";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

const cardProps = {
    id: 999,
    promotion: false,
    image: 'test-image-url',
    title: 'Test Title',
    price: 9999,
    discount: 9999
}

describe("Should render card product", () => {
  it("Should rendering information card produts", () => {
    const { getByTestId } = render(
        <Cards {...cardProps}/>,
        {wrapper: BrowserRouter}
    );
    expect(getByTestId("tobuy")).toBeInTheDocument();
    expect(getByTestId("price")).toBeInTheDocument();
    expect(getByTestId("image")).toBeInTheDocument();
  });
});
