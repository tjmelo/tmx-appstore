import React, { Suspense } from "react";

import { render, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';

import CardProducts from "./";
import InfoProduct from "../infoProducts";
import LogicProducts from "../Logic";
import UnitProducts from "../unitProducts";
import TotalProducts from "../totalProducts";

const reference = {
    id: 99,
    price: 450,
    discount: 100,
    image: '/image-test/test.png',
    title: 'Test title',
    colorChoose: 'Color test',
    sizeChoose: ['00, 66, 99'],
    promo: "",
    index: 0,
    promotion: ""
}

const referenceProps = { reference }

const totalsProps = {
    totals: {
        id: 0,
        total: 450,
        discount: 100
    }
}

const cardProductProps = {
    reference,
    generalValues: () => {
        return {
            id: 2, 
            discount: 450, 
            total: 550
        }
    }
}

const logicProductsProps = {
    reference,
    getValues: () => true
}


test('Should render summary informations', async () => {
    const { getByTestId } = render(
        <Suspense fallback={<div>Testing...</div>}>
            <CardProducts {...cardProductProps}>
            <InfoProduct {...referenceProps} />
            <LogicProducts {...logicProductsProps}/>
            <UnitProducts {...referenceProps}/>
            <TotalProducts {...totalsProps} />
            </CardProducts>
        </Suspense>
    )

    waitFor(() => {
        expect(getByTestId('box-card-products')).toBeInTheDocument();
    })
})
