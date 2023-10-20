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
        data: [{}],
        status: STATUS.IDLE,
    },
    reducers: {
        setPurchase(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
})

export const { setPurchase, setStatus } = purchaseSlice.actions
export default purchaseSlice.reducer

export function fetchPurchases() {
    return async function (dispatch, getSate) {
        dispatch(setStatus(STATUS.LOADING))

        axios.get('/transaction/purchase')
            .then(response => {
                dispatch(setPurchase(response.data))
                dispatch(setStatus(STATUS.IDLE))
            }).catch(error => {
                console.log(error)
                console.log(error.response.data)
                dispatch(setStatus(STATUS.ERROR))
            })
    }
}