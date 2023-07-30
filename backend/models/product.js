// external import
import mongoose from "mongoose";
import crypto from "crypto"
import expressAsyncHandler from "express-async-handler";

// internal import
import Limited_stock from "./limited_stock.js";

const productSchema = mongoose.Schema(
    {
        product_name: {
            type: String,
            require: true,
            unique: true,
            trim: true
        },
        brand: {
            type: String,
            require: true,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        purchase_price: {
            type: Number,
            require: true
        },
        sale_price: {
            type: Number,
            require: true
        },
        quantity: {
            type: Number,
            default: 0
        },
        Limited_stock: {
            type: Number,
        },
        barcode: {
            type: String,
            require: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
)

productSchema.pre('save', function (next) {
    if (!this.barcode) this.barcode = crypto.randomBytes(5).toString('hex')
    next()
})

productSchema.post('/Update$/', expressAsyncHandler(async function (docs) {
    console.log(docs.Limited_stock)
    if (docs.Limited_stock && docs.quantity <= docs.Limited_stock) {
        const result = await new Limited_stock({
            product_name: docs.product_name,
            brand: docs.brand,
            quantity: docs.quantity
        })

        await result.save()

    } else if (docs.Limited_stock && docs.quantity > docs.Limited_stock) {
        await Limited_stock.findByIdAndDelete(
            { _id: docs._id }
        ).exec()
    }
}))

const productModel = mongoose.model('Product', productSchema)

export default productModel