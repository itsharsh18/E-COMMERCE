import React from 'react'
import AdminMenu from '../../componets/layout/AdminMenu'

const CreateCategory = () => {
  return (
    <>
    
    <div className="container-fluid m-3 p-3">
    <div className="row">
        <div className="col-md-3">
            <AdminMenu />
        </div>
        <div className="col-md-9">
            <h4>createcategory</h4>
        </div>
    </div>
    </div>
    </>
  )
}

export default CreateCategory