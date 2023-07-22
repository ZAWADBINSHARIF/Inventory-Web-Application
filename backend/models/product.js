// export import
import mongoose from "mongoose";
import crypto from "crypto"

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
        categories: {
            type: [String]
        },
        quantity: {
            type: Number
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
    if (!this.barcode) this.barcode = crypto.randomBytes(6).toString('hex')
    next()
})

const productModel = mongoose.model('product', productSchema)

export default productModel