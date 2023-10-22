// external import
import axios from 'axios'
import { createSlice } from "@reduxjs/toolkit"


const saleSlice = createSlice({
    name: 'sale',
    initialState: {
        soldProducts: [],
        saleProductsList: []
    },
    reducers: {
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
        }
    }
})

export const { setSoldProducts, setSaleProductsListItem, removeSaleProductsListItem } = saleSlice.actions
export default saleSlice.reducer

export function fetchSaleProductsThunk() {
    return async function (dispatch, getState) {
        try {
            const data = await axios.get('/transaction/sale')
            dispatch(setSoldProducts(data))
        } catch (error) {
            console.log(error)
            console.log(error.response.data)
        }
    }
}

export function saleProductsThunk() {
    return async function (dispatch, getState) {
        try {
            const saleItemLists = getState().sales.saleProductsList
            console.log(saleItemLists)
            await axios.post('/transaction/sale', { saleItemLists })

        } catch (error) {
            console.log(error)
            console.log(error.response.data)
        }
    }
}