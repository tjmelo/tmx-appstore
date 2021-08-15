import React from "react";
import { render } from "@testing-library/react";
import { Promotions } from "./Promotions";

describe("Should render promotions", () => {
  it("Should render cards promotions list", () => {
    const { getByTestId } = render(<Promotions />);
    expect(getByTestId("cards")).toBeInTheDocument();
  });
});
