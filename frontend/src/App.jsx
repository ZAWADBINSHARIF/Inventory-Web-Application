// external import
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { useWindowSize } from 'react-use'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// internal import
import Header from "./components/Header"
import SideBar from "./components/SideBar/SideBar"
import MenuIcon from "./components/SideBar/MenuIcon"

function App() {

  const { width } = useWindowSize()
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <main className="App d-flex">

      <ToastContainer />
      <section className="section-1">

        {
          (width <= 1020) ?
            <div className="d-flex">
              <div style={{
                "marginLeft": (openMenu) ? "0px" : "-250px",
                "transition": "0.5s"
              }}>
                <SideBar />
              </div>
              <MenuIcon
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />
            </div>
            : <SideBar />
        }
      </section>

      <section className="section-2 min-vh-100 overflow-y-scroll p-md-5 px-1">
        <Header />
        <Outlet />
      </section>

    </main>
  )
}
export default App