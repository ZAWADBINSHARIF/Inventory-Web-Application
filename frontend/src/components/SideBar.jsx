// internal import
import SideList from "./SideList"
const SideBar = () => {
    return (
        <div className="SideBar">
            <div className="SideBarHeading">
                <p>Inventory</p>
                <hr className="bg-primary"/>
            </div>
            <SideList/>
        </div>
    )
}
export default SideBar


// // internal import
// import SideList from "./SideList"
// // external import
// import { Offcanvas, Button } from "react-bootstrap"
// import { useState } from "react";

// const SideBar = () => {

//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <div className="SideBar">

//             <Button variant="primary" onClick={handleShow}>
//                 Launch
//             </Button>

//             <Offcanvas show={show} onHide={handleClose}>
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>
//                         <div className="SideBarHeading">
//                             <p>Inventory</p>
//                             <hr />
//                         </div>
//                     </Offcanvas.Title>
//                 </Offcanvas.Header>

//                 <Offcanvas.Body>

//                     <SideList />

//                 </Offcanvas.Body>


//             </Offcanvas>
//         </div>
//     )
// }
// export default SideBar