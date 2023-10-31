// external import
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const headerSlice = createSlice({
    name: 'header',
    initialState: {
        thisMonthTotalPurchaseAmount: 0,
        thisMonthTotalSoldAmount: 0,
        totalOutOfStock: 0
    },
    reducers: {
        setThisMonthTotalPurchaseAmount(state, action) {
            state.thisMonthTotalPurchaseAmount = action.payload
        },
        setThisMonthTotalSoldAmount(state, action) {
            state.thisMonthTotalSoldAmount = action.payload
        },
        setTotalOutOfStock(state, action) {
            state.totalOutOfStock = action.payload
        }
    }
})

export const {
    setThisMonthTotalPurchaseAmount,
    setThisMonthTotalSoldAmount,
    setTotalOutOfStock
} = headerSlice.actions

export default headerSlice.reducer


export function fetchThisMonthTotalPurchaseAmount({ fromDate, toDate }) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/transaction/purchase/this_month/${fromDate}/${toDate}`)
            dispatch(setThisMonthTotalPurchaseAmount(response.data.thisMonthTotalPurchaseAmount))
        } catch (err) {
            console.error(err)
        }
    }
}

export function fetchThisMonthTotalSoldAmount({ fromDate, toDate }) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/transaction/sale/this_month/${fromDate}/${toDate}`)
            dispatch(setThisMonthTotalSoldAmount(response.data.thisMonthTotalSoldAmount))
        } catch (err) {
            console.error(err)
        }
    }
}