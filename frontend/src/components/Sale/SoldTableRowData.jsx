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

    const dateAndTime = new Date(date)
    const soldDateAndTime = `${dateAndTime.getDate()}/${dateAndTime.getMonth() + 1}/${dateAndTime.getFullYear()} 
    [${dateAndTime.getHours()}h-${dateAndTime.getMinutes()}m-${dateAndTime.getSeconds()}s]`
    console.log(soldDateAndTime)

    return (
        <tr id={_id}>
            <td>{index + 1}</td>
            <td>{product_name}</td>
            <td>{quantity}</td>
            <td>{per_price}</td>
            <td>{total_price}</td>
            {profit
                && <td className={profit >= 0 ? "text-success" : "text-bg-danger"}>{profit}</td>
            }
            <td>{barcode}</td>
            <td>{sale_id}</td>
            <td>{soldDateAndTime}</td>
        </tr>
    )
}
export default SoldTableRowData