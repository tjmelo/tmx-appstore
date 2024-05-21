import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { Image } from "./Image";

const imageProps = {
    image: './image-for-test.png',
    title: 'Title for test'
}

test('Should render summary informations', () => {
    const { getByAltText, getByTestId } = render(
        <Image {...imageProps} />
    )

    expect(getByTestId('test-image')).toBeInTheDocument();
    expect(getByAltText(imageProps.title)).toBeInTheDocument();
})
