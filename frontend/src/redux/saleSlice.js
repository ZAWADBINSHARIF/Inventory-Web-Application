// external import
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
                if (item._id == action.payload._id) {
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
            state.saleProductsList = state.saleProductsList.filter(item => item._id != action.payload)
        }
    }
})

export const { setSoldProducts, setSaleProductsListItem, removeSaleProductsListItem } = saleSlice.actions
export default saleSlice.reducer

