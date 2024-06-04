import { createSlice } from "@reduxjs/toolkit";
import { CART } from "../../utils/constants";

type TypeSelectProduct = {
    product: {
        id: number
    }
}

const toGetItemByCart: string | null = sessionStorage.getItem(CART)

export const productSlice = createSlice({
    name: "product",
    initialState: {
        card: [],
        items: toGetItemByCart ? JSON.parse(toGetItemByCart) : [],
    },
    reducers: {
        productReference: (state, action) => {
            state.card = action.payload;
        },
        productItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItems: (state, action) => {
            state.items = state.items.filter((el: { index: number }) => el.index !== action.payload);
        },
        updateItems: (state, action) => {
            state.items = action.payload;
        },
        cleanItems: (state) => {
            sessionStorage.removeItem(CART)
            state.items = [];
        },
    },
});

export const { 
    productReference, 
    productItems, 
    updateItems, 
    removeItems, 
    cleanItems 
} = productSlice.actions;

export const selectProduct = (state: TypeSelectProduct) => state.product.id;
export default productSlice.reducer;
