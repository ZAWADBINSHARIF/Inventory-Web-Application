// internal import
import SideList from "./SideList"

const SideBar = () => {
    return (
        <div className="SideBar min-vh-100 bg-primary text-white">
            <div className="SideBarHeading">
                <p >Inventory</p>
                <hr className="bg-primary" />
            </div>
            <SideList />
        </div>
    )
}
export default SideBar