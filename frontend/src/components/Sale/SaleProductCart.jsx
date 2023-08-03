// external import
import { Table, Button } from "react-bootstrap"

// internal import
// import SaleProductCartTableRow from "./SaleProductCartTableRow"

const SaleProductCart = () => {
  return (
      <div className="SaleProductCart">
          <Table responsive bordered hover variant="primary">
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Per Price</th>
                      <th>Total Price</th>
                      <th>Remove</th>
                  </tr>
              </thead>
              <tbody>
                  {/* <SaleProductCartTableRow/> */}
                  
                  <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                  </tr>
                  <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                  </tr>
                  <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                  </tr>
              </tbody>
          </Table>
          <Button variant="primary" type="submit">
            Comfirm
          </Button>
    </div>
  )
}
export default SaleProductCart