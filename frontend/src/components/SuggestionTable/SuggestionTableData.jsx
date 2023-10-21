function SuggestionTableData({ product, focusInput, handleInsertValueInput }) {
    let result
    if (focusInput?.vlaue !== '') {
        result = product[focusInput.name]?.toLowerCase()
            .startsWith(focusInput?.value?.toLowerCase())
    }
    if (result) {
        return (
            <tr id={product._id} onClick={()=> handleInsertValueInput(product)}>
                <td>{product.barcode}</td>
                <td>{product.product_name}</td>
            </tr>
        )
    }

}
export default SuggestionTableData