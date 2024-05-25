import React from 'react'
import { NavLink } from 'react-router-dom'
function AdminMenu() {
  
    return (
    <>
    <div className="text-center">
<div className="list-group">
<h4>Admin Pannel</h4>
  <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">Create Category</NavLink>
  <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">create Produt</NavLink>
  <NavLink to="/dashboard/admin/Users" className="list-group-item list-group-item-action"> users </NavLink>
</div>
</div>

    </>
  )
}

export default AdminMenu