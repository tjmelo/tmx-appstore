import React from "react";
import { render } from "@testing-library/react";
import { Banner } from "./Banner";

describe("Should show Banner", () => {
  it("Should render elements to banner", () => {
    const { getByTestId } = render(<Banner />);
    expect(getByTestId("banner")).toBeInTheDocument();
  });
});
