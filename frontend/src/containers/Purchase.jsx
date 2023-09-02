// external import
import { Row, Col } from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


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
      <ToastContainer />
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