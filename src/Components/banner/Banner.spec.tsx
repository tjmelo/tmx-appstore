import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Banner } from "./Banner";

describe("Should show Banner", () => {
  it("Should render elements to banner", () => {
    const { getByTestId, getByText } = render(<Banner />);

    expect(getByTestId("banner")).toBeInTheDocument();
    expect(getByText("Products")).toBeInTheDocument();
    expect(getByText("Featured Promotions")).toBeInTheDocument();

  });
});
