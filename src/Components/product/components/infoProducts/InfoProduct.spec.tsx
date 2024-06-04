import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import InfoProduct from ".";

const dataTest = {
    image: '/image-test/test.png',
    title: 'Title test',
    colorChoose: 'Color test',
    sizeChoose: ['00', '66', '99']
}

test('Should render Info product informations', () => {
    const { getByText, getByAltText } = render(
        <InfoProduct reference={{...dataTest}}/>
    )
    
    const imageTest = getByAltText(dataTest.title) as HTMLImageElement;

    expect(getByText(dataTest.title)).toBeInTheDocument();
    expect(getByText(`Color: ${dataTest.colorChoose}`)).toBeInTheDocument();
    expect(getByText(`Size: ${dataTest.sizeChoose.join('')}`)).toBeInTheDocument();
    expect(getByAltText(dataTest.title)).toBeInTheDocument();
    expect(imageTest.src.includes(dataTest.image));
})
