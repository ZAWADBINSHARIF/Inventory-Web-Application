// external import
import { Navbar } from 'react-bootstrap'

// internal import
import SideBarData from './SideBarData.jsx'
import SideListItem from './SideListItem.jsx'

const SideList = () => {
  return (
    <div className="SideList">
      <Navbar className='d-flex flex-column align-items-start'>

        {
          SideBarData.map((item, index) => (
            <SideListItem
              key={index}
              item={item}
              index={index}
            />
          ))
        }

      </Navbar>
    </div>
  )
}
export default SideList