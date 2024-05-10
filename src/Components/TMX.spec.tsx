import React from "react";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import TMXStore from "./TMXStore";

const textForTest = 'App store test'

describe("Should test render scope app", () => {
    it('Should render TMX root component', () => {
        const { getByText } = render(
            <TMXStore>
               <h1>{textForTest}</h1> 
            </TMXStore>
        )
        expect(getByText(textForTest)).toBeInTheDocument();
    })
});
