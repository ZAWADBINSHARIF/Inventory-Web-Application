// external import
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUS = Object.freeze({
    LOADING: 'loading',
    ERROR: 'error',
    IDLE: 'idle'
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [{}],
        status: STATUS.IDLE,
        message: ''
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        setMessage(state, action) {
            state.message = action.payload
        }
    }
})

export const { setProducts, setStatus, setMessage } = productSlice.actions
export default productSlice.reducer

export function fetchProducts() {
    return async function (dispatch, getSate) {
        dispatch(setStatus(STATUS.LOADING))

        axios.get('/product')
            .then(response => {
                dispatch(setProducts(response.data))
                dispatch(setStatus(STATUS.IDLE))
            }).catch(error => {
                console.log(error.response.data)
                dispatch(setStatus(STATUS.ERROR))
            })
    }
}

export function removeProduct(productID) {
    return async function (dispatch, getSate) {
        axios.delete('/product', {
            data: {
                productID: productID
            }
        })
            .then(response => {
                dispatch(setMessage(response.data))
            })
            .catch(error => {
                console.log(error.response.data)
            })
    }
}
