// external import
import { Form } from 'react-bootstrap'

const SearchBar = ({ products, setSearchResult }) => {

    const handleSearch = (e) => {
        const { value } = e.target

        const result = products.filter(item => {
            return (item?.product_name?.toLowerCase().startsWith(value.toLowerCase())
                || item?.barcode?.toLowerCase().startsWith(value.toLowerCase())
                || item?.brand?.toLowerCase().startsWith(value.toLowerCase())
                || item?.sale_id?.toLowerCase().startsWith(value.toLowerCase()))
        })

        setSearchResult(result)
    }

    return (
        <Form onSubmit={(e)=> e.preventDefault()}>
            <Form.Label>Search</Form.Label>
            <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2 mb-3"
                onChange={handleSearch}
            />
        </Form>
    )
}
export default SearchBar