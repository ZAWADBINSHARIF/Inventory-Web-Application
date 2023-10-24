// external import
import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

// internal import
import { fetchPurchases } from '../../redux/purchaseSlice'
import PurchaseTableBodyData from './purchaseTableBodyData'
import SearchAndFilter from '../SearchBarAndFilter/SearchAndFilter'

const PurchaseTable = () => {

    const purchases = useSelector(state => state.purchases.data)
    const dispatch = useDispatch()

    const [searchResult, setSearchResult] = useState(purchases)

    // console.log(purchases)

    useEffect(() => {
        dispatch(fetchPurchases())
    }, [dispatch])

    useEffect(() => {
        setSearchResult(purchases)
    }, [purchases])

    return (
        <div className='PurchaseTable pt-5'>
            <div className="headingDiv d-flex flex-row justify-content-between">
                <p className='text-primary fs-3'>Purchases History</p>

                <SearchAndFilter
                    products={purchases}
                    setSearchResult={setSearchResult}
                />

            </div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Barcode</th>
                        <th>Product name</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                        <th>Per price</th>
                        <th>Total price</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResult.map((item, index) => (
                        <PurchaseTableBodyData
                            key={index}
                            itemIndex={index}
                            _id={item._id}
                            barcode={item.barcode}
                            product_name={item.product_name}
                            brand={item.brand}
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