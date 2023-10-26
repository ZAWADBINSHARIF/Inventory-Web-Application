// external import
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'

const SideListItem = ({ item }) => {

    return (
        <div className="SideListItem w-100">

            <LinkContainer to={item.link}>
                <Nav.Link>
                    <p className="sideBarLink">
                        <item.icon />
                        {item.title}
                    </p>
                </Nav.Link>
            </LinkContainer>
        </div>
    )
}
export default SideListItem