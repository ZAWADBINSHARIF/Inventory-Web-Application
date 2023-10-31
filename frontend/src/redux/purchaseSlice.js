// external imprt
import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const STATUS = Object.freeze({
    LOADING: 'loading',
    ERROR: 'error',
    IDLE: 'idle'
})

const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: {
        allPurchase: [{}],
        totalPurchaseAmount: 0,
        status: STATUS.IDLE,
    },
    reducers: {
        setAllPurchase(state, action) {
            state.allPurchase = action.payload
        },
        setTotalPurchaseAmount(state, action) {
            state.totalPurchaseAmount = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
})

export const { setAllPurchase, setStatus, setTotalPurchaseAmount, postPurchasesProductThunk } = purchaseSlice.actions
export default purchaseSlice.reducer

export function fetchPurchases({ fromDate, toDate }) {
    return async function (dispatch) {

        dispatch(setStatus(STATUS.LOADING))

        axios.get(`/transaction/purchase/${fromDate}/${toDate}`)
            .then(response => {
                dispatch(setAllPurchase(response.data.allPurchaseData))
                dispatch(setTotalPurchaseAmount(response.data.total))
                dispatch(setStatus(STATUS.IDLE))
            }).catch(error => {
                console.log(error)
                dispatch(setStatus(STATUS.ERROR))
            })
    }
}