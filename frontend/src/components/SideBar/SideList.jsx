// internal import
import SideBarData from './SideBarData.jsx'
import SideListItem from './SideListItem.jsx'

const SideList = () => {
  return (
    <div className="SideList">

      {
        SideBarData.map((item, index) => (
          <SideListItem
            key={index}
            item={item}
            index={index}
          />
        ))
      }

    </div>
  )
}
export default SideList