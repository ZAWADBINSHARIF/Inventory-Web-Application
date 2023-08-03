// external import
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import { useState } from 'react'

const SideListItem = ({ item, index }) => {
    return (
        <div className="SideListItem">

            <LinkContainer to={item.link}>
                <Nav.Link>
                    <p className="sideBarLink">
                        {item.title}
                    </p>
                </Nav.Link>
            </LinkContainer>

        </div>
    )
}
export default SideListItem