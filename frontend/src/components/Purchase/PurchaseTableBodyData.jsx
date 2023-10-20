const PurchaseTableBodyData = ({
    itemIndex,
    _id,
    product_name,
    quantity,
    per_price,
    total_price,
    date
}) => {

    const purchaseDate = new Date(date)

    const dateFormat = `${purchaseDate.getDate()}/${purchaseDate.getMonth() + 1}/${purchaseDate.getFullYear()}`


    return (
        <tr id={_id}>
            <td>{itemIndex + 1}</td>
            <td>{product_name}</td>
            <td>{quantity}</td>
            <td>{per_price}</td>
            <td>{total_price}</td>
            {dateFormat != 'NaN/NaN/NaN'
                && <td>{dateFormat}</td>
            }
        </tr>
    )
}
export default PurchaseTableBodyData