import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    items: JSON.parse(sessionStorage.getItem("CART")) || [],
  },
  reducers: {
    productReference: (state, action) => {
      state.card = action.payload;
    },
    productItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter(
        (el) => el.optionsProduct.ref !== action.payload
      );
    },
    updateItems: (state, action) => {
      state.items = action.payload;
    },
    cleanItems: (state) => {
      state.items = [];
    },
  },
});

export const {
  productReference,
  productItems,
  updateItems,
  removeItems,
  cleanItems,
} = productSlice.actions;

export const selectProduct = (state) => state.product.id;
export default productSlice.reducer;
