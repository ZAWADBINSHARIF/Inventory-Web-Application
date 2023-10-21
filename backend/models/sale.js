// external import
import mongoose from "mongoose";

const saleSchema = mongoose.Schema(
    {
        sale_id: {
            type: Number,
            require: true,
            unique: true
        },
        barcode: {
            type: String,
            require: true
        },
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
            require: true
        },
        total_price: {
            type: Number,
            require: true
        },
        profit: {
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