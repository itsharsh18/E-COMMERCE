import React from 'react'
import UserMenu from '../../componets/layout/UserMenu'
import {  useAuth } from '../../context/Auth'
function Dashboard() {
  const [auth] = useAuth();
  return (
    <>
    <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <UserMenu />
        </div>
        <div className="col-md-9">
            <h5> User Name:{ auth?.user?.name }</h5>
            <h5> User email:{ auth?.user?.email }</h5>
            <h5> User address:{ auth?.user?.address }</h5>
            <h5> User phone:{ auth?.user?.phone }</h5>


        </div>

      </div>
    </div>
    </>
  )
}

export default Dashboard