import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Error404 from './Error404'
import ProductDetail from './ProductDetail'
import RequireAuth from './RequireAuth'
import Category from './Category'

const MainRouter = () => {
  return (
    <div className='container'>
    <Routes>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='products/:id' element={<ProductDetail />} />
        <Route path='/category/:slug' element={<Category />} />
        <Route path='*' element={<Error404 />}></Route>
    </Routes>
    </div>
  )
}

export default MainRouter