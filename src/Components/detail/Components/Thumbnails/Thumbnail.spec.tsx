import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { Thumbnails } from "./Thumbnail";

const thumbnailsProps = {
    title: 'Thumbnail title test',
    image: './image-thumbnail-test.png'
}

test('Should render thumbnails informations', () => {
    const { getAllByAltText } = render(
        <Thumbnails {...thumbnailsProps} />
    )

    const imageTest = getAllByAltText('Thumbnail title test') as Array<HTMLImageElement>;
    
    expect(getAllByAltText('Thumbnail title test')).toBeTruthy();
    expect(imageTest[0].src.includes('./image-thumbnail-test.png'));
    expect(imageTest[0]).toHaveAttribute('src', './image-thumbnail-test.png')
})
