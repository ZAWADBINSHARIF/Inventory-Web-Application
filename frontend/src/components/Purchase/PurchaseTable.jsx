// external import
import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

// internal import
import { fetchPurchases, STATUS } from '../../redux/purchaseSlice'
import PurchaseTableBodyData from './purchaseTableBodyData'
import SearchAndFilter from '../SearchBarAndFilter/SearchAndFilter'

const PurchaseTable = () => {

    const { allPurchase, status, totalPurchaseAmount } = useSelector(state => state.purchases)
    const [searchResult, setSearchResult] = useState(allPurchase)

    useEffect(() => {
        setSearchResult(allPurchase)
    }, [allPurchase])

    return (
        <div className='PurchaseTable pt-5'>
            <div className="headingDiv d-flex flex-row justify-content-between">
                <p className='text-primary fs-3'>Purchases History</p>

                <SearchAndFilter
                    products={allPurchase}
                    setSearchResult={setSearchResult}
                    fetchProdcuts={fetchPurchases}
                    totalAmount={totalPurchaseAmount}
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
                {status === STATUS.IDLE &&
                    <tbody>
                        {
                            searchResult.map((item, index) => (
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
                            ))
                        }
                    </tbody>
                }
                {status === STATUS.LOADING &&
                    <tbody>
                        <tr>
                            <td>
                                <h3>Loading...</h3>
                            </td>
                        </tr>
                    </tbody>
                }
            </Table>
        </div >
    )
}
export default PurchaseTable