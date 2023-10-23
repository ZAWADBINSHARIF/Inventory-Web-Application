// external import
import expressAsyncHandler from 'express-async-handler'
import crypto from 'crypto'

// internal import
import Purchase from '../models/purchase.js'
import Product from '../models/product.js'
import Sale from '../models/sale.js'

// ? ===================== purchase api =======================

// ** @desc Get Purchase product
// ** route GET /transaction/purchase
// ** @access Public
export const getAllPurchases = expressAsyncHandler(async (_req, res) => {
    const allPurchases = await Purchase.find().sort({ date: -1 }).exec()

    res.json(allPurchases)
})

// ** @desc Add Purchase product
// ** route POST /transaction/purchase
// ** @access Public
export const addPurchase = expressAsyncHandler(async (req, res) => {

    const data = req.body
    console.log(data)
    const findProduct = await Product.findOneAndUpdate(
        {
            $or: [
                { barcode: req.body.barcode },
                { product_name: req.body.product_name }
            ]
        },
        { $inc: { quantity: parseFloat(req.body.quantity) } }
    ).exec()

    const newPurchaseProduct = await new Purchase(
        {
            barcode: findProduct.barcode,
            product_name: findProduct.product_name,
            quantity: req.body.quantity,
            per_price: req.body.per_price,
            total_price: parseFloat(req.body.quantity) * parseFloat(req.body.per_price),
            date: req.body.date,
            product: req.body._id
        }
    )

    try {
        if (findProduct) {

            await newPurchaseProduct.save()
            await findProduct.save()

            res.status(201).json({ message: `${req.body.product_name} has been purchased` })
        } else {
            res.status(500).json({ errorMessage: `${req.body.product_name} Not found` })
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
    const allSales = await Sale.find().sort({createdAt: -1}).exec()

    res.json(allSales)
})

// ** @desc Add sale products
// ** route POST /transaction/sale
// ** @access Public
export const addSale = expressAsyncHandler(async (req, res) => {
    const { saleItemLists } = req.body
    const sale_id = crypto.randomUUID()
    const values = []

    saleItemLists.map(product => {
        values.push(
            {
                sale_id,
                barcode: product.barcode,
                product_name: product.product_name,
                quantity: product.quantity,
                per_price: product.per_price,
                per_purchase_price: product.per_purchase_price,
                total_price: product.total_price,
                profit: product.profit,
                product_info: product.product_info
            }
        )
    })

    Sale.insertMany(values).then(data => {
        data.map(item => {

            Product.findOneAndUpdate(
                { _id: item.product_info },
                { $inc: { quantity: - parseFloat(item.quantity) } }
            ).catch(err => {
                console.log(err)
                res.status(500).json({ errorMessage: error.message })
            })

        })

        res.status(200).json('Sold product')

    }).catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: error.message })
    })

})