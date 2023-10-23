const SoldTableRowData = ({
    _id,
    index,
    product_name,
    quantity,
    per_price,
    total_price,
    profit,
    date,
    barcode,
    sale_id
}) => {
    return (
        <tr id={_id}>
            <td>{index + 1}</td>
            <td>{product_name}</td>
            <td>{quantity}</td>
            <td>{per_price}</td>
            <td>{total_price}</td>
            {profit
                && <td className="text-success">{profit}</td>
            }
            <td>{barcode}</td>
            <td>{sale_id}</td>
            <td>{date}</td>
        </tr>
    )
}
export default SoldTableRowData