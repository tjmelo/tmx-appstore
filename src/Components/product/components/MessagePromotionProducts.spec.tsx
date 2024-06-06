import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import MessagePromotionProducts from "./MessagePromotionProducts";

const dataTest = {
    reference: {
        promotion: 'Message promotion test',
        promo: '1'
    },
    qtde: 3
}

test('Should render unit product informations', () => {
    const { getByText } = render(
        <MessagePromotionProducts {...dataTest}/>
    )

    expect(getByText(dataTest.reference.promotion)).toBeInTheDocument();
})
