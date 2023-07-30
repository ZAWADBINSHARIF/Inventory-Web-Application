import { Form, Row, Col, Button } from "react-bootstrap"

const AddProduct = () => {
  return (
      <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Row className='gap-3'>
                      <Col>
                          <Form.Label>Product name</Form.Label>
                          <Form.Control type="text" placeholder="Product Name" name='product_name' />
                      </Col>
                      <Col>
                          <Form.Label>Brand name</Form.Label>
                          <Form.Control type="text" placeholder="Brand Name" name='brand' />
                      </Col>
                      <Col>
                          <Form.Label>Description</Form.Label>
                          <Form.Control type="text" placeholder="Description" name='description' />
                      </Col>
                      <Col>
                          <Form.Label>Purchase price</Form.Label>
                          <Form.Control type="number" placeholder="Purchase price" name='purchase_price' />
                      </Col>
                      <Col>
                          <Form.Label>Sale price</Form.Label>
                          <Form.Control type="number" placeholder="Sale price" name='sale_price' />
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