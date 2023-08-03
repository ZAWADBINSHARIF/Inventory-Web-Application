// external import
import { Row, Col, Form, Button } from "react-bootstrap"

const ProductSaleForm = () => {
    return (
        <div>
            <Form>
                <Row>
                    <Col md={6} lg={4} xxl={5} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Bar Code</Form.Label>
                            <Form.Control type="text" placeholder="Product Bar Code" name="barcode"/>
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={4} xxl={5} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Product Name" name="product_name"/>
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={4} xxl={5} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="text" placeholder="Quantity" name="quantity"/>
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={4} xxl={5} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Per Price</Form.Label>
                            <Form.Control type="text" placeholder="Per Price" disabled name="per_price"/>
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={4} xxl={5} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Total Price</Form.Label>
                            <Form.Control type="text" placeholder="Total" disabled name="total_price"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Add To Cart ↦
                </Button>
            </Form>
        </div>
    )
}
export default ProductSaleForm