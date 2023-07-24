// external import
import mongoose from "mongoose";

const limited_stock_Schema = mongoose.Schema({
    product_name: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
})

const limited_stock_Model = mongoose.model('limited_stock', limited_stock_Schema)

export default limited_stock_Model