// external import
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'

// internal import
import { fetchProducts, removeProduct } from '../../redux/productSlice'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const ProductTableData = (product) => {

    const dispatch = useDispatch()
    const messageFromProductSlice = useSelector(state => state.products.message)

    const handleRemove = (productID) => {
        dispatch(removeProduct(productID))
        dispatch(fetchProducts())
        console.log(productID)
        console.log(messageFromProductSlice)
        if (messageFromProductSlice.product_name)
            product.dangerNotify(`${messageFromProductSlice.product_name} is removed`)
    }

    return (
        <tr id={product.id}>
            <td>{product.indexNumber + 1}</td>
            <td>{product.name}</td>
            <td>{product.brand}</td>
            <td>{product.description}</td>
            <td>{product.quantity}</td>
            <td>{product.purchase_price}</td>
            <td>{product.sale_price}</td>
            <td>{product.barcode}</td>
            <td>
                <MdDelete
                    style={{
                        color: 'red',
                        fontSize: "32px",
                        cursor: "pointer"
                    }}
                    onClick={() => handleRemove(product.id)}
                />
            </td>

        </tr>
    )
}
export default ProductTableData