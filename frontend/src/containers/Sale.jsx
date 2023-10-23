// external import
import { Row, Col } from "react-bootstrap"

// internal import
import ProductSaleForm from "../components/Sale/ProductSaleForm"
import SaleProductCart from "../components/Sale/SaleProductCart"
import SoldTable from "../components/Sale/SoldTable"

const Sale = () => {
  return (
    <div className="Sale">
      <Row>
        <Col sm={12}>
          <Row>
            <Col xs={12} md={6}>
              <ProductSaleForm />
            </Col>
            <Col xs={12} md={6}>
              <SaleProductCart/>
            </Col>
          </Row>
        </Col>
        <Col>
          {/* Sale Products History  */}
          <SoldTable/>
        </Col>
      </Row>
    </div>
  )
}
export default Sale