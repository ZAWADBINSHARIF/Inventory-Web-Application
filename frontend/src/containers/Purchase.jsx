// external import
import { Row, Col } from "react-bootstrap"

// internal import
import AddPurchase from "../components/Purchase/AddPurchase"
import PurchaseTable from "../components/Purchase/PurchaseTable"

const Purchase = () => {
  return (
    <>
      <Row>
        <Col>
          <AddPurchase />
        </Col>
        <Col sm={12}>
          <PurchaseTable/>
        </Col>
      </Row>
    </>
  )
}
export default Purchase