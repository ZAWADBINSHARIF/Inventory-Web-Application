import { Col, Row } from 'react-bootstrap'
import AddProduct from '../components/Product/AddProduct'
import ProductTable from '../components/Product/ProductTable'

const Product = () => {
    return (
        <div className="Product">
            <div className="addProduct p-5">
                <Row>
                    <Col>
                        <AddProduct />
                    </Col>


                    <Col sm={12}>
                        <ProductTable />
                    </Col>

                </Row>
            </div>
        </div>
    )
}
export default Product