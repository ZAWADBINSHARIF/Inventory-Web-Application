// external import
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// internal import
import App from './App.jsx'
import Home from './containers/Home.jsx'
import Purchase from './containers/Purchase.jsx'
import Sale from './containers/Sale.jsx'
import Setting from './containers/Setting.jsx'
import Product from './containers/Product.jsx'
import './index.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/transaction/purchase' element={<Purchase/>}/>
      <Route path='/transaction/sale' element={<Sale/>}/>
      <Route path='/setting' element={<Setting/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
