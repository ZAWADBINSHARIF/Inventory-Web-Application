// external import
import { configureStore } from "@reduxjs/toolkit";

// internal import
import productSlice from "./productSlice.js";
import purchaseSlice from "./purchaseSlice.js";

const store = configureStore({
    reducer: {
        products: productSlice,
        purchases: purchaseSlice
    }
})

export default store