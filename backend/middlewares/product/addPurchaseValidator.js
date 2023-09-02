// external import
import { check, validationResult } from "express-validator";

// internal import
import Product from "../../models/product.js";


export const purchaseInputValidation = [
    check('product_name')
        .trim()
        .isLength({ min: 1 })
        .withMessage('Product name is required')
        .custom(async value => {

            try {
                const isMatch = await Product.findOne({ product_name: value }).exec()

                if (!isMatch) {
                    throw new Error('Product name is not found')
                }
            } catch (error) {
                throw new Error(error.message)
            }

        }),
    check('barcode')
        .trim()
        .isLength({ min: 1 })
        .withMessage('Bar code is required')
        .custom(async value => {

            try {
                const isMatch = await Product.findOne({ barcode: value }).exec()

                if (!isMatch) {
                    throw new Error('Bar Code is not found')
                }
            } catch (error) {
                throw new Error(error.message)
            }

        }),
    check('quantity')
        .isLength({ min: 1 })
        .withMessage('Quantity is required')
        .custom(async value => {
            if (value == 0) {
                throw new Error('Zero is not allowed')
            }
        }),
    check('per_price')
        .isLength({ min: 1 })
        .withMessage('Per price is required')
        .custom(async value => {
            if (value == 0) {
                throw new Error('Zero is not allowed')
            }
        }),
    check('total_price')
        .isLength({ min: 1 })
        .withMessage('Total price is required')
        .custom(async value => {
            if (value == 0) {
                throw new Error('Zero is not allowed')
            }
        })

]

export const addPurchaseValidationHandler = (req, res, next) => {
    const result = validationResult(req)
console.log(req.body)
    if (!(result.isEmpty())) {
        res.status(400).json({
            errors: result.mapped()
        })
    } else {
        next()
    }
}