// external import
import { configureStore } from "@reduxjs/toolkit";

// internal import
import productSlice from "./productSlice.js";
import purchaseSlice from "./purchaseSlice.js";
import saleSlice from "./saleSlice.js";
import headerSlice from "./headerSlice.js";

const store = configureStore({
    reducer: {
        products: productSlice,
        purchases: purchaseSlice,
        sales: saleSlice,
        header: headerSlice
    }
})

export default store