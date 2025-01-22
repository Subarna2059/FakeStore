import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Error404 from './Error404'
import ProductDetail from './ProductDetail'
import RequireAuth from './RequireAuth'
import Category from './Category'
import Profile from './Profile'
import AddProduct from './ProductPage/AddProduct'
import UpdateProduct from './ProductPage/UpdateProduct'
import DeleteProduct from './ProductPage/DeleteProduct'

const MainRouter = () => {
  return (
    <div className='container'>
    <Routes>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='products/:id' element={<ProductDetail />} />
        <Route path='/category/:slug' element={<Category />} />
        <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>}>
          <Route index={true} element={<RequireAuth><AddProduct /></RequireAuth>}></Route>
          <Route path='update' element={<RequireAuth><UpdateProduct /></RequireAuth>}></Route>
          <Route path='delete' element={<RequireAuth><DeleteProduct /></RequireAuth>}></Route>
        </Route>
        <Route path='*' element={<Error404 />}></Route>
    </Routes>
    </div>
  )
}

export default MainRouter