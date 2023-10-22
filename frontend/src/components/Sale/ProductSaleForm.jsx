// external import
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Button } from "react-bootstrap"
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

// internal import
import SuggestionTable from '../SuggestionTable/SuggestionTable.jsx'
import { fetchProducts } from '../../redux/productSlice.js'
import { setSaleProductsListItem } from '../../redux/saleSlice.js'

const ProductSaleForm = () => {

    const allProducts = useSelector(state => state.products.data)
    const dispatch = useDispatch()

    const emptyForm = {
        product_info: '',
        barcode: '',
        product_name: '',
        quantity: 0,
        inStock_quantity: '',
        per_price: 0,
        per_purchase_price: 0,
        total_price: 0,
        profit: 0
    }

    const [formData, setFormData] = useState(emptyForm)
    const [focusInput, setFocusInput] = useState({ name: '', value: '' })
    const [showSearchTable, setShwoSearchTable] = useState(false)
    const [stockMessage, setStockMessage] = useState(null)

    const handleInputData = (e) => {
        const { name, value } = e.target

        if (name === 'quantity') {
            setFormData({
                ...formData,
                [name]: value,
                total_price: formData.per_price * value || 0,
                profit: (formData.per_price - formData.per_purchase_price) * value,
                stock_quantity: (formData.inStock_quantity - value) >= 0 ? setStockMessage(null) : setStockMessage(`Only ${formData.inStock_quantity} left in stock`)
            })
        } else {
            setFormData({ ...formData, [name]: value })
            setFocusInput({ name: name, value: value })
            setShwoSearchTable(true)
        }
    }

    function handleInsertValueInput(product) {
        const value = {
            product_info: product._id,
            barcode: product.barcode,
            product_name: product.product_name,
            per_price: product.sale_price,
            per_purchase_price: product.purchase_price,
            profit: (product.sale_price - product.per_purchase_price) * formData.quantity,
            quantity: formData.quantity,
            inStock_quantity: product.quantity,
            stock_quantity: (product.quantity - formData.quantity) >= 0
                ? setStockMessage(null)
                : setStockMessage(`Only ${product.quantity} left in stock`),
            total_price: product.sale_price * formData.quantity || 0,
        }
        setFormData(value)
        setShwoSearchTable(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (stockMessage) return toast.error(stockMessage)

        if (formData.quantity <= 0)
            return toast.error('Set product quantity')

        dispatch(setSaleProductsListItem(formData))
    }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6} lg={4} xxl={5} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Bar Code</Form.Label>
                            <Form.Control type="text" placeholder="Product Bar Code" name="barcode"
                                value={formData.barcode}
                                onChange={handleInputData}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={4} xxl={5} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Product Name"
                                name="product_name"
                                autoComplete='off'
                                value={formData.product_name}
                                onChange={handleInputData}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={4} xxl={5} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" placeholder="Quantity" name="quantity"
                                value={formData.quantity}
                                onChange={handleInputData}
                            />
                            {stockMessage
                                && formData.inStock_quantity
                                &&
                                <Form.Text className="text-danger">
                                    {stockMessage}
                                </Form.Text>
                            }
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={4} xxl={5} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Per Price</Form.Label>
                            <Form.Control type="text" placeholder="Per Price" disabled name="per_price"
                                value={formData.per_price}
                                onChange={handleInputData}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={4} xxl={5} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Total Price</Form.Label>
                            <Form.Control type="text" placeholder="Total" disabled name="total_price"
                                value={formData.total_price}
                                onChange={handleInputData}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Add To Cart ↦
                </Button>

                {((focusInput.name == 'product_name' && focusInput.value !== '')
                    || (focusInput.name == 'barcode' && focusInput.value !== ''))
                    && showSearchTable
                    &&
                    < SuggestionTable
                        allProducts={allProducts}
                        focusInput={focusInput}
                        handleInsertValueInput={handleInsertValueInput}
                    />
                }


            </Form>
        </div>
    )
}
export default ProductSaleForm