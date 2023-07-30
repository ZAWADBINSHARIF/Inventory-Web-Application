import { Nav, Navbar, Container } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <Nav className="ms-auto">
          <Nav.Link href="#link" className="pe-5 text-primary"><b>Purchase: 99999 Tk</b></Nav.Link>
          <Nav.Link href="#link" className="pe-5 text-success"><b>Sale: 99999 Tk</b></Nav.Link>
          <Nav.Link href="#link" className="pe-5 text-danger"><b>Out of stock: 24</b></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
}
export default Header
