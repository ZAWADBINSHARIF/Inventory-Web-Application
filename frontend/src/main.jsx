// external import
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
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
import ErrorPage from './containers/ErrorPage.jsx'
import store from './redux/store.js'
import './index.scss'
import axios from 'axios'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/transaction/purchase' element={<Purchase />} />
      <Route path='/transaction/sale' element={<Sale />} />
      <Route path='/setting' element={<Setting />} />
    </Route>
  )
)

axios.defaults.baseURL = "http://localhost:3000/api"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
