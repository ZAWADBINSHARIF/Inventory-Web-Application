// external import
import { useDispatch, useSelector } from "react-redux"
import { Table, Button } from "react-bootstrap"

// internal import
import SaleProductCartTableRow from "./SaleProductCartTableRow"
import { fetchProducts } from '../../../redux/productSlice'
import { fetchSoldProductsThunk, saleProductsThunk } from "../../../redux/saleSlice"
import { STATUS } from '../../../redux/saleSlice'
import { toast } from "react-toastify"
import useDefaultDate from "../../../customs/hooks/useDefaultDate"

const SaleProductCart = () => {

    const { saleProductsList, status } = useSelector(state => state.sales)
    const dispatch = useDispatch()
    const [fromDate, toDate] = useDefaultDate()

    const handleSaleProducts = (e) => {
        e.preventDefault()

        dispatch(saleProductsThunk())

        if (status === STATUS.ERROR) {
            toast.error("Something went wrong")
        } else {
            toast.success("Products have been sold")
        }

        dispatch(fetchProducts())
        dispatch(fetchSoldProductsThunk({ fromDate, toDate }))
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
                            product_info={item.product_info}
                            product_name={item.product_name}
                            quantity={item.quantity}
                            per_price={item.per_price}
                            total_price={item.total_price}
                        />

                    ))}

                </tbody>
            </Table>
            {saleProductsList.length > 0 &&
                <Button variant="primary" onClick={handleSaleProducts} disabled={(status === STATUS.LOADING || saleProductsList.length > 0) ? false : true}>
                    Comfirm
                </Button>
            }
        </div>
    )
}
export default SaleProductCart