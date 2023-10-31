// external import
import express from "express"

// internal import
import {
    addPurchase,
    addSale,
    getAllPurchases,
    getAllSales,
    getThisMonthPurchaseAmount,
    getThisMonthSoldAmount
} from "../controllers/transactionController.js"
import {
    addPurchaseValidationHandler,
    purchaseInputValidation
} from "../middlewares/product/addPurchaseValidator.js"

const router = express.Router()

// ** product purchase route
router.get('/purchase/:fromDate/:toDate', getAllPurchases)
router.get('/purchase/this_month/:fromDate/:toDate', getThisMonthPurchaseAmount)
router.post('/purchase', purchaseInputValidation, addPurchaseValidationHandler, addPurchase)

// ** product sale route
router.get('/sale/:fromDate/:toDate', getAllSales)
router.get('/sale/this_month/:fromDate/:toDate', getThisMonthSoldAmount)
router.post('/sale', addSale)

export default router