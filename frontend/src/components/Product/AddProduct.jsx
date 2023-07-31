import { Form, Row, Col, Button } from "react-bootstrap"

const AddProduct = () => {
  return (
      <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Row className='gap-3'>
                      <Col xs={12} sm={12} md={4} lg={3} xl>
                          <Form.Label>Product name</Form.Label>
                          <Form.Control type="text" placeholder="Product Name" name='product_name' />
                          <Form.Text className="text-muted">
                              We will never share your email with anyone else.
                          </Form.Text>
                      </Col>
                      <Col xs={12} sm={12} md={4} lg={3} xl>
                          <Form.Label>Brand name</Form.Label>
                          <Form.Control type="text" placeholder="Brand Name" name='brand' />
                          <Form.Text className="text-muted">
                              We will never share your email with anyone else.
                          </Form.Text>
                      </Col>
                      <Col xs={12} sm={12} md={4} lg={3} xl>
                          <Form.Label>Description</Form.Label>
                          <Form.Control type="text" placeholder="Description" name='description' />
                      </Col>
                      <Col xs={12} sm={12} md={4} lg={3} xl>
                          <Form.Label>Purchase price</Form.Label>
                          <Form.Control type="number" placeholder="Purchase price" name='purchase_price' />
                          <Form.Text className="text-muted">
                              We will never share your email with anyone else.
                          </Form.Text>
                      </Col>
                      <Col xs={12} sm={12} md={4} lg={3} xl>
                          <Form.Label>Sale price</Form.Label>
                          <Form.Control type="number" placeholder="Sale price" name='sale_price' />
                          <Form.Text className="text-muted">
                              We will never share your email with anyone else.
                          </Form.Text>
                      </Col>
                  </Row>
              </Form.Group>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={(e)=> e.preventDefault()}>
              Add Product
          </Button>

      </Form>
  )
}
export default AddProduct