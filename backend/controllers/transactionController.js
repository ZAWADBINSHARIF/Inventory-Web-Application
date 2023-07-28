// external import
import expressAsyncHandler from 'express-async-handler'

// internal import
import Purchase from '../models/purchase.js'
import Product from '../models/product.js'
import Sale from '../models/sale.js'

// ? ===================== purchase api =======================

// ** @desc Get Purchase product
// ** route GET /transaction/purchase
// ** @access Public
export const getAllPurchases = expressAsyncHandler(async (_req, res) => {
    const allPurchases = await Purchase.find().exec()

    res.json(allPurchases)
})

// ** @desc Add Purchase product
// ** route POST /transaction/purchase
// ** @access Public
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

    const findProduct = await Product.findOneAndUpdate({ product_name: req.body.product_name },
        { $inc: { quantity: parseFloat(req.body.quantity) } }
    ).exec()

    try {
        if (findProduct) {
            await newPurchaseProduct.save()
            await findProduct.save()

            res.status(201).json({ message: 'Purchase product is added' })
        } else {
            res.status(500).json({ errorMessage: 'Product Not found' })
        }

    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
    }
})


// ? ===================== sale api =======================

// ** @desc get Sold products
// ** route GET /transaction/sale
// ** @access Public
export const getAllSales = expressAsyncHandler(async (_req, res) => {
    const allSales = await Sale.find().exec()

    res.json(allSales)
})

// ** @desc Add sale products
// ** route POST /transaction/sale
// ** @access Public
export const addSale = expressAsyncHandler(async (req, res) => {
    const isProductLimited = await Product.find({ product_name: req.body.product_name })
        .gte('quantity', parseFloat(req.body.quantity))


    if (isProductLimited.length === 0)
        return res.status(500).json({ errorMessage: 'Product is limited' })

    const findProduct = await Product.findOneAndUpdate(
        { product_name: req.body.product_name },
        { $inc: { quantity: - parseFloat(req.body.quantity) } }
    )

    if (!findProduct)
        return res.status(500).json({ errorMessage: 'Product is limited' })

    const profit = (req.body.per_price - findProduct.purchase_price) * req.body.quantity
    console.log(profit)

    const newSaleProduct = await new Sale(
        {
            product_name: req.body.product_name,
            quantity: req.body.quantity,
            per_price: req.body.per_price,
            profit: profit,
            total_price: parseFloat(req.body.quantity) * parseFloat(req.body.per_price),
            date: req.body.date
        }
    )

    try {
        await newSaleProduct.save()
        await findProduct.save()

        res.status(201).json({ message: 'Sale product is added' })
    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
    }
})