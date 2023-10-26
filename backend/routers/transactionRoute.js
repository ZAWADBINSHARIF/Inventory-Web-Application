// external import
import express from "express"

// internal import
import {
    addPurchase,
    addSale,
    getAllPurchases,
    getAllSales
} from "../controllers/transactionController.js"
import { addPurchaseValidationHandler, purchaseInputValidation } from "../middlewares/product/addPurchaseValidator.js"

const router = express.Router()

// ** product purchase route
router.route('/purchase')
    .get(getAllPurchases)
    .post(purchaseInputValidation, addPurchaseValidationHandler, addPurchase)

// ** product sale route
router.get('/sale/:fromDate/:toDate', getAllSales)
router.post('/sale', addSale)

export default router