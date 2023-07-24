// external import
import mongoose from "mongoose";

const purchaseSchema = mongoose.Schema(
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
            require: true
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

const purchaseModel = mongoose.model('Purchase', purchaseSchema)

export default purchaseModel