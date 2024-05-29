import React from "react";
import { render } from "@testing-library/react";
import { Cards } from "./Cards";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

const cardProps = {
    id: 999,
    promotion: 'ok',
    image: 'test-image-url',
    title: 'Test Title',
    price: 9999,
    discount: 1111
}


describe("Should render card product", () => {
    it("Should rendering information card produts", () => {
        const { getByText, getByTestId, getByAltText } = render(
            <Cards {...cardProps} />,
            {wrapper: BrowserRouter}
        );

    const imageTest = getByAltText('Test Title') as HTMLImageElement;

    expect(getByTestId("image")).toBeInTheDocument();
    expect(getByAltText('Test Title')).toBeTruthy();
    expect(imageTest.src.includes('./test-image-url'));
    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByTestId("price")).toBeInTheDocument();
    expect(getByText("R$ 9.999,00")).toBeInTheDocument();
    expect(getByText("R$ 1.111,00")).toBeInTheDocument();
    expect(getByTestId("tobuy")).toBeInTheDocument();
    expect(getByText("Buy")).toBeInTheDocument();
    expect(getByText("promotion available")).toBeInTheDocument();
  });
});
