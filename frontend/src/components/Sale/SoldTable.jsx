// external import
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Table } from "react-bootstrap"

// internal import
import { fetchSoldProductsThunk } from "../../redux/saleSlice"
import SoldTableRowData from "./SoldTableRowData"

const SoldTable = () => {

    const { soldProducts } = useSelector(state => state.sales)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSoldProductsThunk())
    }, [dispatch])

    return (
        <div className="SoldTable pt-5">
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
                        <th>Sale ID</th>
                        <th>Date & Time</th>
                    </tr>
                </thead>
                <tbody>

                    {soldProducts.map((item, index) => (
                        <SoldTableRowData
                            key={index}
                            _id={item._id}
                            index={index}
                            product_name={item.product_name}
                            quantity={item.quantity}
                            per_price={item.per_price}
                            total_price={item.total_price}
                            profit={item.profit}
                            date={item.createdAt}
                            barcode={item.barcode}
                            sale_id={item.sale_id}
                        />
                    ))}

                    {/* <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td className="text-success">@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                  </tr> */}
                </tbody>
            </Table>
        </div>
    )
}
export default SoldTable