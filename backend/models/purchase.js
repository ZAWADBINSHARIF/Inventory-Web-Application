// external import
import mongoose from "mongoose";

const purchaseSchema = mongoose.Schema(
    {
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
        total_price: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        }
    },
    {
        timestamps: true
    }
)

const purchaseModel = mongoose.model('Purchase', purchaseSchema)

export default purchaseModel