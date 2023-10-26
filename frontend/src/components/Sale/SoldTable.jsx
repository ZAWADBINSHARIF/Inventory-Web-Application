// external import
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Table } from "react-bootstrap"

// internal import
import { STATUS, fetchSoldProductsThunk } from "../../redux/saleSlice"
import SoldTableRowData from "./SoldTableRowData"
import SearchAndFilter from "../SearchBarAndFilter/SearchAndFilter"

const SoldTable = () => {

    const { soldProducts, status } = useSelector(state => state.sales)
    const [searchResult, setSearchResult] = useState(soldProducts)

    useEffect(() => {
        setSearchResult(soldProducts)
    }, [soldProducts])

    return (
        <div className="SoldTable pt-5">

            <div className="headingDiv d-flex flex-row justify-content-between">
                <p className='text-primary fs-3'>Sales History</p>

                <SearchAndFilter
                    products={soldProducts}
                    setSearchResult={setSearchResult}
                    fetchProdcuts={fetchSoldProductsThunk}
                />

            </div>


            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product name</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                        <th>Per Price</th>
                        <th>Total price</th>
                        <th className="text-bg-success">Profit</th>
                        <th>Bar Code</th>
                        <th>Sale ID</th>
                        <th>Date & Time</th>
                    </tr>
                </thead>

                {status === STATUS.IDLE &&
                    <tbody>
                        {
                            searchResult.map((item, index) => (
                                <SoldTableRowData
                                    key={index}
                                    _id={item._id}
                                    index={index}
                                    product_name={item.product_name}
                                    brand={item.brand}
                                    quantity={item.quantity}
                                    per_price={item.per_price}
                                    total_price={item.total_price}
                                    profit={item.profit}
                                    date={item.createdAt}
                                    barcode={item.barcode}
                                    sale_id={item.sale_id}
                                />
                            ))
                        }
                    </tbody>
                }
                {status === STATUS.LOADING && 
                    <tbody>
                        <h3>Loading...</h3>
                </tbody>
                }
            </Table>
        </div >
    )
}
export default SoldTable