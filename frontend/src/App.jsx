// external import
import { Outlet } from "react-router-dom"
import { Col, Row } from 'react-bootstrap'

// internal import
import Header from "./components/Header"
import SideBar from "./components/SideBar"

function App() {
  return (
    <div className="App">

      <Row>

        <Col md={2}>
          <SideBar />
        </Col>

        <Col md={9}>
          <main className="main">
            <Header />
            <Outlet />
          </main>
        </Col>

      </Row>

    </div>
  )
}
export default App