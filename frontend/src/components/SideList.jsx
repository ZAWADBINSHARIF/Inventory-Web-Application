import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'

const SideList = () => {
  return (
    <div className="SideList">

      <LinkContainer to='/'>
        <Nav.Link>
          <p className="sideBarLink">
            Home
          </p>
        </Nav.Link>
      </LinkContainer>

      <LinkContainer to='/product'>
        <Nav.Link>
          <p className="sideBarLink">
            Product
          </p>
        </Nav.Link>
      </LinkContainer>

      <LinkContainer to='/transaction/sale'>
        <Nav.Link>
          <p className="sideBarLink">
            Sale
          </p>
        </Nav.Link>
      </LinkContainer>

      <LinkContainer to='/transaction/purchase'>
        <Nav.Link>
          <p className="sideBarLink">
            Purchase
          </p>
        </Nav.Link>
      </LinkContainer>

      <LinkContainer to='/setting'>
        <Nav.Link>
          <p className="sideBarLink">
            Setting
          </p>
        </Nav.Link>
      </LinkContainer>

    </div>
  )
}
export default SideList