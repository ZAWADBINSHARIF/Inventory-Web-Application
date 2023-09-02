// external import
import { Col, Row } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// internal import
import AddProduct from '../components/Product/AddProduct'
import ProductTable from '../components/Product/ProductTable'


const Product = () => {

    const successNotify = (message) => toast.info(message, {
        theme: "colored"
    });
    const dangerNotify = (message) => toast.error(message, {
        theme: "colored"
    });

    return (
        <div className="Product">
            <div className="addProduct">
                <ToastContainer />
                <Row>
                    <Col>
                        <AddProduct
                            successNotify={successNotify}
                            
                        />
                    </Col>


                    <Col sm={12}>
                        <ProductTable
                            dangerNotify={dangerNotify}
                        />
                    </Col>

                </Row>
            </div>
        </div>
    )
}
export default Product