import React from "react";
import { waitFor, render } from "@testing-library/react";
import { Shoes } from "./Shoes";
import { BrowserRouter } from "react-router-dom";
import { getShoes } from "../../service/api";

describe("Should render shoes", () => {
  it("Should render items shoes", async () => {
    await getShoes;
    const { getByTestId } = render(
      <BrowserRouter>
        <Shoes />
      </BrowserRouter>
    );
    expect(
      await waitFor(() => getByTestId("shoes-promotions"))
    ).toBeInTheDocument();
  });
});
