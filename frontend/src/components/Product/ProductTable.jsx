// external import
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Table } from "react-bootstrap"

// internal import
import { fetchProducts, setProducts } from "../../redux/productSlice"
import ProductTableData from "./ProductTableData"
import SearchAndFilter from "../SearchBarAndFilter/SearchAndFilter"

const ProductTable = ({ dangerNotify }) => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.data)

  const [searchResult, setSearchResult] = useState(products)


  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    setSearchResult(products)
  }, [products])

  return (
    <div className="ProductTable pt-5">
      <div className="headingDiv d-flex flex-row justify-content-between">
        <p className='text-primary fs-3'>Products Add History</p>

        <SearchAndFilter
          products={products}
          setSearchResult={setSearchResult}
          disableDateFilter={true}
        />

      </div>

      <div className="table">

        <Table striped bordered hover responsive className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>Brand</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Stock limit alert</th>
              <th>Purchase Price</th>
              <th>Sale price</th>
              <th>Bar Code</th>
              <th>Double Click</th>
            </tr>
          </thead>
          <tbody>

            {searchResult.map((product, index) => (

              <ProductTableData
                key={index}
                id={product._id}
                indexNumber={index}
                name={product.product_name}
                brand={product.brand}
                description={product.description}
                stock_limit = {product.stock_limit}
                quantity={product.quantity}
                purchase_price={product.purchase_price}
                sale_price={product.sale_price}
                barcode={product.barcode}
                dangerNotify={dangerNotify}
              />

            ))}


          </tbody>
        </Table>

      </div>

    </div>
  )
}
export default ProductTable