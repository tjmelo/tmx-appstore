import React from "react";
import { render, waitFor } from "@testing-library/react";
import { Promotions } from "./Promotions";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

describe("Should render promotions", () => {
  it("Should render cards promotions list", async () => {
    const { getByTestId } = render(
        <Promotions />,
        {wrapper: BrowserRouter}
    );
    expect(
      await waitFor(() => getByTestId("cards"))
    ).toBeInTheDocument();
  });
});
