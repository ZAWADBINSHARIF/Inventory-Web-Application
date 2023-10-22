// external import
import { Form, Row, Col, Button } from "react-bootstrap"
import axios from 'axios'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchProducts } from "../../redux/productSlice"

const AddProduct = ({ successNotify }) => {

    const dispatch = useDispatch()

    const emptyForm = {
        product_name: "",
        brand: "",
        description: "",
        purchase_price: "",
        sale_price: ""
    }

    const [formValue, setFormValue] = useState({...emptyForm})

    const [errorsMessage, setErrorMessage] = useState({})

    const handleInput = (e) => {
        const { name, value } = e.target
        setFormValue({ ...formValue, [name]: value })
    }


    const handleAddProduct = e => {
        e.preventDefault()
        e.target.disabled = true
        axios.post('/product', {
            ...formValue
        }).then(response => {
            successNotify(response.data.message)
            dispatch(fetchProducts())
            setFormValue({ ...emptyForm })
            setErrorMessage({})
            e.target.disabled = false
        }).catch(error => {
            setErrorMessage(error.response.data.errors)
            e.target.disabled = false
        })
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Row className='gap-3'>
                        <Col xs={12} sm={12} md={4} lg={3} xl>
                            <Form.Label>Product name</Form.Label>
                            <Form.Control type="text" placeholder="Product Name" name='product_name' value={formValue.product_name} onChange={handleInput} required />
                            {errorsMessage.product_name &&
                                <Form.Text className="text-danger">
                                    {errorsMessage.product_name.msg}
                                </Form.Text>
                            }

                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3} xl>
                            <Form.Label>Brand name</Form.Label>
                            <Form.Control type="text" placeholder="Brand Name" name='brand' value={formValue.brand} onChange={handleInput} required />
                            {errorsMessage.brand &&
                                <Form.Text className="text-danger">
                                    {errorsMessage.brand.msg}
                                </Form.Text>
                            }

                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3} xl>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" name='description' value={formValue.description} onChange={handleInput} />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3} xl>
                            <Form.Label>Purchase price</Form.Label>
                            <Form.Control type="number" placeholder="Purchase price" name='purchase_price' value={formValue.purchase_price} onChange={handleInput} required />
                            {errorsMessage.purchase_price &&
                                <Form.Text className="text-danger">
                                    {errorsMessage.purchase_price.msg}
                                </Form.Text>
                            }

                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3} xl>
                            <Form.Label>Sale price</Form.Label>
                            <Form.Control type="number" placeholder="Sale price" name='sale_price' value={formValue.sale_price} onChange={handleInput} required />
                            {errorsMessage.sale_price &&
                                <Form.Text className="text-danger">
                                    {errorsMessage.sale_price.msg}
                                </Form.Text>
                            }

                        </Col>
                    </Row>
                </Form.Group>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={(e) => handleAddProduct(e)}>
                Add Product
            </Button>
        </Form>
    )
}
export default AddProduct