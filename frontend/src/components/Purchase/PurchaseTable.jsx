// external import
import { Table } from 'react-bootstrap'

const PurchaseTable = () => {
    return (
        <div className='PurchaseTable pt-5'>
            <p className='text-primary fs-3'>Purchases History</p>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product name</th>
                        <th>Quantity</th>
                        <th>Per price</th>
                        <th>Total price</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default PurchaseTable