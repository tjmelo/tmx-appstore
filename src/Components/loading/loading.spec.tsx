import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { Loading } from "./loading";

test("Should test render loading component", () => {
    const { getByRole } = render(<Loading />)

    expect(getByRole('alert')).toBeInTheDocument();
});
