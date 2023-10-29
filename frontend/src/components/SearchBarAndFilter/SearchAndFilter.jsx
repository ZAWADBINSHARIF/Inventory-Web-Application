// external import
import { Fragment, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Row, Col, Form, Button } from "react-bootstrap"

// internal import
import SearchBar from "./SearchBar"
import useDefaultDate from "../../customs/hooks/useDefaultDate"

const SearchAndFilter = ({ products, setSearchResult, fetchProdcuts, totalAmount, totalProfit, disableDateFilter }) => {
    const dispatch = useDispatch()

    const [from, to] = useDefaultDate()

    const [fromDate, setFromDate] = useState(from)
    const [toDate, setToDate] = useState(to)

    const handleApply = () => {
        if (!fromDate && !toDate) {
            setFromDate(from)
            setToDate(to)
        }

        dispatch(fetchProdcuts({ fromDate, toDate }))
    }

    const handleClear = () => {
        setFromDate(from)
        setToDate(to)
    }

    useEffect(() => {
        if (!disableDateFilter && fetchProdcuts && fromDate !== "" && toDate !== "") {
            dispatch(fetchProdcuts({ fromDate, toDate }))
        }
    }, [disableDateFilter, fetchProdcuts, dispatch, fromDate, toDate])

    return (
        <Row className="SearchAndFilter flex-row-reverse">
            <Col>
                <SearchBar products={products} setSearchResult={setSearchResult} />
            </Col>

            {!disableDateFilter &&
                <>
                    <Col>
                        <div className="h-100 d-flex justify-content-evenly align-items-center">
                            <Button className="btn btn-light border border-secondary" onClick={() => handleApply()}>Apply</Button>
                            <Button className="btn btn-light border border-secondary" onClick={handleClear}>Clear</Button>
                        </div>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3 flex-row" controlId="toDate">
                                <Form.Label>To</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="fromDate">
                                <Form.Label>From</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                    {totalProfit &&
                        <Col>
                            <div className="w-100 h-100 d-flex justify-content-center align-items-center fw-bold">
                                <Fragment>
                                    Profit: {totalProfit} Tk
                                </Fragment>
                            </div>
                        </Col>
                    }
                    <Col>
                        <div className="w-100 h-100 d-flex justify-content-center align-items-center fw-bold">
                            <Fragment>
                                Total: {totalAmount} Tk
                            </Fragment>
                        </div>
                    </Col>
                </>

            }
        </Row>
    )
}
export default SearchAndFilter