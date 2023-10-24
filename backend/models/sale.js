// external import
import mongoose from "mongoose";

const saleSchema = mongoose.Schema(
    {
        sale_id: {
            type: String,
            required: true,
        },
        barcode: {
            type: String,
            required: true
        },
        product_name: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        per_price: {
            type: Number,
            required: true
        },
        per_purchase_price: {
            type: Number,
            required: true
        },
        total_price: {
            type: Number,
            required: true
        },
        profit: {
            type: Number,
            required: true
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