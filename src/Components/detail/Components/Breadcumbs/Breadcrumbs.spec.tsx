import React, { Suspense } from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Breadcrumbs } from "./Breadcumbs";

const breadcrumbsProps = {
    type: 'test-type',
    name: 'test-name',
    category: 'test-category'
}

test('Should render the breadcrumbs', () => {
    const { 
        getByText,
        getByTestId
    } = render(<Breadcrumbs {...breadcrumbsProps}/>)

    expect(getByText('Product')).toBeInTheDocument();
    expect(getByTestId('test-type-name')).toBeInTheDocument();
    expect(getByTestId('test-category')).toBeInTheDocument();
})
