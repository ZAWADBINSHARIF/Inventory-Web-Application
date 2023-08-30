// external import
import express from "express";

// internal import
import { getProducts, addProduct, removeProduct } from "../controllers/productController.js";
import { productInputValidation, addProductValidationHandler } from '../middlewares/product/addProductValidator.js'

const router = express.Router()

router.route('/product')
    .get(getProducts)
    .post(
        productInputValidation,
        addProductValidationHandler,
        addProduct
    )
    .delete(removeProduct)

export default router