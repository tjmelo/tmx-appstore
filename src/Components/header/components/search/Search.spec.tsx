import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"

import { Search } from "./Search";

test('Should test search individual component render', () => {
    const { 
        getByTestId,
        getByPlaceholderText,
        getByRole
    } = render(<Search />)
    
    expect(getByTestId('search')).toBeInTheDocument()
    expect(getByPlaceholderText('What are you looking for?')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
})
