// external import
import mongoose from "mongoose";

const saleSchema = mongoose.Schema(
    {
        product_name: {
            type: String,
            require: true
        },
        quantity: {
            type: Number,
            require: true
        },
        per_price: {
            type: Number,
            require: ture
        },
        total_price: {
            type: Number,
            require: true
        },
        date: {
            type: Date,
            require: true
        }
    }
)

const saleModel = mongoose.model('sale', saleSchema)

export default saleModel