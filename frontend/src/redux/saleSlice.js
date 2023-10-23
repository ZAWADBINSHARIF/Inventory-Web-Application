// external import
import axios from 'axios'
import { createSlice } from "@reduxjs/toolkit"
export const STATUS = Object.freeze({
    LOADING: 'loading',
    ERROR: 'error',
    IDLE: 'idle'
})

const saleSlice = createSlice({
    name: 'sale',
    initialState: {
        soldProducts: [],
        saleProductsList: [],
        status: STATUS.IDLE
    },
    reducers: {
        setStatus(state, action) {
            state.status = action.payload
        },
        setSoldProducts(state, action) {
            state.soldProducts = action.payload
        },
        setSaleProductsListItem(state, action) {
            let isUpdate = false

            state.saleProductsList.map(item => {
                if (item.product_info == action.payload.product_info) {
                    isUpdate = true

                    if (parseInt(item.quantity) + parseInt(action.payload.quantity) > item.inStock_quantity) return

                    item.quantity = parseInt(item.quantity) + parseInt(action.payload.quantity)
                    item.total_price = parseInt(item.quantity) * parseInt(item.per_price)

                    return item
                } else
                    return item
            })

            if (!isUpdate)
                state.saleProductsList.push(action.payload)

        },
        removeSaleProductsListItem(state, action) {
            state.saleProductsList = state.saleProductsList.filter(item => item.product_info != action.payload)
        },
        setEmptySaleProductsList(state) {
            state.saleProductsList = []
        }
    }
})

export const { setSoldProducts, setSaleProductsListItem, removeSaleProductsListItem, setStatus, setEmptySaleProductsList } = saleSlice.actions
export default saleSlice.reducer

export function fetchSoldProductsThunk() {
    return async function (dispatch) {
        try {

            const response = await axios.get('/transaction/sale')
            dispatch(setSoldProducts(response.data))

        } catch (error) {

            console.log(error)
            console.log(error.response.data)

        }
    }
}

export function saleProductsThunk() {
    return async function (dispatch, getState) {
        dispatch(setStatus(STATUS.LOADING))
        try {

            const saleItemLists = getState().sales.saleProductsList
            await axios.post('/transaction/sale', { saleItemLists })
            dispatch(setSaleProductsListItem([]))
            dispatch(setStatus(STATUS.IDLE))
            dispatch(setEmptySaleProductsList())

        } catch (error) {
            console.log(error)
            console.log(error.response.data)
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}