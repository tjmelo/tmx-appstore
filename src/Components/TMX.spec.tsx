import React from "react";
import { render } from "@testing-library/react";
import TMXStore from "./TMXStore";

describe("Should testing render scope app", () => {
  it("Testing render platform scope app", () => {
    const { getByTestId } = render(
      <TMXStore>
        <h1>App store</h1>
      </TMXStore>
    );
    expect(
      getByTestId("tmx-app-store")
    ).toBeInTheDocument();
  });
});
