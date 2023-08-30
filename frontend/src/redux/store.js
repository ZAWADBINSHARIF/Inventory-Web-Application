// external import
import { configureStore } from "@reduxjs/toolkit";

// internal import
import productSlice from "./productSlice.js";

const store = configureStore({
    reducer: {
        products: productSlice
    }
})

export default store