import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import {HiMiniShoppingBag} from 'react-icons/hi2'
import { useAuth } from '../../context/Auth'
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [auth,setAuth] = useAuth();

  const handleLogout = ()=>{
    setAuth({
      ...auth,
      user:null,
      token : ''
    })
    localStorage.removeItem('auth')
    Navigate("/login")
  }
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to ="/" className="navbar-brand" style={{display:"flex"}}> <HiMiniShoppingBag /> Home </Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {
        !auth.user ? (<>  <li className="nav-item">
        <NavLink to ="/Register" className="nav-link active" aria-current="page" >Register</NavLink>
      </li>
        <li className="nav-item">
        <NavLink to ="/login" className="nav-link" >Login</NavLink>
      </li>
      </>) : (<>
       <li className="nav-item dropdown">
  <NavLink 
  className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    
    {auth?.user?.name}
     </NavLink>
  <ul className="dropdown-menu">
  <li className="nav-item">  <NavLink to ={`/dashboard/${auth?.user.role===1 ? 'admin' : 'user'}`}   className="nav-link" >DashBoard</NavLink> </li>

    <li className="nav-item">  <NavLink to ="/login" onClick={handleLogout}  className="nav-link" >Logout</NavLink> </li>
  </ul>
</li>

    
      </>)
      }
        <li className="nav-item">
          <NavLink to ="/Category" className="nav-link active" aria-current="page" >Category</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to ="/login" className="nav-link" >Cart {0}</NavLink>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header