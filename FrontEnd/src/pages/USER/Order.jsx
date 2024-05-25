import React from 'react'
import UserMenu from '../../componets/layout/UserMenu'

const Order = () => {
  return (
    <>
    <div className="container-fluid p-3 m-3">
    <div className="row">
        <div className="col-md-3">
            <UserMenu />
        </div>
        <div className="col-md-9">
            <h1>  All orders </h1>
        </div>

    </div>
    </div>
 
    </>
  )
}

export default Order