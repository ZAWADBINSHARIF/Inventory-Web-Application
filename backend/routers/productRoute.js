// external import
import express from "express";

// internal import
import { getProducts, addProduct } from "../controllers/productController.js";

const router = express.Router()

router.route('/product')
    .get(getProducts)
    .post(addProduct)

export default router