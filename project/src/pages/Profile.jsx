import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Profile = () => {
  return (
    <>
      <div className='row my-4 mx-2'>
        <div className='col-4'>
          <ul className="list-group">
            <NavLink to={'/profile'}>
            <li className="list-group-item active ">Add product<i style={{marginLeft:"30px"}} className="bi bi-plus"></i></li>
            </NavLink>
            <NavLink to={'/profile/update'}>
            <li className="list-group-item">Update product <i style={{marginLeft:"4px"}} className="bi bi-pencil"></i></li>
            </NavLink>
            <NavLink to={'/profile/delete'}>
            <li className="list-group-item">Delete Product <i style={{marginLeft:"4px"}} className="bi bi-trash"></i></li>
            </NavLink>
          </ul>
        </div>
        <div className='col-8'>
        <Outlet />
      </div>
      </div>
      
    </>
  )
}

export default Profile