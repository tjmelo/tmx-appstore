import React from "react";
import { render, waitFor } from "@testing-library/react";
import { Promotions } from "./Promotions";
import { getProducts } from "../../service/api";
import { BrowserRouter } from "react-router-dom";

describe("Should render promotions", () => {
  it("Should render cards promotions list", async () => {
    await getProducts;
    const { getByTestId } = render(
      <BrowserRouter>
        <Promotions />
      </BrowserRouter>
    );
    expect(
      await waitFor(() => getByTestId("cards"))
    ).toBeInTheDocument();
  });
});
