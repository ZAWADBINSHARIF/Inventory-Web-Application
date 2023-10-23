// external import
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Table } from "react-bootstrap"

// internal import
import { fetchProducts } from "../../redux/productSlice"
import ProductTableData from "./ProductTableData"

const ProductTable = ({ dangerNotify }) => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.data)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="ProductTable pt-5">
      <p className='text-primary fs-3'>Products Add History</p>

      <div className="table">

        <Table striped bordered hover responsive className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>Brand</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Purchase Price</th>
              <th>Sale price</th>
              <th>Bar Code</th>
              <th>Double Click</th>
            </tr>
          </thead>
          <tbody>

            {products.map((product, index) => (

              <ProductTableData
                key={index}
                id={product._id}
                indexNumber={index}
                name={product.product_name}
                brand={product.brand}
                description={product.description}
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