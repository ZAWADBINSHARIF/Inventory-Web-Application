// external import
import { Form, Row, Col, Button } from "react-bootstrap"

const AddPurchase = () => {
    return (
        <Form>
            <Row>
                <Col xs={12} sm={12} md={4} lg={3} xl>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Product name</Form.Label>
                        <Form.Control type="text" placeholder="Product name" name="product_name" />
                        <Form.Text className="text-muted">
                            We will never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3} xl>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" placeholder="Quantity" name="quantity" />
                        <Form.Text className="text-muted">
                            We will never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3} xl>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Per price</Form.Label>
                        <Form.Control type="number" placeholder="Per price" name="per_price" />
                        <Form.Text className="text-muted">
                            We will never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3} xl>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Total price</Form.Label>
                        <Form.Control type="number" placeholder="Total price" name="total_price" />
                        <Form.Text className="text-muted">
                            We will never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="primary" type="submit">
                Add Purchase
            </Button>

        </Form>
    )
}
export default AddPurchase