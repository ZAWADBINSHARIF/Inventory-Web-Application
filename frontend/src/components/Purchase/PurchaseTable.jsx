// external import
import { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

// internal import
import { fetchPurchases } from '../../redux/purchaseSlice'
import PurchaseTableBodyData from './purchaseTableBodyData'

const PurchaseTable = () => {

    const purchases = useSelector(state => state.purchases.data)
    const dispatch = useDispatch()

    // console.log(purchases)

    useEffect(() => {
        dispatch(fetchPurchases())
    }, [dispatch])

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
                    {purchases.map((item, index) => (
                        <PurchaseTableBodyData
                            key={index}
                            itemIndex={index}
                            _id={item._id}
                            product_name={item.product_name}
                            quantity={item.quantity}
                            per_price={item.per_price}
                            total_price={item.total_price}
                            date={item.date}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default PurchaseTable