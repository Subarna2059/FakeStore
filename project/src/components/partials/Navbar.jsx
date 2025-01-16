import React from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { clear, getItem } from '../../utils/storageUtils'

const Navbar = () => {
  const navigate = useNavigate();
    const accessToken = getItem('accessToken');
    const handleLogout = () => {
        clear();
        navigate("/login")
    }
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to={""}>Ecommerce Application</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" style={{display:'flex', justifyContent:'space-between', marginRight:'10px'}} id="navbarSupportedContent">
    <div>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to={"/"}>Home </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to={"/dashboard"}>Dashboard</NavLink>
      </li>
      { accessToken && <li className="nav-item active pe-auto">
        <span className="nav-link" onClick={handleLogout} style={{cursor:"pointer"}}>Logout</span>
      </li>}
    </ul>
    </div>
        <div>
    {accessToken &&
        <span ><i className="bi bi-person-circle"></i></span>
      }
      </div>
  </div>
</nav>
   </>
  )
}

export default Navbar