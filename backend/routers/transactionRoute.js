// external import
import express from "express"

// internal import
import { addPurchase, getAllPurchases } from "../controllers/transactionController.js"

const router = express.Router()

// ** product purchase route
router.route('/purchase')
    .get(getAllPurchases)
    .post(addPurchase)

// ** product sale route
router.route('sale')
    .get()


export default router