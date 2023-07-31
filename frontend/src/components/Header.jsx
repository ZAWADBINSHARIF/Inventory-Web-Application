import { Nav, Navbar } from "react-bootstrap"

const Header = () => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Nav className="ms-auto flex-sm-colum flex-row">
          <Nav.Link href="#link" className="pe-md-5 pe-2 text-primary"><b>Purchase: 99999 Tk</b></Nav.Link>
          <Nav.Link href="#link" className="pe-md-5 pe-2 text-success"><b>Sale: 99999 Tk</b></Nav.Link>
          <Nav.Link href="#link" className="pe-md-5 pe-2 text-danger"><b>Out of stock: 24</b></Nav.Link>
          </Nav>
    </Navbar>
  )
}
export default Header
