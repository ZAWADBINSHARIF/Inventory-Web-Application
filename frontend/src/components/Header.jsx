// external import
import { Nav, Navbar } from "react-bootstrap"

const Header = () => {

  return (
    <Navbar bg="light" data-bs-theme="light" className="py-4">

      <Navbar.Brand className="fw-bold text-secondary">
        User Name
      </Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="#home" className='text-primary fw-bold'>Purchase: 578968</Nav.Link>
        <Nav.Link href="#features" className='text-success fw-bold'>Sale: 98754</Nav.Link>
        <Nav.Link href="#pricing" className='text-danger fw-bold'>Out of stock: 25</Nav.Link>
      </Nav>

    </Navbar>
  )
}
export default Header
