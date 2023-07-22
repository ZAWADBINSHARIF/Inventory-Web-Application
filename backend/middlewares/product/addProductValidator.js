// external import
import { check, validationResult } from "express-validator"

// internal import
import Product from "../../models/product.js"

export const productInputValidation = [
    check('product_name')
        .trim()
        .isLength({ min: 1 })
        .withMessage('Product name is required')
        .custom(async value => {

            try {
                const isMatch = await Product.findOne
                    ({ product_name: value }).exec()

                if (isMatch) {
                    throw new Error('Product name must be unique')
                }
            } catch (error) {
                throw new Error(error.message)
            }

        }),
    check('brand')
        .trim()
        .isLength({ min: 1 })
        .withMessage('Brand name is required'),
    check('description')
        .trim(),
    check('purchase_price')
        .trim()
        .isLength({ min: 1 })
        .isNumeric()
        .withMessage('Purchase price is required'),
    check('sale_price')
        .trim()
        .isLength({ min: 1 })
        .isNumeric()
        .withMessage('Sale price is required'),
    check('categories')
        .trim()
]

export const addProductValidationHandler = (req, res, next) => {
    const result = validationResult(req)

    if (!(result.isEmpty())) {
        res.status(400).json({
            errors: result.mapped()
        })
    } else {
        next()
    }
}