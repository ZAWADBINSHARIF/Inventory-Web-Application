// external import
import { MdDelete } from 'react-icons/md'

// internal import 
import { useDispatch } from "react-redux"
import { removeSaleProductsListItem } from "../../redux/saleSlice"

const SaleProductCartTableRow = ({
  _id,
  index,
  product_name,
  quantity,
  per_price,
  total_price
}) => {

  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeSaleProductsListItem(_id))
  }

  return (
    <tr id={_id}>
      <td>{index + 1}</td>
      <td>{product_name}</td>
      <td>{quantity}</td>
      <td>{per_price}</td>
      <td>{total_price}</td>
      <td className='text-center'>
        <MdDelete
          style={{
            color: 'red',
            fontSize: "24px",
            cursor: "pointer"
          }}
          onDoubleClick={handleRemove}
        />
      </td>
    </tr>
  )
}
export default SaleProductCartTableRow