// external import
import { useState } from "react"
import { Form, Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"

// internal import
import { fetchProducts } from "../../redux/productSlice.js"
import SuggestionTable from "../SuggestionTable/SuggestionTable.jsx"
import { fetchPurchases } from "../../redux/purchaseSlice.js"

const AddPurchase = ({ dangerNotify, successNotify }) => {

    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products.data)

    const current = new Date()
    const today = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`

    const emptyForm = {
        barcode: '',
        product_name: '',
        quantity: 0,
        per_price: 0,
        total_price: 0,
        date: today
    }

    const [formData, setFormData] = useState(emptyForm)
    const [focusInput, setFocusInput] = useState({ name: '', value: '' })
    const [showSearchTable, setShwoSearchTable] = useState(false)
    const [errorMessage, setErrorMessage] = useState({})

    function handleInput(e) {
        const { name, value } = e.target
        if (name === 'quantity') {
            setFormData({
                ...formData,
                [name]: value,
                total_price: formData.per_price * value || 0
            })
        } else {
            setFormData({ ...formData, [name]: value })
            setFocusInput({ name: name, value: value })
            setShwoSearchTable(true)
        }
    }

    function handleInsertValueInput(product) {
        const value = {
            _id: product._id,
            barcode: product.barcode,
            product_name: product.product_name,
            brand: product.brand,
            per_price: product.purchase_price,
            quantity: formData.quantity,
            total_price: product.purchase_price * formData.quantity || 0,
            date: formData.date
        }
        setFormData(value)
        setShwoSearchTable(false)
    }


    function handleAddPurchase(e) {
        e.preventDefault()

        e.target.disabled = true

        axios.post('/transaction/purchase', {
            ...formData
        }).then(response => {
            dispatch(fetchPurchases())
            successNotify(response.data.message)
            setFormData(emptyForm)
            setErrorMessage({})
        }).catch(error => {
            setErrorMessage(error.response.data.errors)
            dangerNotify(error.response.data.errorMessage)
        })

        e.target.disabled = false
    }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <Form>
            <Row>
                <Col xs={12} sm={12} md={4} lg={3} xl>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Product bar code</Form.Label>
                        <Form.Control type="text" placeholder="Product bar code" name="barcode" value={formData.barcode} onChange={handleInput} />
                        {errorMessage.barcode &&
                            <Form.Text className="text-danger">
                                {errorMessage.barcode.msg}
                            </Form.Text>}
                    </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3} xl>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Product name</Form.Label>
                        <Form.Control type="text" placeholder="Product name" name="product_name" value={formData.product_name} onChange={handleInput} />
                        {errorMessage.product_name &&
                            <Form.Text className="text-danger">
                                {errorMessage.product_name.msg}
                            </Form.Text>}
                    </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3} xl>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" placeholder="Quantity" name="quantity" value={formData.quantity} onChange={handleInput} />
                        {errorMessage.quantity &&
                            <Form.Text className="text-danger">
                                {errorMessage.quantity.msg}
                            </Form.Text>}
                    </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3} xl>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Per price</Form.Label>
                        <Form.Control type="number" disabled placeholder="Per price" name="per_price" value={formData.per_price} onChange={handleInput} />
                        {errorMessage.per_price &&
                            <Form.Text className="text-danger">
                                {errorMessage.per_price.msg}
                            </Form.Text>}
                    </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3} xl>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Total price</Form.Label>
                        <Form.Control type="number" disabled placeholder="Total price" name="total_price" value={formData.total_price} onChange={handleInput} />
                        {errorMessage.total_price &&
                            <Form.Text className="text-danger">
                                {errorMessage.total_price.msg}
                            </Form.Text>}
                    </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3} xl>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Total price</Form.Label>
                        <Form.Control type="date" name="date" min={'2010-01-01'} value={formData.date} onChange={handleInput} />
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="primary" type="submit" onClick={(e) => handleAddPurchase(e)}>
                Add Purchase
            </Button>

            {((focusInput.name === 'product_name' && focusInput.value !== '')
                || (focusInput.name == 'barcode' && focusInput.value !== ''))
                && showSearchTable
                && < SuggestionTable
                    allProducts={allProducts}
                    focusInput={focusInput}
                    handleInsertValueInput={handleInsertValueInput}
                />
            }
        </Form>
    )
}
export default AddPurchase