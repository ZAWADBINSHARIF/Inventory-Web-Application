// external import
import { configureStore } from "@reduxjs/toolkit";

// internal import
import productSlice from "./productSlice.js";
import purchaseSlice from "./purchaseSlice.js";
import saleSlice from "./saleSlice.js";

const store = configureStore({
    reducer: {
        products: productSlice,
        purchases: purchaseSlice,
        sales: saleSlice
    }
})

export default store