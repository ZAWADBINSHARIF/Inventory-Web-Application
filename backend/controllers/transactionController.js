// external import
import expressAsyncHandler from 'express-async-handler'

// internal import
import Purchase from '../models/purchase.js'
import Product from '../models/product.js'

export const getAllPurchases = expressAsyncHandler(async (req, res) => {
    const allPurchases = await Purchase.find().exec()

    res.json(allPurchases)
})

export const addPurchase = expressAsyncHandler(async (req, res) => {
    const newPurchaseProduct = await new Purchase(
        {
            product_name: req.body.product_name,
            quantity: req.body.quantity,
            per_price: req.body.per_price,
            total_price: parseFloat(req.body.quantity) * parseFloat(req.body.per_price),
            date: req.body.date
        }
    )

    const updateQuantity = await Product.findOneAndUpdate({ productName: req.body.productName }, {
        $inc: {
            'quantity': parseFloat(req.body.quantity)
    }})

    await newPurchaseProduct.save()
    await updateQuantity.save()

    res.status(201).json({message: 'Purchase product is added'})
})