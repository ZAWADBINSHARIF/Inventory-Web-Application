// external import
import { useEffect } from "react"
import { Nav, Navbar } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'

// internal import
import { fetchThisMonthTotalPurchaseAmount, fetchThisMonthTotalSoldAmount } from "../redux/headerSlice.js"
import useDefaultDate from '../customs/hooks/useDefaultDate.jsx'

const Header = () => {

  const {
    thisMonthTotalPurchaseAmount,
    thisMonthTotalSoldAmount
  } = useSelector(state => state.header)

  const [fromDate, toDate] = useDefaultDate()
  const dispatch = useDispatch()

  const handleReloadData = () => {
    const dateObj = { fromDate, toDate }

    dispatch(fetchThisMonthTotalPurchaseAmount(dateObj))
    dispatch(fetchThisMonthTotalSoldAmount(dateObj))
  }

  useEffect(() => {
    const dateObj = { fromDate, toDate }

    dispatch(fetchThisMonthTotalPurchaseAmount(dateObj))
    dispatch(fetchThisMonthTotalSoldAmount(dateObj))

  }, [dispatch, fromDate, toDate])

  return (
    <Navbar bg="light" data-bs-theme="light" className="py-4">

      <Navbar.Brand className="fw-bold text-secondary">
        User Name
      </Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link className='text-primary fw-bold' onClick={handleReloadData}>Purchase: {thisMonthTotalPurchaseAmount} Tk</Nav.Link>
        <Nav.Link className='text-success fw-bold' onClick={handleReloadData}>Sale: {thisMonthTotalSoldAmount} Tk</Nav.Link>
        <Nav.Link className='text-danger fw-bold' onClick={handleReloadData}>Out of stock: 25</Nav.Link>
      </Nav>

    </Navbar>
  )
}
export default Header
