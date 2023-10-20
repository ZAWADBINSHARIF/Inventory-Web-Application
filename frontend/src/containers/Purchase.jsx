// external import
import { Row, Col } from "react-bootstrap"
import { toast } from 'react-toastify'



// internal import
import AddPurchase from "../components/Purchase/AddPurchase"
import PurchaseTable from "../components/Purchase/PurchaseTable"

const Purchase = () => {

  const successNotify = (message) => toast.info(message, {
    theme: "colored"
  });
  const dangerNotify = (message) => toast.error(message, {
    theme: "colored"
  });
  return (
    <div className="Purchase">
      <Row>
        <Col>
          <AddPurchase
            successNotify={successNotify}
            dangerNotify={dangerNotify}
          />
        </Col>
        <Col sm={12}>
          <PurchaseTable/>
        </Col>
      </Row>
    </div>
  )
}
export default Purchase