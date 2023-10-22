// external import
import mongoose from "mongoose";

const saleSchema = mongoose.Schema(
    {
        sale_id: {
            type: String,
            require: true,
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
        per_purchase_price: {
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
        },
        product_info: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        }
    },
    {
        timestamps: true
    }
)

const saleModel = mongoose.model('sale', saleSchema)

export default saleModel