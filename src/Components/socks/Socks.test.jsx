import React from "react";
import { waitFor, render } from "@testing-library/react";
import { Socks } from "./Socks";
import { BrowserRouter } from "react-router-dom";
import { getSocks } from "../../service/api";

describe("Should render socks", () => {
  it("Should render items socks", async () => {
    await getSocks;
    const { getByTestId } = render(
      <BrowserRouter>
        <Socks />
      </BrowserRouter>
    );
    expect(
      await waitFor(() => getByTestId("socks-promotions"))
    ).toBeInTheDocument();
  });
});
