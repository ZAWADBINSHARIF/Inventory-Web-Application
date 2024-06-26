// external import
import expressAsyncHandler from 'express-async-handler'
import crypto from 'crypto'

// internal import
import Purchase from '../models/purchase.js'
import Product from '../models/product.js'
import Sale from '../models/sale.js'

// ? ===================== purchase api =======================

// ** @desc Get This Month total Purchase products
// ** route GET /transaction/purchase/this_month/:fromDate/:toDate
// ** @access Public
export const getThisMonthPurchaseAmount = expressAsyncHandler(async (req, res) => {

    const { fromDate, toDate } = req.params

    if (!fromDate || !toDate) return res.status(400).json('fromDate and toDate are missing!')

    const start = new Date(fromDate)
    const end = new Date(toDate)
    end.setHours(23)
    end.setMinutes(59)
    end.setSeconds(59)

    const total = await Purchase.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: start, // Don't use ISOString 
                    $lte: end // Don't use ISOString 
                }
            }
        },
        {
            $group: {
                _id: null,
                totalPurchaseAmount: { $sum: '$total_price' }
            }
        }
    ])

    res.status(200).json({ thisMonthTotalPurchaseAmount: total[0].totalPurchaseAmount })
})

// ** @desc Get Purchase product
// ** route GET /transaction/purchase/:fromDate/:toDate
// ** @access Public
export const getAllPurchases = expressAsyncHandler(async (req, res) => {

    const { fromDate, toDate } = req.params

    const start = new Date(fromDate)
    const end = new Date(toDate)
    end.setHours(23)
    end.setMinutes(59)
    end.setSeconds(59)

    if (fromDate && toDate) {
        try {
            const allPurchaseData = await Purchase.find({ createdAt: { $gte: start.toISOString(), $lte: end.toISOString() } }).sort({ createdAt: -1 }).exec()

            const total = await Purchase.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: start, // Don't use ISOString 
                            $lte: end // Don't use ISOString 
                        }
                    }
                },
                {
                    $group: {
                        _id: null,
                        totalPurchaseAmount: { $sum: '$total_price' }
                    }
                }
            ])


            res.json({ allPurchaseData, total: total[0]?.totalPurchaseAmount || 0 })

        } catch (error) {
            console.log(error)
        }
    }

})

// ** @desc Add Purchase product
// ** route POST /transaction/purchase
// ** @access Public
export const addPurchase = expressAsyncHandler(async (req, res) => {

    const data = req.body

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
            brand: findProduct.brand,
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

// ** @desc Get This Month total Sold products
// ** route GET /transaction/sale/this_month/:fromDate/:toDate
// ** @access Public
export const getThisMonthSoldAmount = expressAsyncHandler(async (req, res) => {

    const { fromDate, toDate } = req.params

    if (!fromDate || !toDate) return res.status(400).json('fromDate and toDate are missing!')

    const start = new Date(fromDate)
    const end = new Date(toDate)
    end.setHours(23)
    end.setMinutes(59)
    end.setSeconds(59)

    const total = await Sale.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: start, // Don't use ISOString 
                    $lte: end // Don't use ISOString 
                }
            }
        },
        {
            $group: {
                _id: null,
                totalSoldAmount: { $sum: '$total_price' }
            }
        }
    ])

    res.status(200).json({ thisMonthTotalSoldAmount: total[0].totalSoldAmount })
})

// ** @desc get Sold products
// ** route GET /transaction/sale
// ** @access Public
export const getAllSales = expressAsyncHandler(async (req, res) => {
    const { fromDate, toDate } = req.params

    const start = new Date(fromDate)
    const end = new Date(toDate)
    end.setHours(23)
    end.setMinutes(59)
    end.setSeconds(59)

    if (fromDate && toDate) {
        try {
            const allSoldData = await Sale.find({ createdAt: { $gte: start.toISOString(), $lte: end.toISOString() } }).sort({ createdAt: -1 }).exec()

            const total = await Sale.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: start, // Don't use ISOString 
                            $lte: end // Don't use ISOString 
                        }
                    }
                },
                {
                    $group: {
                        _id: null,
                        totalSoldAmount: { $sum: '$total_price' },
                        totalProfit: { $sum: '$profit' }
                    }
                }
            ])

            res.json({ allSoldData, totalSoldAmount: total[0]?.totalSoldAmount || 0, totalProfit: total[0]?.totalProfit || 0 })

        } catch (error) {
            console.log(error)
        }
    }
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
                brand: product.brand,
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