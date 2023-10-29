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
        totalSoldAmount: 0,
        totalProfit: 0,
        status: STATUS.IDLE
    },
    reducers: {
        setStatus(state, action) {
            state.status = action.payload
        },
        setTotalSoldAmount(state, action) {
            state.totalSoldAmount = action.payload
        },
        setTotalProfit(state, action) {
            state.totalProfit = action.payload
        },
        setSoldProducts(state, action) {
            state.soldProducts = action.payload
        },
        setSaleProductsListItem(state, action) {
            let isUpdate = false

            state.saleProductsList.map(item => {
                if (item.product_info == action.payload.product_info) {
                    isUpdate = true

                    if (parseFloat(item.quantity) + parseFloat(action.payload.quantity) > item.inStock_quantity) return

                    item.quantity = parseFloat(item.quantity) + parseFloat(action.payload.quantity)
                    item.total_price = parseFloat(item.quantity) * parseFloat(item.per_price)

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

export const {
    setSoldProducts,
    setSaleProductsListItem,
    removeSaleProductsListItem,
    setStatus,
    setEmptySaleProductsList,
    setTotalSoldAmount,
    setTotalProfit } = saleSlice.actions
export default saleSlice.reducer

export function fetchSoldProductsThunk({ fromDate, toDate }) {
    return async function (dispatch) {
        try {

            dispatch(setStatus(STATUS.LOADING))

            const response = await axios.get(`/transaction/sale/${fromDate}/${toDate}`)

            dispatch(setSoldProducts(response.data.allSoldData))
            dispatch(setTotalSoldAmount(response.data.totalSoldAmount))
            dispatch(setTotalProfit(response.data.totalProfit))
            dispatch(setStatus(STATUS.IDLE))

        } catch (error) {

            dispatch(setStatus(STATUS.ERROR))
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