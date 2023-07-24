// extranal import
import expressAsyncHandler from 'express-async-handler'

// internal import
import Product from '../models/product.js'

export const getProducts = expressAsyncHandler(async (req, res) => {
    const products = await Product.find().exec()
    res.status(200).json(products)
})

export const addProduct = expressAsyncHandler(async (req, res) => {

    const newProduct = await new Product({
        product_name: req.body.product_name,
        brand: req.body.brand,
        description: req.body.description || '',
        purchase_price: req.body.purchase_price,
        sale_price: req.body.sale_price,
        categories: req.body.categories || [],
        stock_limit: req.body.stock_limit
    })

    try {
        await newProduct.save()
        res.status(201).json({ message: 'Product is added' })
    } catch (error) {
        res.status(500).json({
            errors: {
                error: error.message
        } })
    }
})