// external import
import { Table } from "react-bootstrap"

const SaleTable = () => {
  return (
      <div className="SaleTable pt-5">
          <p className='text-primary fs-3'>Sales History</p>
          <Table striped bordered hover responsive>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Product name</th>
                      <th>Quantity</th>
                      <th>Per Price</th>
                      <th>Total price</th>
                      <th className="text-bg-success">Profit</th>
                      <th>Bar Code</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td className="text-success">@mdo</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td className="text-success">@fat</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td className="text-success">@fat</td>
                  </tr>
              </tbody>
          </Table>
    </div>
  )
}
export default SaleTable