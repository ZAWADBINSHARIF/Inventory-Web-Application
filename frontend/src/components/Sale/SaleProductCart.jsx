// external import
import { useDispatch, useSelector } from "react-redux"
import { Table, Button } from "react-bootstrap"

// internal import
import SaleProductCartTableRow from "./SaleProductCartTableRow"
import { saleProductsThunk } from "../../redux/saleSlice"

const SaleProductCart = () => {

    const saleProductsList = useSelector(state => state.sales.saleProductsList)
    const dispatch = useDispatch()

    const handleSaleProducts = (e) => {
        e.preventDefault()
        dispatch(saleProductsThunk())
    }
    
    return (
        <div className="SaleProductCart pt-5 pt-md-0">
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
                    {saleProductsList.map((item, index) => (
                        <SaleProductCartTableRow
                            key={index}
                            index={index}
                            _id={item._id}
                            product_name={item.product_name}
                            quantity={item.quantity}
                            per_price={item.per_price}
                            total_price={item.total_price}
                        />

                    ))}

                </tbody>
            </Table>
            {saleProductsList.length > 0 &&
                <Button variant="primary" onClick={ handleSaleProducts}>
                    Comfirm
                </Button>
            }
        </div>
    )
}
export default SaleProductCart