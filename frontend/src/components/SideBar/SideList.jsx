// internal import
import SideBarData from './SideBarData.js'
import SideListItem from './SideListItem.jsx'

const SideList = () => {
  return (
    <div className="SideList">

      {
        SideBarData.map((item, index) => (
          <SideListItem
            key={index}
            item={item}
          />
        ))
      }

    </div>
  )
}
export default SideList