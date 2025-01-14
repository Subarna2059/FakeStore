import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Error404 from './Error404'
import ProductDetail from './ProductDetail'

const MainRouter = () => {
  return (
    <div className='container'>
    <Routes>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='products/:id' element={<ProductDetail />} />
        <Route path='*' element={<Error404 />}></Route>
    </Routes>
    </div>
  )
}

export default MainRouter