// external import
import { Row, Col } from "react-bootstrap"

// internal import
import SearchBar from "./SearchBar"

const SearchAndFilter = ({ products, setSearchResult }) => {
    return (
        <Row className="SearchAndFilter flex-row-reverse">
            <Col>
                <SearchBar products={products} setSearchResult={setSearchResult} />
            </Col>
            {/* <Col>
                SearchAndFilter
            </Col>
            <Col>
                SearchAndFilter
            </Col>
            <Col>
                SearchAndFilter
            </Col> */}
        </Row>
    )
}
export default SearchAndFilter