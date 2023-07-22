// extranal import
import expressAsyncHandler from 'express-async-handler'

// internal import
import Product from '../models/product.js'

export const getProducts = expressAsyncHandler(async (req, res, next) => {
    const products = await Product.find().exec()
    res.status(200).json(products)
})

export const addProduct = expressAsyncHandler(async (req, res, next) => {

    const newProduct = await new Product({
        name: req.body.name,
        brand: req.body.brand,
        description: req.body.description || '',
        price: req.body.price,
        categories: req.body.categories || []
    })

    try {
        await newProduct.save()
        res.status(201).json({ message: 'Product is added' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})